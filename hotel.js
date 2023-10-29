import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase,set,ref,onValue,remove } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
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
    const database = getDatabase(app);
    const auth = getAuth();
    console.log(app);
    let hotel1 = document.getElementById("ho1").textContent;
    let hotel2 = document.getElementById("ho2").textContent;
    let hotel3 = document.getElementById("ho3").textContent;
    let hotel4 = document.getElementById("ho4").textContent;
    let hotel5 = document.getElementById("ho5").textContent;
    let hotel6 = document.getElementById("ho6").textContent;
    let hotel7 = document.getElementById("ho7").textContent;
    let hotel8 = document.getElementById("ho8").textContent;

    let hprice1 = document.getElementById("hp1").textContent;
    let hprice2 = document.getElementById("hp2").textContent;
    let hprice3 = document.getElementById("hp3").textContent;
    let hprice4 = document.getElementById("hp4").textContent;
    let hprice5 = document.getElementById("hp5").textContent;
    let hprice6 = document.getElementById("hp6").textContent;
    let hprice7 = document.getElementById("hp7").textContent;
    let hprice8 = document.getElementById("hp8").textContent;
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userID = user.uid;
    document.getElementById("select1").addEventListener("click",function()
    {   const hoteldataexists= ref(database, 'Hotel Details/'+userID);
        remove(hoteldataexists)
        alert("Hotel Victoria Selected")
        {
            set(ref(database, 'Hotel Details/'+userID),{
                Hotel_Name: hotel1,
                Price: hprice1
                
            })
        };
       
    })
   
    document.getElementById("select2").addEventListener("click",function()
    {const hoteldataexists= ref(database, 'Hotel Details/'+userID+userID);
    remove(hoteldataexists)
        alert("Hotel SwizStar Selcted")
        {
            set(ref(database, 'Hotel Details/'+userID),{
                Hotel_Name: hotel2,
                Price: hprice2
                
            })
        }
    })
    document.getElementById("select3").addEventListener("click",function()
    {const hoteldataexists= ref(database, 'Hotel Details/'+userID);
    remove(hoteldataexists)
        alert("Hotel Unique Selcted")
        {
            set(ref(database, 'Hotel Details/'+userID),{
                Hotel_Name: hotel3,
                Price: hprice3
            })
                
        }
    })
  
    document.getElementById("select4").addEventListener("click",function()
    {const hoteldataexists= ref(database, 'Hotel Details/'+userID);
    remove(hoteldataexists)
        alert("Hotel Holiday Inn Selcted")
        {   set(ref(database, 'Hotel Details/'+userID),{
            Hotel_Name: hotel4,
            Price: hprice4
            
        })
        }
    })
    document.getElementById("select5").addEventListener("click",function()
    {const hoteldataexists= ref(database, 'Hotel Details/'+userID);
    remove(hoteldataexists)
        alert("Hotel Delle Nazioni Selcted")
        {
            set(ref(database, 'Hotel Details/'+userID),{
                Hotel_Name: hotel5,
                Price: hprice5
                
            })
        }
    })
    document.getElementById("select6").addEventListener("click",function()
    {const hoteldataexists= ref(database, 'Hotel Details/'+userID);
    remove(hoteldataexists)
        alert("Hotel Bristol Bergen Selcted")
        {
            set(ref(database, 'Hotel Details/'+userID),{
                Hotel_Name: hotel6,
                Price: hprice6
                
            })
        }
    })
    document.getElementById("select7").addEventListener("click",function()
    {const hoteldataexists= ref(database, 'Hotel Details/'+userID);
    remove(hoteldataexists)
        alert("Hyatt Place Shanghai Selcted")
        {
            set(ref(database, 'Hotel Details/'+userID),{
                Hotel_Name: hotel7,
                Price: hprice7
                
            })
        }
    })
    document.getElementById("select8").addEventListener("click",function()
    {const hoteldataexists= ref(database, 'Hotel Details/'+userID);
    remove(hoteldataexists)
        alert("Hotel Schweizerhof Selcted")
        {
            set(ref(database, 'Hotel Details/'+userID),{
                Hotel_Name: hotel8,
                Price: hprice8
                
            })
        }
    })
}
});
