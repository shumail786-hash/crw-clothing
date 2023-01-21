import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD23Szg8X16VLA9RdYb3WTgMtiOY37dbQs",
    authDomain: "crown-clothing-db-4e6f4.firebaseapp.com",
    projectId: "crown-clothing-db-4e6f4",
    storageBucket: "crown-clothing-db-4e6f4.appspot.com",
    messagingSenderId: "713847544323",
    appId: "1:713847544323:web:0acf6eefab70e3392d0c36"
  };

 const firebaseApp = initializeApp(firebaseConfig);

 const provider = new GoogleAuthProvider()
 provider.setCustomParameters({
  prompt:"select_account"
 });

 export const auth = getAuth()

//  Anonymous Function
 export const signInWithGooglePopUp = ()=> signInWithPopup(auth, provider)

//  Making Database
export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth)=>{
  // Provide Reference of the document.
  // If Document not created, Google will create it automatically for you
  // Doc require three params: 1. Database 2. Document Reference 3. Unique Identifier
  const userDocRef = doc(db, "users", userAuth.uid)

  console.log(userDocRef)
  const userSnapShot = await getDoc(userDocRef)

  console.log(userSnapShot)
  // Exist Method will check whether your document exist in database or not.
  // Therefor, it will return true or false.
  console.log(userSnapShot.exists())

  // If User does not exist in database.
  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
      
    } catch (error) {
      console.log("Error Creating User", error.message)
    }

    // If User Exist in Database then simply return it
    return userDocRef
  }


}