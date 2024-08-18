import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataManagementInterface} from '../helpers';

export const GetData = async ({collectionName}: DataManagementInterface) => {
  try {
    const existingCollection = await AsyncStorage.getItem(collectionName);
    if (existingCollection) {
      return JSON.parse(existingCollection);
    } else {
      return 'No data found';
    }
  } catch (error) {
    console.error('Error managing async data:', error);
    return 'Failed to get data';
  }
};
