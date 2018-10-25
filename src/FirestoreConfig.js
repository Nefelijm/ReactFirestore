import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyBI3BPkeV9yC4whdU3TpjTNlZDqCVHxdnY",
    authDomain: "reactfirestore-cd0f3.firebaseapp.com",
    projectId: "reactfirestore-cd0f3",
});

let db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

export default db;

