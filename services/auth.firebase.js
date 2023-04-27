import {
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, firestore } from "./firebase.config";
import { createUserDoc, getUserFromObj } from "@/helpers/common";
import { doc, setDoc } from "firebase/firestore";

export const createUser = async (currentUser) => {
  try {
    const uid = currentUser.uid;
    const userData = createUserDoc(currentUser);
    const docRef = doc(firestore, "users", uid);
    await setDoc(docRef, userData);
    return getUserFromObj(userData);
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const signInUser = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // const token = credential.accessToken;
      const user = result.user;
      if (!getAdditionalUserInfo(result).isNewUser) {
        return getUserFromObj(user);
      } else {
        console.log("new user");
        return createUser(user);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log({ errorCode, errorMessage, email, credential });

      return error.message;
    });
};
