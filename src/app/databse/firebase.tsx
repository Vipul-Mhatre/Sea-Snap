import { 
  initializeApp, 
} from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, getIdToken, onAuthStateChanged as _onAuthStateChanged, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
import User from "./user";

export const firebaseConfig = {
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
const auth = getAuth(firebaseApp);

export async function registerUser(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  await signOut(auth)
}

export function getUser() {
  console.log("Current:")
  console.log(auth.currentUser)
  if (auth.currentUser == null) {
    return null
  } else {
    return new User(auth.currentUser.uid, "user")
  }
}
