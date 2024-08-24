import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut ,sendEmailVerification } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDNp-EQYx8vrHwCUUTbcI5sHhQqXIXi6Kk',
  authDomain: 'worko-47998.firebaseapp.com',
  projectId: 'worko-47998',
  storageBucket: 'worko-47998.appspot.com',
  messagingSenderId: '911509056294',
  appId: '1:911509056294:web:d5ea240d2cd34438e06fe7',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, signOut ,sendEmailVerification};
