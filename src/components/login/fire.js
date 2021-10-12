import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB58CiptQPVX0KWWxy8ywjShxdWaeXKSEk",
    authDomain: "login-abf2a.firebaseapp.com",
    projectId: "login-abf2a",
    storageBucket: "login-abf2a.appspot.com",
    messagingSenderId: "276602843300",
    appId: "1:276602843300:web:6b43cfc0203417558a3631"
  };
  
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;    