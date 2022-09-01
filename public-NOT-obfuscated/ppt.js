function pptPlay() {
    var x = document.getElementById('pptplay').style.display;
    if (x == 'none') document.getElementById('pptplay').style.display = 'block';
    else document.getElementById('pptplay').style.display = 'none';
}

function playPPT() {
    var name = document.getElementById('purl').value;
    const v = document.createElement('iframe');
    const video = document.createElement('div');

    var a = document.createElement('button');
    // a.setAttribute("href","#");
    a.setAttribute(
        'onclick',
        'this.parentNode.parentNode.removeChild(this.parentNode)'
    );
    a.innerHTML = 'CLOSE';
    video.append(a);

    // width="560" height="315" src="j.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen" )
    v.setAttribute('id', 'ppt');
    v.setAttribute('src', `${name}`);
    v.setAttribute('allowfullscreen', '');

    video.append(v);
    videoGridHTMLtag.append(video);
}
