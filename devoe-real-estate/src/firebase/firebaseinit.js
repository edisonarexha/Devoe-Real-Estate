import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

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
