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
room_name=localStorage.getItem("room_name");
userName=localStorage.getItem("userID");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data)
user_name=message_data['name'];
message_user=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+user_name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message_user+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();


function send(){
      message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message:message,
            name:userName,
            like:0
      });
      document.getElementById("msg").value=""
}
function update_like(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}