import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase,ref,onValue} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
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
   const analytics = getAnalytics(app);
   const database = getDatabase(app);
   const auth = getAuth();

   onAuthStateChanged(auth, (user) => {
    if (user) {
      const userID = user.uid;  
      const profref = ref(database, 'HassleSignup/' + userID);
      document.getElementById("profileimage").style.display = "block";
  
      onValue(profref, (snapshot) => {
        const profdata = snapshot.val();
  
        if (profdata) {
          const client = profdata; // Since you're fetching data for the logged-in user
          const name = client.fname;
          const lastname = client.lname;
          const emailid = client.email;
          const mobile = client.mobile;
  
          document.getElementById("profname").innerHTML = name;
          document.getElementById("prolname").innerHTML = lastname;
          document.getElementById("proemail").innerHTML = emailid;
          document.getElementById("promobile").innerHTML = mobile;
  
          document.getElementById("profileimage").addEventListener("click", function() {
            document.getElementById("profbox").style.display = "block";
            document.getElementById("profileimage").style.display = "none";
          });
  
          document.getElementById("profileimage1").addEventListener("click", function() {
            document.getElementById("profbox").style.display = "none";
            document.getElementById("profileimage").style.display = "block";
          });
        }
      });
    } else {
      console.log("No data available");
    }
  });
  
