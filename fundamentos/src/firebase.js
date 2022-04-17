
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXs1w62MRETLU4iOE6_qq6-jncFv_nY1I",
  authDomain: "crud-basico-react-1b580.firebaseapp.com",
  projectId: "crud-basico-react-1b580",
  storageBucket: "crud-basico-react-1b580.appspot.com",
  messagingSenderId: "100123547982",
  appId: "1:100123547982:web:7fb43764658249fa0be61f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}