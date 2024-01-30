import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs0WRsNCMDnWaIsUAWBOG_JkL1Ed3CdCM",
  authDomain: "opengram-website.firebaseapp.com",
  projectId: "opengram-website",
  storageBucket: "opengram-website.appspot.com",
  messagingSenderId: "1018997599533",
  appId: "1:1018997599533:web:76ee32592f00a1104237a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firestore
const db = getFirestore(app);

//initilize Storage
const storage = getStorage(app); 

export {db, storage}