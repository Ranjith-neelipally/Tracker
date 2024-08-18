type DataManagementAction = 'get' | 'set' | 'remove';

export interface DataManagementInterface {
  action: DataManagementAction;
  id?: string;
  collectionName: string;
  collectionData?: {
    [key: string | number]: any;
  };
}
