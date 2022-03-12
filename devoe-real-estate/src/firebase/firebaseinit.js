import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgCOhRFCojPEAKUuZ3_Vgb_hyXLavNgrY",
  authDomain: "devoe-2b5b3.firebaseapp.com",
  projectId: "devoe-2b5b3",
  storageBucket: "devoe-2b5b3.appspot.com",
  messagingSenderId: "977488291433",
  appId: "1:977488291433:web:8e1b93ec8e5010542c64f8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
