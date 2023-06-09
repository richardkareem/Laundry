import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZylwtYNGo6rRQrEM2O8SRRHaJGTGrEf0",
  authDomain: "latihan-firebase-maret.firebaseapp.com",
  projectId: "latihan-firebase-maret",
  storageBucket: "latihan-firebase-maret.appspot.com",
  messagingSenderId: "882875195727",
  appId: "1:882875195727:web:f6c0923e02d75cb2fe253a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);