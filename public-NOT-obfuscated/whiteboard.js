let clickNum = 0;

socket.on('DoClick-white-board', function () {
  document.querySelector('.white-board').click();
});

// if(document.querySelector(".white-board").click==true)

function Clicked() {
  if (clickNum === 0 ) {
    socket.emit('white-boardClick');
    whiteBoard();
    clickNum++;
  }
  
}

function whiteBoard() {
  // if (clickNum === 0) {
  //   socket.emit("white-boardClick");
  //   clickNum++;
  // }
  

  // document.getElementById('video-grid').append(canvasHTMLTag);
  document.getElementById("boardDiv").style.display = "flex";
  
  let canvasHTMLTag = document.createElement('canvas');
  
  document.getElementById("boardDiv").append(canvasHTMLTag);
 
  
  canvasHTMLTag.width = 1000;
  canvasHTMLTag.height = 500;
  const ctx = canvasHTMLTag.getContext('2d'); //Google 'get context 2d'
  //To get the canvas' 2D rendering context, call getContext() on the <canvas> element, supplying '2d' as the argument

  ctx.strokeStyle = 'white';

  canvasHTMLTag.style.cursor = 'crosshair';
  let x, y;
  let mouseDown = false;

  window.onmousedown = function (e) {
    ctx.moveTo(x, y); // Move our location to this coordinate.
    socket.emit('mouse-down', { x, y }); // Move other people' locations to this coordinate.
    mouseDown = true;
  };
  window.onmouseup = function (e) {
    mouseDown = false;
  };

  socket.on('on-draw', function ({ x, y }) {
    ctx.lineTo(x, y);
    ctx.stroke();
  });

  socket.on('mouse-on-down', function ({ x, y }) {
    ctx.moveTo(x, y); // Move other people' locations to this coordinate.
  });

  window.onmousemove = function (e) {
    // x = e.clientX; // e.clientX gives X position of cursor
    var rect = canvasHTMLTag.getBoundingClientRect(); //keep it up!!!
    x = e.clientX - rect.left; // e.clientX gives X position of cursor
    y = e.clientY - rect.top; // e.clientY gives Y position of cursor
    console.table('x = ' + x, 'y = ' + y);

    if (mouseDown) {
      socket.emit('draw', { x, y }); // Sending coordinates to the back-end
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };
  var d=document.getElementById("boardDiv");
  var a = document.createElement('button');
  a.setAttribute(
      'onclick',
      "hideBoard()"
  );
  a.innerHTML = 'CLOSE';
  d.append(a);
}

function hideBoard(){
    
    document.getElementById("boardDiv").style.display = "none";
  
    document.getElementById("again").style.display = "block";
    document.getElementById("again2").style.display = "block";
  
}
function boardAgainDisplay(){
  document.getElementById("boardDiv").style.display = "flex";
  document.getElementById("again").style.display = "none";
  document.getElementById("again2").style.display = "none";
}