const playStop = () => {
    const enabled = myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
        myVideoStream.getVideoTracks()[0].enabled = false;
        console.log('video stop');
        setPlayVideo();
    } else {
        myVideoStream.getVideoTracks()[0].enabled = true;
        setStopVideo();
    }
};
const setStopVideo = () => {
    const html = `<i class="fas fa-video"></i>
    <span>Stop Video</span>`;
    document.querySelector('.main__video_button').innerHTML = html;
};

const setPlayVideo = () => {
    const html = `<i class="stop fas fa-video-slash"></i>
    <span>Play Video</span>`;
    document.querySelector('.main__video_button').innerHTML = html;
};