import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDGK5PL3-sYj7fIh2aIGhecX51-y0ueQFc',
  authDomain: 'tracker-d96b2.firebaseapp.com',
  projectId: 'tracker-d96b2',
  storageBucket: 'tracker-d96b2.appspot.com',
  messagingSenderId: '831430134559',
  appId: '1:831430134559:web:d6533b0b5df7ea35acbe2a',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);