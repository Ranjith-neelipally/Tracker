import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataManagementInterface} from '../helpers';

export const DeleteData = async ({collectionName}: DataManagementInterface) => {
  try {
    if (!collectionName) {
      throw new Error('Collection name is required.');
    }

    const existingCollection = await AsyncStorage.getItem(collectionName);
    if (existingCollection) {
      const response = await AsyncStorage.removeItem(collectionName);
      if (response !== undefined || response !== null) {
        return 'Data deleted successfully';
      }
    } else {
      return 'No data found';
    }
  } catch (error) {}
};
