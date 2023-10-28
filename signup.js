import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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

   document.getElementById("signsub").addEventListener("click",function()
   {
        var fname = document.getElementById("sign1").value;
        var lname = document.getElementById("sign2").value;
        var mobile = document.getElementById("sign3").value;
        var email = document.getElementById("sign4").value;
        var password = document.getElementById("sign5").value;

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user);
        set(ref(database, 'HassleSignup/' + user.uid),
    {
        fname: fname,
        lname: lname,
        mobile: mobile,
        email: email,
        password: password
    })


    .then( () =>{
        console.log("done");
        alert("Signup Succesfull!!")
        {
        window.open("login.html","_parent");
        }

})
    .catch( () =>{
        
    alert(error);
});

    })
    .catch((error) => {
        alert(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  
});