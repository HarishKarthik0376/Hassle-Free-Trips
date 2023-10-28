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
      console.log(userID);
      const hotelquery = ref(database,"Hotel Details/");
      const flightquery = ref(database,"Flight_Details/");
      onValue(hotelquery, (snapshot) => {
        const hoteldata = snapshot.val();
        if (hoteldata) {
          const client = hoteldata;
          const Hotelname = client.Hotel_Name;
          const HotelPrice = client.Price;
          document.getElementById("detailsdis").innerHTML = Hotelname;
          const priceString = HotelPrice;
          const match = priceString.match(/\d+/);
          const priceInthotel = match ? parseInt(match[0], 10) : NaN;
          document.getElementById("detailsdis1").innerHTML = priceInthotel;

        }
    })
      onValue(flightquery, (snapshot) => {
        const flightdata = snapshot.val();
        if (flightdata) {
          const client = flightdata;
          const Flightname = client.Flight_Name;
          const Adults = client.Adults;
          const Children = client.Children;
          const FlightPrice = client.Price;
          const dod = client.Dateofdep;
          const doa = client.Dateofret;
          const from = client.Departure_From;
          const to = client.Arrival_to;
          document.getElementById("detailsdis2").innerHTML = Flightname;
          document.getElementById("detailsdis3").innerHTML = Adults;
          document.getElementById("detailsdis4").innerHTML = Children;
          const priceString = FlightPrice;
          const priceString1 = Adults;
          const priceString2 = Children;
          const hoteprice = document.getElementById("detailsdis1").textContent;
          const match = priceString.match(/\d+/);
          const match1 = priceString1.match(/\d+/);
          const match2 = priceString2.match(/\d+/);
          const match3 = hoteprice.match(/\d+/);
          const priceInt = match ? parseInt(match[0], 10) : NaN;
          const priceInt1 = match1 ? parseInt(match1[0], 10) : NaN;
          const priceInt2 = match2 ? parseInt(match2[0], 10) : NaN;
          const priceInt3 = match3 ? parseInt(match3[0], 10) : NaN;
          document.getElementById("detailsdis5").innerHTML = (priceInt*priceInt1);
          document.getElementById("detailsdis6").innerHTML = ((priceInt/2)*priceInt2);
          document.getElementById("detailsdis7").innerHTML = dod;
          document.getElementById("detailsdis8").innerHTML = doa;
          document.getElementById("detailsdis9").innerHTML = from;
          document.getElementById("detailsdis10").innerHTML = to;
          document.getElementById("detailsdis11").innerHTML = (priceInt3+(priceInt*priceInt1)+((priceInt/2)*priceInt2)+950);
        

        }
    })
    }
  });
  

  