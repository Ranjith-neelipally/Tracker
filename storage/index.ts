import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataManagementInterface} from './helpers';
import {SetData} from './SetData';
import {GetData} from './GetData';
import {DeleteData} from './deteleData';

export const manageAsyncData = async ({
  action,
  id,
  collectionName,
  collectionData,
}: DataManagementInterface) => {
  try {
    if (!collectionName) {
      throw new Error('Collection name is required.');
    }

    switch (action) {
      case 'set':
        const setDataresponse = await SetData({
          action: 'set',
          collectionName,
          collectionData,
        });
        return setDataresponse;

      case 'get':
        const getDataresponse = await GetData({
          action: 'get',
          collectionName,
        });
        return getDataresponse;

      case 'remove':
        const deleteresponse = await DeleteData({
          action: 'remove',
          collectionName,
        });
        return deleteresponse;

      default:
        return 'Invalid action provided.';
    }
  } catch (error) {
    console.error('Error managing async data:', error);
    return 'Failed to save data';
  }
};
