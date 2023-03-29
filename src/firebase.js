import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyD4vxZexUo0iBvd7S_cusuriUAzMsv6tWI",
  authDomain: "my-project001-c0b01.firebaseapp.com",
  projectId: "my-project001-c0b01",
  storageBucket: "my-project001-c0b01.appspot.com",
  messagingSenderId: "802351750546",
  appId: "1:802351750546:web:30018c9f575f0405f4b54b",
  measurementId: "G-5RVTX90TKH"
};
const App = initializeApp(firebaseConfig);
const auth = getAuth(App);
export default auth;

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,