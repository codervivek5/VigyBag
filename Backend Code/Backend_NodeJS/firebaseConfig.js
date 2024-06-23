import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDpAp-SEIBKxIJ3n7nYEfKSTv6L1fh6_Hk",
  authDomain: "vigybag-backend.firebaseapp.com",
  projectId: "vigybag-backend",
  storageBucket: "vigybag-backend.appspot.com",
  messagingSenderId: "793535972885",
  appId: "1:793535972885:web:a68f3b898a63449ec1b01c",
  measurementId: "G-PJY8103TFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, RecaptchaVerifier };
