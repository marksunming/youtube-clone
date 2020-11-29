import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVjR-tzxi6j5mNGjYYPuvZpoNR7ODnOwE",
    authDomain: "clone-297d0.firebaseapp.com",
    databaseURL: "https://clone-297d0.firebaseio.com",
    projectId: "clone-297d0",
    storageBucket: "clone-297d0.appspot.com",
    messagingSenderId: "528896984257",
    appId: "1:528896984257:web:79e383f924dd2f6a744040",
    measurementId: "G-7VLFC5011Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;

