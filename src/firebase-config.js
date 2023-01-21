import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDfhEqAk-GhJqPDHTQE1i5HOVVMFHrdMkM",
  authDomain: "marathi-association.firebaseapp.com",
  projectId: "marathi-association",
  storageBucket: "marathi-association.appspot.com",
  messagingSenderId: "547054125155",
  appId: "1:547054125155:web:f2ef2bee72396dfd927856",
  measurementId: "G-ZFK016CJ85",
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore(app)
export const storage = getStorage(app)

export default db
