// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB_BgX4-3YWURGhF9w5TvQIZG4oFsoMsQ",
  authDomain: "dev-mern-380bb.firebaseapp.com",
  projectId: "dev-mern-380bb",
  storageBucket: "dev-mern-380bb.firebasestorage.app",
  messagingSenderId: "522886383584",
  appId: "1:522886383584:web:cc84a539da1ae8a39e4d85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
