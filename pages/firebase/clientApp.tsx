import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9neSU9BsJSPhx0w6MptSIQxpUr82W24Q",
  authDomain: "login-203da.firebaseapp.com",
  projectId: "login-203da",
  storageBucket: "login-203da.appspot.com",
  messagingSenderId: "507932617298",
  appId: "1:507932617298:web:d23e8b912f7d22ef14cd8b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
