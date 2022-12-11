import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxwp1Xunolw9n2KbUHbhlVX_pHXtFbkPQ",
  authDomain: "aidkose-crud-todo.firebaseapp.com",
  projectId: "aidkose-crud-todo",
  storageBucket: "aidkose-crud-todo.appspot.com",
  messagingSenderId: "149277448567",
  appId: "1:149277448567:web:4b8dca007703bfa181a972",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
