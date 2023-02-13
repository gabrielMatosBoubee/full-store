import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../services/firebase';
import googleLogo from '../images/Google-Logo.png'
import style from '../styles/SignInGoogle.module.css'

function SignInGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });
    const makeLogin = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    } 

    return (
        <div>
            <button onClick={makeLogin} className={style.googleLogin}>
                <img src={googleLogo} alt='logo of google' className={style.googleLogo}/> 
                Continue with Google
            </button>
        </div>
    );
}

export default SignInGoogle;