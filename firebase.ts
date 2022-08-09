import * as firebase from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig,'sidharth-portfolio-app');
const db = getFirestore(firebaseApp);

export default db;
