var firebaseConfig = {
    apiKey: "AIzaSyANoFcik_z-wKLy5m-f9vMuRCqZe3zthT8",
    authDomain: "kwitter-e0eae.firebaseapp.com",
    databaseURL: "https://kwitter-e0eae-default-rtdb.firebaseio.com",
    projectId: "kwitter-e0eae",
    storageBucket: "kwitter-e0eae.appspot.com",
    messagingSenderId: "168233717308",
    appId: "1:168233717308:web:84c5a14878916b11083d39",
    measurementId: "G-9M039K054H"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        name:"aaris"
    });
}