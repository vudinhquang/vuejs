// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import firebaseConfig from  "./firebaseConfig";
import "firebase/database";
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// get list
// var tasksRef = database.ref('tasks');
// tasksRef.on('value', function(snapshot) {
//     console.log("snapshot",snapshot.toJSON());
//     console.log("snapshot",snapshot);
//     snapshot.forEach(function(childSnapshot) {
//         console.log('childSnapshot', childSnapshot);
//         var childData = childSnapshot.val();
//         console.log(childData);
//     });
// });

// set data
// database.ref('tasks/sdfrrgthththj').set({
//     username: 'edit test',
//     email: 'email',
//     profile_picture : 'imageurl'
// });

// database.ref('tasks/my-id').set({
//     abc: 'test 3'
// });

// const taskRef = database.ref('tasks');
// taskRef.push({
//     title: 'tieu de',
//     name: 'dsdf'
// });

export default database;