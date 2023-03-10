// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClY6-g4o8xVU84S4D9KTsM2JTguRDr0sE",
  authDomain: "stackathon-ad298.firebaseapp.com",
  projectId: "stackathon-ad298",
  storageBucket: "stackathon-ad298.appspot.com",
  messagingSenderId: "1075465469905",
  appId: "1:1075465469905:web:804baeb2d88abdd648eaf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
