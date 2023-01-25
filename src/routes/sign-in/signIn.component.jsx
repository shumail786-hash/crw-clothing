import React from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signUpForm/signUpForm.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>SignIn With Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

{
  // If u want to sign in user with redirect follow this method.
}

// import React, { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
// const SignIn = () => {
//   useEffect(() => {
//     const getUserResultFromRedirect = async () => {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//       }
//     };
//     getUserResultFromRedirect();
//   }, []);

//   return (
//     <div>
//       <h1>Sign In Page</h1>
//       <button onClick={signInWithGoogleRedirect}>
//         SignIn With Google Redirect
//       </button>
//     </div>
//   );
// };

// export default SignIn;
