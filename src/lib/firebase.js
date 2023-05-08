import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// here i want to import the seed file

const config = {apiKey: "AIzaSyAc7OlqHIzV7H0TxzywD9gs7ippZjbAmvM",
authDomain: "instagram-clone-7de5a.firebaseapp.com",
projectId: "instagram-clone-7de5a",
storageBucket: "instagram-clone-7de5a.appspot.com",
messagingSenderId: "6617429979",
appId: "1:6617429979:web:55aa832c9cb4b799a059fe"};

const firebase = Firebase.initializeApp(config);
const { FeildValue } = Firebase.firestore;

//here is where I want to call the seed file(only ONCE!)
//seedDatabase(firebase);

export {firebase, FeildValue};