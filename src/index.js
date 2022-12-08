import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQx8v0fdiFHtoJHEjKczbJOCbgbb3uvig",
  authDomain: "e-commerce-cb895.firebaseapp.com",
  projectId: "e-commerce-cb895",
  storageBucket: "e-commerce-cb895.appspot.com",
  messagingSenderId: "445107404857",
  appId: "1:445107404857:web:e4932bc0d4f26621ec8de8"
};


const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

