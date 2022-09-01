const muteUnmute = () => {
    const enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
        myVideoStream.getAudioTracks()[0].enabled = false;
        setUnmuteButton();
    } else {
        myVideoStream.getAudioTracks()[0].enabled = true;
        setMuteButton();
    }
};
const setMuteButton = () => {
    const html = `<i class="unmute fas fa-microphone"></i>
    <span>Mute</span>`;
    document.querySelector('.main__mute_button').innerHTML = html;
};

const setUnmuteButton = () => {
    const html = `<i class="fas fa-microphone-slash"></i>
    <span>UnMute</span>`;
    document.querySelector('.main__mute_button').innerHTML = html;
};