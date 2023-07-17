// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBW0PZW_WHVrHfHAcDeWnBhz4XZeEaTZbE',
    authDomain: 'blog-5b7cc.firebaseapp.com',
    projectId: 'blog-5b7cc',
    storageBucket: 'blog-5b7cc.appspot.com',
    messagingSenderId: '281459165050',
    appId: '1:281459165050:web:5fbc8b484dc12e0dbeb8c3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);
