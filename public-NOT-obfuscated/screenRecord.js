// var video = document.querySelector('.recording');
// var output = document.querySelector('.output');
var start = document.querySelector('.start-btn');
var stop = document.querySelector('.stop-btn');
// var anc = document.querySelector(".download-anc")

// In order record the screen with system audio
function screenRecord() {
    document.querySelector('.stop-btn').style.display = 'block';
    var recording = navigator.mediaDevices
        .getDisplayMedia({
            video: {
                mediaSource: 'screen',
            },
            audio: true,
        })
        .then(async (e) => {
            // For recording the mic audio
            let audio = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });

            // Assign the recorded mediastream to the src object
            // video.srcObject = e;

            // Combine both video/audio stream with MediaStream object
            let combine = new MediaStream([...e.getTracks(), ...audio.getTracks()]);

            /* Record the captured mediastream
            with MediaRecorder constructor */
            recorder = new MediaRecorder(combine);
            recorder.start();
        });
}

function screenRecordStop() {
    // Stops the recording
    recorder.stop();

    /* Push the recorded data to data array
    when data available */
    recorder.ondataavailable = (e) => {
        data.push(e.data);
    };

    recorder.onstop = () => {
        /* Convert the recorded audio to
        blob type mp4 media */
        let blobData = new Blob(data, { type: 'video/mp4' });

        // Convert the blob data to a url
        let url = URL.createObjectURL(blobData);

        // Assign the url to the output video tag and anchor
        const a = document.createElement('a');
        a.style = 'display:none';
        a.href = url;
        a.download = 'video.mp4';
        a.click();
        data = [];
        document.querySelector('.stop-btn').style.display = 'none';
    };
}
