import {initializeApp} from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth" 

const firebaseConfig = {
    apiKey: "AIzaSyC1wIh8gD2CKQJKTaYDjlEkK0XfYHyW2Wg",
    authDomain: "glambeauty-7b577.firebaseapp.com",
    projectId: "glambeauty-7b577",
    storageBucket: "glambeauty-7b577.appspot.com",
    messagingSenderId: "414387998167",
    appId: "1:414387998167:web:397baa9f04d393ea110f92"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);