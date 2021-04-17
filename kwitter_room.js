var firebaseConfig = {
    apiKey: "AIzaSyD6ABB_cuiNix1n70KeFo_0pSxW8883gCA",
    authDomain: "kwitter-c9cd0.firebaseapp.com",
    databaseURL: "https://kwitter-c9cd0-default-rtdb.firebaseio.com",
    projectId: "kwitter-c9cd0",
    storageBucket: "kwitter-c9cd0.appspot.com",
    messagingSenderId: "400267025965",
    appId: "1:400267025965:web:1ffe3c3ab157f2d9e3e2a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding roomname"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_message.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
console.log("Roomname -"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",roon_name);
window.location="kwitter_room.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref("/").child(room_name).push({
  name:username,
  message:msg,
  like:0
 
 });
 msg=document.getElementById("msg").value="";
}