const socket = io('/');
const videoGridHTMLtag = document.getElementById('video-grid');
let myVideoStream;
const myVideo = document.createElement('video');
myVideo.setAttribute('controls', '');
var notifyBool = true;
var video_added=[];
var students = [];
var i=1;
myVideo.muted = true;
var peers = {};
var y = true; // y is 'true'
var z = true; // z is 'true'
var s = true; // s is 'true'
var currentPeer = null;
var peerList = [];
var screenSharing = false;
var chats = [];  
var timingofcomingleavinglist = [];
document.querySelector('.stop-btn').style.display = 'none';
// const myPeer=new Peer(undefined,{
//   path:'/peerjs',
//     host:'/',
//     port:'3000'
// })

//peer

var userName = window.prompt('Please Enter Your Name');

// Promise 👇🏻

// Promise 👆🏻

// User-disconnected 👇🏻

// User-disconnected 👆🏻

//MESSAGES 👇🏻

//MESSAGES ☝

// Participants👇🏻

// Participants👆🏻

//Peer👇🏻

//Peer👆🏻 

// Participants👇🏻

// Participants👆🏻

//connectToNewUser func 👇🏻

//connectToNewUser func 👆🏻

//addVideoStream func 👇🏻

//addVideoStream func 👆🏻

// MESSAGES 👇🏻
// MESSAGES 👆🏻

// MuteUnmute👇🏻

// MuteUnmute👆🏻

// StopVideo 👇🏻

// StopVideo 👆🏻

//fileUpload👇🏻

// fileUpload👆🏻

// MESSAGES 👇🏻

// MESSAGES 👆🏻

// Participants👇🏻

// Participants👆🏻


//screenShare👇🏻

//screenShare👆🏻

//YouTube👇🏻
//YouTube👆🏻

// PPT👇🏻
// PPT👆🏻

// shareLink👇🏻
// shareLink👆🏻

//notify👇🏻

// notify👆🏻

function leaveMeet() {
  window.location = 'bye.html';
}


var data = [];

//screenRecord👇🏻
//screenRecord👆🏻

// function typedArrayToURL(typedArray, mimeType) {
//   return URL.createObjectURL(new Blob([typedArray.buffer], {type: mimeType}))
// }
function chatDownload() {
  download('chats.txt', JSON.stringify(chats));
}
function timing() {
  download('timing.txt', JSON.stringify(timingofcomingleavinglist));
}
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  // document.body.appendChild(element);

  element.click();

  // document.body.removeChild(element);
}

//White Board👇🏻

//White Board👆🏻
 

function show() {
  var x = document.getElementById("download").style.display;
  if (x == "none") 
    document.getElementById("download").style.display = "block";
  else
    document.getElementById("download").style.display = "none";

} 


//Themes👇🏻

// Themes👆🏻