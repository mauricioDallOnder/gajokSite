import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzwtzPvmo05QKV-yTHGGFR8OrSiWlUxbQ",
  authDomain: "fotosgajok.firebaseapp.com",
  projectId: "fotosgajok",
  storageBucket: "fotosgajok.appspot.com",
  messagingSenderId: "377895874892",
  appId: "1:377895874892:web:e705acfc3ec780294adfe9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);