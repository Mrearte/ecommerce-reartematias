import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCqjkNU4_UH9wYwH2KjNlIkZJsT5hbCA4s",
  authDomain: "ecommerce-reartematias.firebaseapp.com",
  projectId: "ecommerce-reartematias",
  storageBucket: "ecommerce-reartematias.appspot.com",
  messagingSenderId: "341374144521",
  appId: "1:341374144521:web:04f53de5c1fcf8596ae8d8",
  measurementId: "G-Y5LTGC3SH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)