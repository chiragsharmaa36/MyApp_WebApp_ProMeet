const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  });
  

  if( !video_added.includes(`${students[i]}`) && i<students.length ){
    var name=document.createElement('label');
    name.setAttribute('id', `${students[i]}`);
    name.innerText=`${students[i]}`;
    videoGridHTMLtag.append(name);
    video_added.push(`${students[i]}`)
    i++;
    }
    videoGridHTMLtag.append(video);
};