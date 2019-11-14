// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import firebaseConfig from  "./firebaseConfig";
import "firebase/database";
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('task').set({
    username: 'edit test',
    email: 'email',
    profile_picture : 'imageurl'
});

export default database;