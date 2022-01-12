import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here



const firebaseConfig = {
    apiKey: "AIzaSyCFZEgGz3-rVl3V9nFgR0uht7P2st3W13E",
    authDomain: "complaint-forum-3ce78.firebaseapp.com",
    projectId: "complaint-forum-3ce78",
    storageBucket: "complaint-forum-3ce78.appspot.com",
    messagingSenderId: "878109403792",
    appId: "1:878109403792:web:5b39f875e139ad90edc615"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


