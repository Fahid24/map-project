import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBlHtedyRMUOSJVohmaZZq0J6hX_buNkLw",
  authDomain: "email-password-auth-e4dec.firebaseapp.com",
  projectId: "email-password-auth-e4dec",
  storageBucket: "email-password-auth-e4dec.appspot.com",
  messagingSenderId: "816962223903",
  appId: "1:816962223903:web:aa2fc783d5f4a9cc853a2a",
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore(app)
export const storage = getStorage(app)

export default db
