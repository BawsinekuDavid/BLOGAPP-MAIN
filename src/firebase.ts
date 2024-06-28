// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxP81ZliCSwZw_MzJ0gO3f9mogTbkXuMw",
  authDomain: "blog-81fe0.firebaseapp.com",
  projectId: "blog-81fe0",
  storageBucket: "blog-81fe0.appspot.com",
  messagingSenderId: "169159634735",
  appId: "1:169159634735:web:99f44d851365170db4fbda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
