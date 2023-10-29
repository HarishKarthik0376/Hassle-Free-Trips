import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase,set,ref,remove } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
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
let flight1 = document.getElementById("flname1").textContent;
let flight2 = document.getElementById("flname2").textContent;
let flight3 = document.getElementById("flname3").textContent;
let flight4 = document.getElementById("flname4").textContent;
let flight5 = document.getElementById("flname5").textContent;
let flight6 = document.getElementById("flname6").textContent;
let flight7 = document.getElementById("flname7").textContent;
let flight8 = document.getElementById("flname8").textContent;
let flight9 = document.getElementById("flname9").textContent;
let flight10 = document.getElementById("flname10").textContent;

let flightprice1 = document.getElementById("flight1price").textContent;
let flightprice2 = document.getElementById("flight2price").textContent;
let flightprice3 = document.getElementById("flight3price").textContent;
let flightprice4 = document.getElementById("flight4price").textContent;
let flightprice5 = document.getElementById("flight5price").textContent;
let flightprice6 = document.getElementById("flight6price").textContent;
let flightprice7 = document.getElementById("flight7price").textContent;
let flightprice8 = document.getElementById("flight8price").textContent;
let flightprice9 = document.getElementById("flight9price").textContent;
let flightprice10 = document.getElementById("flight10price").textContent;




onAuthStateChanged(auth, (user) => {
    if (user) {
        const userID = user.uid;
document.getElementById("f1").addEventListener("click",function()
{   const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)
alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from1").textContent;
    var todest = document.getElementById("to1").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight1,
        Price: flightprice1,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
    
}
})
document.getElementById("f2").addEventListener("click",function()
{
const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)

alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from2").textContent;
    var todest = document.getElementById("to2").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight2,
        Price: flightprice2,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
}
})
document.getElementById("f3").addEventListener("click",function()
{   const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)

alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from3").textContent;
    var todest = document.getElementById("to3").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight3,
        Price: flightprice3,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
}
})
document.getElementById("f4").addEventListener("click",function()
{const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)

alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from4").textContent;
    var todest = document.getElementById("to4").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight4,
        Price: flightprice4,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
}
})
document.getElementById("f5").addEventListener("click",function()
{const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)

alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from5").textContent;
    var todest = document.getElementById("to5").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight5,
        Price: flightprice5,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
}
})
document.getElementById("f6").addEventListener("click",function()
{const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)

alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from6").textContent;
    var todest = document.getElementById("to6").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight6,
        Price: flightprice6,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
}
})
document.getElementById("f7").addEventListener("click",function()
{const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)

alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from7").textContent;
    var todest = document.getElementById("to7").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight7,
        Price: flightprice7,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
}
})
document.getElementById("f8").addEventListener("click",function()
{const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)

alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from8").textContent;
    var todest = document.getElementById("to8").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight8,
        Price: flightprice8,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
}
})
document.getElementById("f9").addEventListener("click",function()
{const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)

alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from9").textContent;
    var todest = document.getElementById("to9").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight9,
        Price: flightprice9,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
}
})
document.getElementById("f10").addEventListener("click",function()
{const flightdataexists= ref(database, 'Flight_Details/'+userID);
remove(flightdataexists)

alert("Flight Selected!!")
{   var adults = prompt("Enter Number Of Travellers(Age 12+):");
    var children = prompt("Enter Number of child(If none enter 0):");
    var fromdest = document.getElementById("from10").textContent;
    var todest = document.getElementById("to10").textContent;
    var date_of_dep =  document.getElementById("startdate").value;
    var date_of_return = document.getElementById("returndate").value;
    set(ref(database, 'Flight_Details/'+userID),{
        Flight_Name:flight10,
        Price: flightprice10,
        Adults:adults,
        Children:children,
        Departure_From:fromdest,
        Arrival_to:todest,
        Dateofdep:date_of_dep,
        Dateofret:date_of_return
        
    })
}
})
}
});
