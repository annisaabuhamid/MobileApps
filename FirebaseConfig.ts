// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBT9AddBc4-oyb6Xsa-L82EFdA3DsLGJ_o',
  authDomain: 'rnauthtutor.firebaseapp.com',
  projectId: 'rnauthtutor',
  storageBucket: 'rnauthtutor.appspot.com',
  messagingSenderId: '564494154467',
  appId: '1:564494154467:web:ab9eb6ff95a47a7b6aa3d6',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
