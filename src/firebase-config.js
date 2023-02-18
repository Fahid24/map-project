import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCB-LKpJVfafY2ddjG1oXrgxljJRlBF6Tg",
  authDomain: "restaurant-project-f2dba.firebaseapp.com",
  databaseURL: "https://restaurant-project-f2dba-default-rtdb.firebaseio.com",
  projectId: "restaurant-project-f2dba",
  storageBucket: "restaurant-project-f2dba.appspot.com",
  messagingSenderId: "907660534038",
  appId: "1:907660534038:web:746e96fa3077f29449b037",
  measurementId: "G-20P34ET9LK",
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore(app)
export const storage = getStorage(app)

export default db
