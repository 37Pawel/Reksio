import "./../styles/styles.css";
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiDlmx9tC82ofrlWD4SMAsVZ7z4-W0aoI",
  authDomain: "reksio-21bee.firebaseapp.com",
  projectId: "reksio-21bee",
  storageBucket: "reksio-21bee.appspot.com",
  messagingSenderId: "772848684724",
  appId: "1:772848684724:web:43297dfabc180319f151e1",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const myImageRef = ref(storage, "photo.png");
console.log(
  `https://firebasestorage.googleapis.com/v0/b/${myImageRef.bucket}/o/${myImageRef.fullPath}?alt=media`
);

const myImg = document.createElement("img");

myImg.src =
  "https://firebasestorage.googleapis.com/v0/b/${myImageRef.bucket}/o/${myImageRef.fullPath}?alt=media";

document.body.appendChild(myImg);
