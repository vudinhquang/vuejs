// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxsjbi8nauxxj9Tll4M6HJe0JoTYwb0qg",
    authDomain: "vuejs-9b86e.firebaseapp.com",
    databaseURL: "https://vuejs-9b86e.firebaseio.com",
    projectId: "vuejs-9b86e",
    storageBucket: "vuejs-9b86e.appspot.com",
    messagingSenderId: "271018060056",
    appId: "1:271018060056:web:2ec7f991423e5d2292166d",
    measurementId: "G-8DJ85SPRVC"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

firebase.database().ref('task').set({
    username: 'name',
    email: 'email',
    profile_picture : 'imageurl'
});

export default database;