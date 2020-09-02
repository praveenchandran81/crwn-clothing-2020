import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBdxTVN7l_Wac09glCX-3B9QxrAcRZH6m0",
    authDomain: "crown-clothing-dd178.firebaseapp.com",
    databaseURL: "https://crown-clothing-dd178.firebaseio.com",
    projectId: "crown-clothing-dd178",
    storageBucket: "crown-clothing-dd178.appspot.com",
    messagingSenderId: "267602090191",
    appId: "1:267602090191:web:a59b0fc31b3c23bc4e3fba",
    measurementId: "G-9K2K8WDXBJ"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth,additionalData)=>{

   // console.log(userAuth);
    if(!userAuth) return;
    console.log(additionalData);
    const userRef=filestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    // console.log(snapShot.exists);

     if(!snapShot.exists){
       const {displayName,email}= userAuth;
       const createdAt=new Date();

       try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
       } catch (error) {
         console.log('error creating user ' + error.message)
       }
       
      
     }
     return userRef;  
  }


  export const auth=firebase.auth();
  export const filestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=() =>auth.signInWithPopup(provider);

  export default firebase;



