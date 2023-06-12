// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxqxcbeu8f3VTe4dHUyyaUB2EDUrfjX5o",
    authDomain: "chef-recipe-hunter-8bdbf.firebaseapp.com",
    projectId: "chef-recipe-hunter-8bdbf",
    storageBucket: "chef-recipe-hunter-8bdbf.appspot.com",
    messagingSenderId: "366557732909",
    appId: "1:366557732909:web:9a2af9945b7b0262f918a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;