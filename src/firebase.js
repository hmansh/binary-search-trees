import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxZJWK7VrM1lUZLC3CAxuSxuDeCMJztW8",
  authDomain: "binarysearchtree-dev.firebaseapp.com",
  projectId: "binarysearchtree-dev",
  storageBucket: "binarysearchtree-dev.appspot.com",
  messagingSenderId: "558923140376",
  appId: "1:558923140376:web:d2e9d18230b7283fc4226d"
};

const app = initializeApp(firebaseConfig);

export default app;