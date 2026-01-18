import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7pOKJ54NcY2pCX2CUngqmjinu97TT8UE",
  authDomain: "netflix-gpt-7b9b2.firebaseapp.com",
  projectId: "netflix-gpt-7b9b2",
  storageBucket: "netflix-gpt-7b9b2.firebasestorage.app",
  messagingSenderId: "668588809306",
  appId: "1:668588809306:web:c759d9757d550aaa6f8c63",
  measurementId: "G-TD3ZNS5KDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
