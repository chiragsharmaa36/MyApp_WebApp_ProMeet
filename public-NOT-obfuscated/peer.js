const myPeer = new Peer();

myPeer.on('open', (id) => {
    socket.emit('join-room', ROOM_ID, id, userName);
  });