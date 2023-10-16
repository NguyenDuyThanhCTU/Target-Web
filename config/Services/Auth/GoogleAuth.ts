import { auth } from "../../Firebase";

import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { addDocument } from "../Firebase/FireStoreDB";

export const googleSignIn = async () => {
  const GoogleProvider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, GoogleProvider);
  const { isNewUser }: any = getAdditionalUserInfo(result);

  if (isNewUser) {
    addDocument("accounts", {
      displayName: result.user?.displayName,
      email: result.user?.email,
      username: result.user?.email,
      password: "admin",
      photoURL: result.user?.photoURL,
      role: "editor",
      status: "block",
    });
  }
  return result.user?.email;
};
