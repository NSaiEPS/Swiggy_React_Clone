import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOBy9_DiiF7U8_HRgh6563dN1OwQQ_Q2k",
    authDomain: "swiggy-react-clone.firebaseapp.com",
    projectId: "swiggy-react-clone",
    storageBucket: "swiggy-react-clone.appspot.com",
    messagingSenderId: "1024462835076",
    appId: "1:1024462835076:web:d5441de3342dbd0136a1d1",
    measurementId: "G-1YDS2RR8GP"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider();

export  {db,auth,provider};