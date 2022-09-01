function connectToNewUser(userId, stream) {
    // console.log("value of x is "+x);
    var call = myPeer.call(userId, stream);
    currentPeer = call;
    const video = document.createElement('video');
    video.setAttribute('controls', '');
    call.on('stream', (userVideoStream) => {
        console.log(userVideoStream);
        // if(s)
        addVideoStream(video, userVideoStream);
        // s=!s;
    });
    call.on('close', () => {
        video.remove();
    });
    peers[userId] = call;
}