// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DB_KEY,
  authDomain: process.env.NEXT_PUBLIC_DB_AUTH,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_DB_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_DB_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_DB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_DB_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

async function registerUser(formData: FormData) {
  const auth = getAuth(firebaseApp);
  const email = formData.get("email")!.toString()
  const password = formData.get("password")!.toString()
  let error = null
  let result = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
    return console.log(e);
  }
}

export default registerUser