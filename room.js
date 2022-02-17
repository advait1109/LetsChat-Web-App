var firebaseConfig = {
    apiKey: "AIzaSyAxaBlYvARAF7U6GAiesDSLoBZx7fwhOeY",
    authDomain: "letschat-web-app-cdfa7.firebaseapp.com",
    databaseURL: "https://letschat-web-app-cdfa7-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-cdfa7",
    storageBucket: "letschat-web-app-cdfa7.appspot.com",
    messagingSenderId: "437109750905",
    appId: "1:437109750905:web:23a918a46f6e4ebea668a8",
    measurementId: "G-48LHJ96C8G"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var userName=localStorage.getItem("userID");
document.getElementById("welcome_message").innerHTML="Welcome "+userName+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();


function add_room(){
    room_name=document.getElementById("room_new_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding_roomname"
    });
    localStorage.setItem("room_name",room_name);
    window.location="page.html";
}

function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location="page.html"
}