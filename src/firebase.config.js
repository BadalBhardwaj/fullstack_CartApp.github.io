import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCPMv0FVZvqITMOIKAB6Fm5Mi0ifSdGYN8",
    authDomain: "foodapp-2034b.firebaseapp.com",
    databaseURL: "https://foodapp-2034b-default-rtdb.firebaseio.com",
    projectId: "foodapp-2034b",
    storageBucket: "foodapp-2034b.appspot.com",
    messagingSenderId: "725620092909",
    appId: "1:725620092909:web:4d3a262889c9821d2d41e4",
    measurementId: "G-HH59LN37E0"
  };
  

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};