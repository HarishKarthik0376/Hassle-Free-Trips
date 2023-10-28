import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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
   const auth = getAuth();
   console.log(app);


   document.getElementById("logsub").addEventListener("click",function()
   {
     var emaillog = document.getElementById("log1").value;
     var passwordlog = document.getElementById("log2").value;

     signInWithEmailAndPassword(auth, emaillog, passwordlog)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Welcome "+ emaillog);
        {
            window.open("index.html","_parent");
        }
      })
   
    .catch((error) => {
         alert(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
  
  
     })
        })