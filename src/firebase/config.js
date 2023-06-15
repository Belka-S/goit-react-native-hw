import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCx0as6NGuS0-8NSOLj_-6C8JldPazUbR8',
  authDomain: 'rn-image-hw.firebaseapp.com',
  projectId: 'rn-image-hw',
  storageBucket: 'rn-image-hw.appspot.com',
  messagingSenderId: '960606314061',
  appId: '1:960606314061:web:9f72e570aae89b12b9c604',
  measurementId: 'G-HKTSNRM3F0',
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyBX_ZtbZRvjFyU7mqn7i0Mj5EafDcOuKkY',
//   authDomain: 'rn-image-hw-fa53a.firebaseapp.com',
//   projectId: 'rn-image-hw-fa53a',
//   storageBucket: 'rn-image-hw-fa53a.appspot.com',
//   messagingSenderId: '882704976085',
//   appId: '1:882704976085:web:7ba22f8d837e2b607e3a5c',
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
