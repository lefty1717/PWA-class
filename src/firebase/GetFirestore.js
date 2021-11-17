import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { config } from '../firebase/firebaseConfig';

const firebaseApp = initializeApp(config);
const db = getFirestore();

export {db};