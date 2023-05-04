// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
  // apiKey: "AIzaSyAy7XDvl-N-MbdDx93Ies6CNTqF81kOvOg",
  // authDomain: "kadam-myagdi.firebaseapp.com",
  // projectId: "kadam-myagdi",
  // storageBucket: "kadam-myagdi.appspot.com",
  // messagingSenderId: "774905408025",
  // appId: "1:774905408025:web:d3782e5c44c0f0928c1888",
  // measurementId: "G-VBXEV06EFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);