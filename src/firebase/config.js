import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: "masteriseland-24c21.firebaseapp.com",
  databaseURL: "https://masteriseland-24c21-default-rtdb.firebaseio.com",
  projectId: "masteriseland-24c21",
  storageBucket: "masteriseland-24c21.appspot.com",
  messagingSenderId: "1076623350790",
  appId: "1:1076623350790:web:95460270876c282a63b787",
};

const app = initializeApp(firebaseConfig);
