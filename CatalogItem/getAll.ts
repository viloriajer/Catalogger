import {getDocs, collection, Timestamp} from 'firebase/firestore';
import {db} from '../firebase/config';

const collection_name = 'items';

export type CatalogItem = {
  id: string;
  title: string;
  purchaseDate: Timestamp;
  serialNo: string;
};

export const getAll = async () => {
  const data = (await getDocs(collection(db, collection_name)).then(
    querySnapshot => {
      return querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    },
  )) as Array<CatalogItem>;
  return data;
};
