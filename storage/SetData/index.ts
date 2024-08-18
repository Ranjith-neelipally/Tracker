import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataManagementInterface} from '../helpers';

const generateUniqueId = () => {
  return `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const SetData = async ({
  collectionName,
  collectionData,
}: DataManagementInterface) => {
  try {
    const existingCollection = await AsyncStorage.getItem(collectionName);
    const uniqueId = generateUniqueId();
    if (existingCollection) {
      return 'Data already exists in the collection. Use "update" action to modify existing data.';
    }

    if (!collectionData) {
      return 'Data is required to save.';
    }

    const dataToBeSaved = {id: uniqueId, ...collectionData};
    const response = await AsyncStorage.setItem(
      collectionName,
      JSON.stringify(dataToBeSaved),
    );

    if (response !== undefined || response !== null) {
      return 'Data saved successfully';
    } else {
      return 'Failed to save data';
    }
  } catch (error) {
    console.error('Error managing async data:', error);
    return 'Failed to save data';
  }
};
