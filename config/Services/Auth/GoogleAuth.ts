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
  let Data: any;
  if (isNewUser) {
    Data = {
      name: result.user?.displayName,
      email: result.user?.email,
      username: result.user?.email,
      password: "admin",
      photoURL: result.user?.photoURL,
      role: "client",
      status: "active",
    };
    addDocument("accounts", Data);
  }

  return Data;
};
