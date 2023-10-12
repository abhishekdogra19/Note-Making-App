import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.REACT_API_apikey,
  authDomain: "markdown-notes-af24a.firebaseapp.com",
  projectId: "markdown-notes-af24a",
  storageBucket: "markdown-notes-af24a.appspot.com",
  messagingSenderId: "522909824779",
  appId: "1:522909824779:web:c4960bf4c0c72ceb90d40e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
