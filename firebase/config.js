import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9W3O34ccYGyC0N_WLqqJLJMsoz8hACaw",
    authDomain: "daily-shares.firebaseapp.com", // Usually "project_id.firebaseapp.com"
    projectId: "daily-shares",
    storageBucket: "daily-shares.appspot.com",
    messagingSenderId: "897341994080",
    appId: "1:897341994080:android:19e342496fedf006137f05",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };