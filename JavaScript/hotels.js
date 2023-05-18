  
   //Firebase import
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
   import { getDatabase, ref, set, child  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

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
    
//hamburger menu function
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})

//cancel navigation function
function cancelnav() {
    header.classList.toggle('nav-list');
}

//form validation
const firstname = document.getElementById("name");
const checkin = document.getElementById("check-in");
const checkout = document.getElementById("check-out");
const adults = document.getElementById("adults");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const successmessage = document.getElementById("success");
const hotel = document.getElementById("hotel");

//Insert booking information into database
function InsertData() {

    set(ref(database, "Hotels/" + firstname.value),{
//Field Name---value
      firstName: firstname.value,
      checkin: checkin.value,
      checkout: checkout.value,
      adults: adults.value,
      hotel: hotel.value,
  
    })
   .then(()=>{
  
    alert("user signed in database")
   })
   .catch((error)=> {
  
    alert("user didn't signed in database")
   });
   }



form.addEventListener('submit', function(e) {
    let messages = []
    if (firstname.value === ' ') {
        messages.push('Name is required');
        successmessage.innerText = " "
    }

    if (firstname.value.length < 3) {
        messages.push('Name is required');
        successmessage.innerText = " "  
    }

    if (checkin.value < 9) {
        messages.push('Check-in is required');
        successmessage.innerText = " "
    }

    if (checkout.value < 9) {
        messages.push('Check-out is required');
        successmessage.innerText = " "
    }
    if (adults.value < 1) {
        messages.push('Adults can not be 0');
        successmessage.innerText = " "
    }

    if (adults.value > 5) {
        messages.push('Adults can not be more than 5');
        successmessage.innerText = " "
    }

    if (children.value > 5) {
        messages.push('Children can not be more than 5');
        successmessage.innerText = " "
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
        successmessage.innerText = " "
    }

else {
    InsertData();
    errorElement.innerText = " "
       successmessage.innerText = "You have successfuly booked"
    }
})