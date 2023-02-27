// FireBase Variables
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDRI2z1ffcZTrlMpzXaQEXir_5UniOKnVI",
  authDomain: "daryustagram.firebaseapp.com",
  projectId: "daryustagram",
  storageBucket: "daryustagram.appspot.com",
  messagingSenderId: "740893742249",
  appId: "1:740893742249:web:26dabd1d879810a73985b8",
  measurementId: "G-XKY87M9H26",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth();
export const provider = new GithubAuthProvider();

export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginGithub = () => {
  return signInWithPopup(auth, provider);
};

export const min_height = 140;
export const max_height = 200;

export function SetCookie(name, value) {
  document.cookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";path=/";
}

export function GetCookie(name) {
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
}

// export function GetDocumentExists(collection, document) {
//     getDoc(doc(db, collection, document)).then(docSnap => {
//         if (docSnap.exists()) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

// export function GetDocumentAllData(collection, document) {
//     getDoc(doc(db, collection, document)).then(docSnap => {
//         if (docSnap.exists()) {
//             return docSnap;
//         } else {
//             console.log("문서를 불러오지 못했습니다!");
//         }
//     });
// }

// export function CreateID(collection, document_name) {
//     setDoc(doc(db, collection, document_name), {
//         id: document_name
//     });
// }
