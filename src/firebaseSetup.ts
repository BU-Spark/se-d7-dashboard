import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeLiXDdMdLv8VopNXyujVo-5CcZo3mvSE",
    authDomain: "se-d7-dashboard.firebaseapp.com",
    databaseURL: "https://se-d7-dashboard-default-rtdb.firebaseio.com",
    projectId: "se-d7-dashboard",
    storageBucket: "se-d7-dashboard.appspot.com",
    messagingSenderId: "907447502561",
    appId: "1:907447502561:web:c0aae134dcb1c9ce4ed9a0"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();