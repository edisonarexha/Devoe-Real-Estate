import {getAuth,onAuthStateChanged} from '@firebase/auth'; 
import { initializeApp } from '@firebase/app';
import store from '../store'

var firebaseConfig = {
  apiKey: "AIzaSyArhxDapzJZPrZB2UAGREUSj2CIg27rtV0",
  authDomain: "devoev2.firebaseapp.com",
  projectId: "devoev2",
  storageBucket: "devoev2.appspot.com",
  messagingSenderId: "1072487555075",
  appId: "1:1072487555075:web:442a2f92b94689ded26e36"
};

 initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(), async (user) => {
  const tokenResult = user
    ? await getAuth().currentUser.getIdTokenResult()
    : { claims: null };

  store.dispatch("fetchUser", { user, claims: tokenResult.claims });
});