function screenShare() {
    navigator.mediaDevices
        .getDisplayMedia({
            video: { cursor: 'always' },
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
            },
        })
        .then((stream) => {
            var screenStream = stream;
            window.stream = stream;
            let videoTrack = screenStream.getVideoTracks()[0];
            if (myPeer) {
                console.log('Current Peer', currentPeer);
                var video = document.createElement('video');

                video.setAttribute('controls', '');

                addVideoStream(video, stream);
                let sender = currentPeer.peerConnection.getSenders().find(function (s) {
                    return s.track.kind == videoTrack.kind;
                });

                sender.replaceTrack(videoTrack);
                videoTrack.onended = function () {
                    var sender = currentPeer.peerConnection
                        .getSenders()
                        .find(function (s) {
                            return s.track.kind == 'video';
                        });
                    sender.replaceTrack(myVideoStream.getTracks()[1]);
                    video.remove();
                };
                screenSharing = true;
            }
        });
}