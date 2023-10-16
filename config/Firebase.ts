import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyASm9bIKcP7tkR8W4qKnFF7pQ7iAb_LCNo",

//   authDomain: "lnktshopstore.firebaseapp.com",

//   projectId: "lnktshopstore",

//   storageBucket: "lnktshopstore.appspot.com",

//   messagingSenderId: "992053436218",

//   appId: "1:992053436218:web:5e9f8012379b3e13277a03",

//   measurementId: "G-5QZ7CY67DK",
// };

const firebaseConfig = {
  apiKey: "AIzaSyA0zFVIz_68Lv3DX9pga_MGzcQty05ZcDw",

  authDomain: "superdong-51e09.firebaseapp.com",

  projectId: "superdong-51e09",

  storageBucket: "superdong-51e09.appspot.com",

  messagingSenderId: "276536016778",

  appId: "1:276536016778:web:cb20080b7a1000191e9273",

  measurementId: "G-RXJF1T08KM",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
// export const db = getFirestore(app);

export const auth = getAuth(app);
