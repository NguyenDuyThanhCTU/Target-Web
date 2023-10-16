import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0weQUvpsk8EDp-WDJdpgNR8p9oe2YhsY",

  authDomain: "target-31b09.firebaseapp.com",

  projectId: "target-31b09",

  storageBucket: "target-31b09.appspot.com",

  messagingSenderId: "666736140247",

  appId: "1:666736140247:web:bac6a96936a4cd3995f592",

  measurementId: "G-BHQ202JDS2",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
// export const db = getFirestore(app);

export const auth = getAuth(app);
