import { firebase } from "firebase/app";
import "firebase/firestore "

var firebaseConfig = {
  apiKey: "AIzaSyBgCOhRFCojPEAKUuZ3_Vgb_hyXLavNgrY",
  authDomain: "devoe-2b5b3.firebaseapp.com",
  projectId: "devoe-2b5b3",
  storageBucket: "devoe-2b5b3.appspot.com",
  messagingSenderId: "977488291433",
  appId: "1:977488291433:web:8e1b93ec8e5010542c64f8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = fireba.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();