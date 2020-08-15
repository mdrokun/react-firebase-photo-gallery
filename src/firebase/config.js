import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDsC8SlyNbHmL1jpuCOrfmTuwdjZvBJCIg",
  authDomain: "react-photo-gallery-d7843.firebaseapp.com",
  databaseURL: "https://react-photo-gallery-d7843.firebaseio.com",
  projectId: "react-photo-gallery-d7843",
  storageBucket: "react-photo-gallery-d7843.appspot.com",
  messagingSenderId: "1030143934571",
  appId: "1:1030143934571:web:99e3adb2b3a109a22c312e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
