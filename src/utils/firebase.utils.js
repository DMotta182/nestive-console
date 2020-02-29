import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBHudR0hXvMf2pvVss6QVdirEEH4QY14q8",
    authDomain: "nesstive-console-dev.firebaseapp.com",
    databaseURL: "https://nesstive-console-dev.firebaseio.com",
    projectId: "nesstive-console-dev",
    storageBucket: "nesstive-console-dev.appspot.com",
    messagingSenderId: "683644316048",
    appId: "1:683644316048:web:348b9b655bb9d4946b6b15"
  };

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;