import firebase from "firebase/app";
import "@firebase/firestore";


const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCjNJ1tklZLqeUsWwLfuSwvdMRoXXM6-fY",
        authDomain: "padel-39ffe.firebaseapp.com",
        projectId: "padel-39ffe",
        storageBucket: "padel-39ffe.appspot.com",
        messagingSenderId: "539527255559",
        appId: "1:539527255559:web:0a1fa37b7bc6eb53f1bca2"
    });


  export function getFirebase() {
      return app;
  }

  export function getFirestore(){
    return firebase.firestore(app);
  }