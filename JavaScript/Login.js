

import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe473FcaOK7C3RF4k5MxRipr4XD4BWxlk",
  authDomain: "travelagency-a70d6.firebaseapp.com",
  databaseURL: "https://travelagency-a70d6-default-rtdb.firebaseio.com",
  projectId: "travelagency-a70d6",
  storageBucket: "travelagency-a70d6.appspot.com",
  messagingSenderId: "933076332368",
  appId: "1:933076332368:web:05096041caacdc0673c655"
};


  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase();
  

      //Veribles decleraction
var email = document.getElementById("emaillogin");
var password = document.getElementById("passwordlogin");
var button = document.getElementById("loginbutton");


button.addEventListener('click', function() {

  if(email.value && password.value !== null) {


    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      alert("User signed in ");
      window.open("../html/index.html", "_self");

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

  }
  else {
    alert("Please enter your email and password");
  }

});

