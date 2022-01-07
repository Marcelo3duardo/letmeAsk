

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTO_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MASSAGIN_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//talvez ele tenha mudado o formato por conta da escrita do typescript
 const auth = firebase.auth();
 const database = firebase.database();
export {firebase,auth,database};
  
