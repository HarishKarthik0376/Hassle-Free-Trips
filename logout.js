import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase, set, ref,onValue,query,remove } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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
   const analytics = getAnalytics(app);
   const database = getDatabase(app);
   const auth = getAuth();
   console.log(app);

   onAuthStateChanged(auth, (user) => {
    if (user) {
      const userID = user.uid;
    } else {
      console.log("No data available");
      window.onload = () =>{
        alert("Kindly Login/Signup before booking!!");
    }
    }
  });

  //logout confiuration
const login= document.getElementById("login");
const signup = document.getElementById("Signup");
const logout = document.getElementById("logout");



onAuthStateChanged(auth, (user) => {
  if (user) {
    const userID = user.uid;
    login.style.display = "none";
    signup.style.display = "none";
    logout.style.display = "block";
    

    window.textContent = userID;

    logout.addEventListener("click", () => {
            const travelerDataRef = ref(database, 'TravellerDetails/' + userID + "Newkey");
            remove(travelerDataRef)
            const hotelref = ref(database,'Hotel Details/');
            remove(hotelref);
            const flightdataexists= ref(database, 'Flight_Details/');
            remove(flightdataexists);
      signOut(auth)
        .then(() => {
                window.textContent = ""; 
                window.open("login.html","_parent");
        })
        .catch((error) => {
          console.error("Error during logout:", error);
        });
    });
  }
});




