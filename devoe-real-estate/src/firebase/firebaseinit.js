import {getAuth,onAuthStateChanged} from '@firebase/auth'; 
import { initializeApp } from '@firebase/app';
import store from '../store'

const firebaseConfig = {
  apiKey: "AIzaSyBgCOhRFCojPEAKUuZ3_Vgb_hyXLavNgrY",
  authDomain: "devoe-2b5b3.firebaseapp.com",
  projectId: "devoe-2b5b3",
  storageBucket: "devoe-2b5b3.appspot.com",
  messagingSenderId: "977488291433",
  appId: "1:977488291433:web:8e1b93ec8e5010542c64f8"
};

initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(),(user)=>{
  store.dispatch("setUser",user);
});
