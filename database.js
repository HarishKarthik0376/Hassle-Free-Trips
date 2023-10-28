import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
        import { getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
        import { getAuth,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAvLjD9iDtNuaWTy---P-QwHRhacKJKwks",
  authDomain: "hae-free-trips.firebaseapp.com",
  databaseURL: "https://hae-free-trips-default-rtdb.firebaseio.com",
  projectId: "hae-free-trips",
  storageBucket: "hae-free-trips.appspot.com",
  messagingSenderId: "84378217448",
  appId: "1:84378217448:web:cb3ae55ffe3f6c006a125d",
  measurementId: "G-E8GVLG3MEM"
  };
      // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    console.log(app);
    
    var namenumber = 0;
var lastnumber = 0;
var agenumber = 0;
var dobnumber = 0;
var mobnumber = 0;
document.getElementById("proceed").disabled = true;
var i = 0;
var h = 2;
let a = document.getElementById("contactbox");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const userID = user.uid;
    document.getElementById("confirm").addEventListener("click", function () {
      var Name = document.getElementsByClassName("firstname")[namenumber].value;
      namenumber++;
      var Lastname = document.getElementsByClassName("lastname")[lastnumber].value;
      lastnumber++;
      var age = document.getElementsByClassName("age")[agenumber].value;
      agenumber++;
      var dob = document.getElementsByClassName("dateofbirth")[dobnumber].value;
      dobnumber++;
      var mobile = document.getElementsByClassName("mobilenumber")[mobnumber].value;
      mobnumber++;
      if (document.getElementById("proceed").disabled == true) {
        document.getElementById("proceed").disabled = false;
      }
      const newTravelerKey = generateUniqueKey();
      const travelerRef = ref(database, "TravellerDetails/" + userID + "Newkey/" + newTravelerKey);
      const newTravelerData = {
        First_Name: Name,
        Last_Name: Lastname,
        Age: age,
        DOB: dob,
        Mobile_Number: mobile
  };
  set(travelerRef, newTravelerData);
    });

    // Clone
document.getElementById("add").addEventListener("click", function () {
  let b = document.getElementById("addmore");
  let s = document.getElementById("firstname");
  var clone = b.cloneNode(true);
  clone.querySelector('.firstname').value = '';
  clone.querySelector('.lastname').value = '';
  clone.querySelector('.age').value = '';
  clone.querySelector('.dateofbirth').value = '';
  clone.querySelector('.mobilenumber').value = '';
  clone.id = "addmore" + ++i;
  a.appendChild(clone);
  document.getElementsByClassName("update")[i].textContent = "Traveller " + h;
       h++; 
});
function generateUniqueKey() {
  return new Date().getDate() + Math.random().toString(36).substr(2, 9);
}

  } else {
    console.log("No user is logged in.");
  }
});

  
   
   
