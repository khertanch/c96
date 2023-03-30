//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBLy-duiN2Im5a_4RVrprxj3LJkxyAVYqg",
      authDomain: "foods-e2812.firebaseapp.com",
      databaseURL: "https://foods-e2812-default-rtdb.firebaseio.com",
      projectId: "foods-e2812",
      storageBucket: "foods-e2812.appspot.com",
      messagingSenderId: "217126422137",
      appId: "1:217126422137:web:b4bd6a16ce9ce02ba9b6a8",
      measurementId: "G-ELPCCPY2HN"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
