import firebase from "firebase/app";
import "firebase/database";


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAcrQYf_Yc_XYAWl_ayZHfdJC0U1FEC28k",
    authDomain: "balckpinkdb.firebaseapp.com",
    databaseURL: "https://balckpinkdb-default-rtdb.firebaseio.com",
    projectId: "balckpinkdb",
    storageBucket: "balckpinkdb.appspot.com",
    messagingSenderId: "203949750547",
    appId: "1:203949750547:web:586babd06a289dfe36c2e6",
    measurementId: "G-56XE7LYS79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const data=firebase.database();
  export {data, firebase as default};