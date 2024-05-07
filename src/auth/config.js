import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCBiAssWAooezRLE_D1QozvmxjT3AD8bCY",

    authDomain: "greenbyte-website.firebaseapp.com",

    projectId: "greenbyte-website",

    storageBucket: "greenbyte-website.appspot.com",

    messagingSenderId: "524328902338",

    appId: "1:524328902338:web:59ef2025123e779d3f255b"

};


const app = initializeApp(firebaseConfig)

//init firestore
const auth = getAuth(app)
setPersistence(auth, browserSessionPersistence) //use this to log out the user after each browser session

export { auth }