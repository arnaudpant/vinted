import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBemG2dk7iQ6jtmVgTU81sy5-H_HqvMML4',
  authDomain: 'bootcamp-project-vinted.firebaseapp.com',
  projectId: 'bootcamp-project-vinted',
  storageBucket: 'bootcamp-project-vinted.appspot.com',
  messagingSenderId: '239313519946',
  appId: '1:239313519946:web:fbcb5d48926508d982adb3',
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
