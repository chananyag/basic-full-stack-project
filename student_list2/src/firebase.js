import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore  }  from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAwiUZTgv1YZXbQgYmiz3nWHPgrN-R0dY8",
  authDomain: "student-list-8ab41.firebaseapp.com",
  projectId: "student-list-8ab41",
  storageBucket: "student-list-8ab41.appspot.com",
  messagingSenderId: "574677820535",
  appId: "1:574677820535:web:235bacb4f13c1e9b4f5272",
  measurementId: "G-4WMVBRY85H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);