// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
//   apiKey: "AIzaSyAy7XDvl-N-MbdDx93Ies6CNTqF81kOvOg",
//   authDomain: "kadam-myagdi.firebaseapp.com",
//   projectId: "kadam-myagdi",
//   storageBucket: "kadam-myagdi.appspot.com",
//   messagingSenderId: "774905408025",
//   appId: "1:774905408025:web:d3782e5c44c0f0928c1888",
//   measurementId: "G-VBXEV06EFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);