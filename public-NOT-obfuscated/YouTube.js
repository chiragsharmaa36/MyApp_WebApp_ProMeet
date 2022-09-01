function youtubePlay() {
    var x = document.getElementById('ytplay').style.display;
    if (x == 'none') document.getElementById('ytplay').style.display = 'block';
    else document.getElementById('ytplay').style.display = 'none';
}

function playYT() {
    var name = document.getElementById('yurl').value;
    var x = name.substring(17);
    const video = document.createElement('div');
    var url = `https://www.youtube.com/embed/${x}`;
    var a = document.createElement('button');
    // a.setAttribute("href","#");
    a.setAttribute(
        'onclick',
        'this.parentNode.parentNode.removeChild(this.parentNode)'
    );
    a.innerHTML = 'CLOSE';
    video.append(a);
    const v = document.createElement('iframe');
    // width="560" height="315" src="j.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen" )
    v.setAttribute('id', 'pl');
    v.setAttribute('src', `${url}`);
    v.setAttribute('allowfullscreen', '');

    video.append(v);
    videoGridHTMLtag.append(video);
}
