import {createContext, useContext, useState, useEffect} from 'react';
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth';
import { addDoc, getFirestore, collection , getDocs} from 'firebase/firestore';
import { getStorage, ref, uploadBytes }  from 'firebase/storage';
import userEvent from '@testing-library/user-event';

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyDa3CM4LL0BkwO_7SILWQvpBv72phktP1E",
    authDomain: "reminder-app-5132d.firebaseapp.com",
    projectId: "reminder-app-5132d",
    storageBucket: "reminder-app-5132d.appspot.com",
    messagingSenderId: "736382198875",
    appId: "1:736382198875:web:b68a7e320bc97fc1a40b7e",
    measurementId: "G-TT2GND8Q22",
    databaseURL: "https://reminder-app-5132d-default-rtdb.firebaseio.com/"
};


export const useFirebase= () => useContext(FirebaseContext);
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const firestore=  getFirestore(app);
const storage = getStorage(app);

export const FirebaseProvider=(props) =>{
    const [user,setUser] = useState(null);
    useEffect(() =>{
        onAuthStateChanged(firebaseAuth,    (user) =>{
            if(user) setUser(user);
            else setUser(null);
        });
    },[]);

   const signupUserWithEmailAndPassword = (email, password)=>
   createUserWithEmailAndPassword(firebaseAuth,email,password);

   const signinWithEmailAndPassword = (email, password) => 
   signInWithEmailAndPassword(firebaseAuth,email,password);

   const signinWithGoogle = () => 
   signInWithPopup(firebaseAuth,googleProvider);

   const isLoggedIn =user ? true : false;

   console.log(user);

   const handleAddReminder = async (name, dateString,timeString) =>{
   return await addDoc(collection(firestore,'reminder'),{
        name,
        dateString,
        timeString,
        userId :user.uid,
        userEmail :user.email,
        displayName: user.displayName,
    });
   };

    const getListAllReminder = () =>{
        return getDocs(collection(firestore,'reminder'))
    };


    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinWithEmailAndPassword, signinWithGoogle, handleAddReminder,
        isLoggedIn,getListAllReminder,}}>
            {props.children}
        </FirebaseContext.Provider>
    )
};

