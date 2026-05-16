import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs, orderBy, updateDoc, doc, limit, deleteDoc } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile };
export { collection, addDoc, serverTimestamp, query, where, getDocs, orderBy, updateDoc, doc, limit, deleteDoc };
