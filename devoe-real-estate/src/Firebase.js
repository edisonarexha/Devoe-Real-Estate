import 'core-js/es/array';
import { firebase } from './firebase';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyBgCOhRFCojPEAKUuZ3_Vgb_hyXLavNgrY",
  authDomain: "devoe-2b5b3.firebaseapp.com",
  projectId: "devoe-2b5b3",
  storageBucket: "devoe-2b5b3.appspot.com",
  messagingSenderId: "977488291433",
  appId: "1:977488291433:web:8e1b93ec8e5010542c64f8"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(this.settings); 
firebase.auth().onAuthStateChanged(user=>{
  store.dispatch("fetchUser", user)
});

firebase.getCurrentUser = () =>{
  return new Promise((resolve, reject)=>{
    const unsubscribe = firebase.auth().onAuthStateChanged(user=> {
      unsubscribe();
      resolve(user);
    }, reject)
  })
}

export default firebase;