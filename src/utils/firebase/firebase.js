import {initializeApp} from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth" ;
import { getFirestore , doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";

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


  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
      const userDocRef = doc(db, 'users', userAuth.uid);
      const userSnapshot = await getDoc(userDocRef);

      if(!userSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try{
          setDoc(userDocRef, {displayName,email,createdAt, ...additionalInformation})
        }catch(error){
          console.log("Error creating user", error.message);
        }
      }
      return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email,password);
  }

  export const signUserInWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signUserOut = async () => {
    await signOut(auth);
  }

  export const onAuthStateChangedListener =  (callback) => {
      onAuthStateChanged(auth, callback)
    }
  

    //method to set the product json object up into firestore
    export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
      const collectionRef = collection(db, collectionKey);
      const batch = writeBatch(db);

      objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.category.toLowerCase());
        batch.set(docRef, object);
      });
      await batch.commit();
      console.log("upload done!");
    }