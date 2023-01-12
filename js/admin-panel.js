import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword,connectAuthEmulator,AuthErrorCodes } from "./firebase/auth";
 var email = document.getElementById('email');
 var password = document.getElementById('password');
 var btnLogin = document.getElementById('signin');

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyCp0o-PqJ9rGBO9ujIR4EL45K-7Ft47DBA",
    authDomain: "mahanishere.firebaseapp.com",
    projectId: "mahanishere",
    storageBucket: "mahanishere.appspot.com",
    messagingSenderId: "66042949772",
    appId: "1:66042949772:web:1c1ac2a7972818e8f78ba9",
    measurementId: "G-ZH9Y94D1PL"
  });
  
  const auth = getAuth(firebaseApp);
  connectAuthEmulator(auth,"http://localhost:9099");

  const signinEmailPassword = async() =>{
    console.log('function runned');
    const loginEmail = email.value;
    const loginPassword = password.value;
   const userCredential = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
   console.log(userCredential.user);
   alert('heyy'); 
  }

  btnLogin.addEventListener("click",signinEmailPassword);
