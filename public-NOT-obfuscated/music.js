function defaultPlaylist(){
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
    v.setAttribute('id', 'player');
    v.setAttribute('src', `https://open.spotify.com/embed/playlist/37i9dQZF1EQqedj0y9Uwvu?utm_source=generator`);
    v.setAttribute('allowfullscreen', '');
    v.setAttribute('width', '100%');
    v.setAttribute('height', '380');
    v.setAttribute('border-radius', '12px');
    v.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    video.append(v);
    videoGridHTMLtag.append(video);
    // <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EQqedj0y9Uwvu?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  }
  
  
  function embedMusic(){
  {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZNJXX2UeBij?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  
  https://open.spotify.com/playlist/37i9dQZF1DWZNJXX2UeBij?si=96eb62afdf4a4ff4 */}
  // https://open.spotify.com/embed/playlist/st/37i9dQZF1DWZNJXX2UeBij
    var musicUrl = window.prompt('Please Enter Spotify Share URL');
    // var i=musicUrl.indexOf("=");
    // var str=musicUrl.slice(0,i-2);
    var j=musicUrl.indexOf("?"); 
    var i=musicUrl.indexOf("l");
    i=i+7;
    var f=musicUrl.slice(i,j+1)
    var x="https://open.spotify.com/embed/playlist"
    var url=x.concat("",f)
  
    url=url.concat("","utm_source=generator")
    console.log(url);
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
    v.setAttribute('id', 'player');
    v.setAttribute('src', `${url}`);
    v.setAttribute('allowfullscreen', '');
    v.setAttribute('width', '100%');
    v.setAttribute('height', '380');
    v.setAttribute('border-radius', '12px');
    v.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    video.append(v);
    videoGridHTMLtag.append(video);
  
  
  }