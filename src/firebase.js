import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBJ5aSnlkQxArK5ZfShCPKHlSSBFYe3WsQ",
  authDomain: "ecommerce-f3408.firebaseapp.com",
  projectId: "ecommerce-f3408",
  storageBucket: "ecommerce-f3408.appspot.com",
  messagingSenderId: "46302056050",
  appId: "1:46302056050:web:8422e077bcfd421e5afceb"
};

const firebaseApp= firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export {auth}