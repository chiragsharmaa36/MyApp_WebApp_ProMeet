navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    students.push(userName);
    var name=document.createElement('label');
    name.setAttribute('id', `${userName}`);
    name.innerText=`${userName}`;
    videoGridHTMLtag.appendChild(name);
    addVideoStream(myVideo, stream); //this is a
    var current = new Date();
    var date = current.toLocaleDateString();
    var time = current.toLocaleTimeString();
    var participant_stored = `JOINED ${userName} : Date: ${date}, Time: ${time} `;
    timingofcomingleavinglist.push(participant_stored);
    $('.participants').append(`<li class="participant_list"><b>${userName}</b><br></li>`);
    myVideoStream = stream;
    window.stream = stream;
    myPeer.on('call', (call) => {
      navigator.getUserMedia(
        {
          video: true,
          audio: true,
        },
        (stream) => {
          console.log('2');
          call.answer(stream);
          const video = document.createElement('video');
          video.setAttribute('controls', '');
          currentPeer = call;
          call.on('stream', (userVideoStream) => {
            if (!peerList.includes(call.peer)) {
              console.log('3');
              console.log(peerList);
              addVideoStream(video, userVideoStream);
              peerList.push(call.peer);
            }
          });
        },
        function (err) {
          console.log('failed to get local stream', err);
        }
      );
    });
    socket.on('user-connected', (userId, user) => {
      //on connection to b
      console.log('USER CONNECTED:', userId);

      connectToNewUser(userId, stream); // fire this function
      put_in_partcipant_list(user);
      socket.emit('receiver', userName);
      var current = new Date();
      var date = current.toLocaleDateString();
      var time = current.toLocaleTimeString();

      var participant_stored = `JOINED: ${user} : Date: ${date}, Time: ${time} `;
      timingofcomingleavinglist.push(participant_stored);
    });
  });