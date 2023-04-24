import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {FirebaseProvider} from './context/Firebase';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseProvider>
    <App />
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDa3CM4LL0BkwO_7SILWQvpBv72phktP1E",
//   authDomain: "reminder-app-5132d.firebaseapp.com",
//   projectId: "reminder-app-5132d",
//   storageBucket: "reminder-app-5132d.appspot.com",
//   messagingSenderId: "736382198875",
//   appId: "1:736382198875:web:b68a7e320bc97fc1a40b7e",
//   measurementId: "G-TT2GND8Q22",
//   databaseURL: "https://reminder-app-5132d-default-rtdb.firebaseio.com/"

//  };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

