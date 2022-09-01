if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const app = express();
// const cors = require('cors')
const server = require('http').Server(app);
const io = require('socket.io')(server);
const upload = require('express-fileupload');
const { ExpressPeerServer } = require('peer');
//
const cookie = require('cookie-session');
const passport = require('passport');
const flash = require('express-flash');
const mongoose = require('mongoose');
const passportAuthenticator = require('./security_functions/passportStrategy');
const user = require('./data_schema/user');
const signup = require('./team_routes/auth/signup');
const login = require('./team_routes/auth/login');
const logout = require('./team_routes/auth/logout');
const index = require('./team_routes/index');
const { authorize } = require('./security_functions/authenFunc');

// const flash = require('express-flash');
//
const peerServer = ExpressPeerServer(server, {
  debug: true,
});
const { v4: uuidV4 } = require('uuid');
// app.use(cors)

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('database connected');
});

passportAuthenticator(passport, user);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(cookie({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: ['promeet'] }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(flash());
app.use(require('express-ejs-layouts'));
app.set('layout', 'layouts/layout');
app.use(upload());
// login
app.use('/login', login);
// signup
app.use('/signup', signup);
// logout
app.use('/logout', logout);

app.use('/peerjs', peerServer);
// index route
app.get('/new', authorize, (req, res) => {
  res.redirect(`/${uuidV4()}`);
});
app.use('/', index);

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room });
});
// var x=true;
app.post('/', (req, res) => {
  if (req.files) {
    console.log(req.files);
    var file = req.files.file;
    var filename = file.name;
    console.log(filename);
    uploadPath = __dirname + `/server_fileuploads/${filename}`;
    console.log(uploadPath);
    file.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
      res.send('File Uploaded Successfully');
    });
  }
});

// signup
app.use('/signup', signup);
// logout
app.use('/logout', logout);

let connectionsList = [];

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId, use) => {
    console.log('joined room with id = ' + roomId);
    socket.join(roomId);
    // socket.to(roomId).broadcast.emit('user-connected',userId);
    socket.on('receiver', (receiver_name) => {
      io.to(roomId).emit('already_present_user', receiver_name);
    });
    socket.broadcast.to(roomId).emit('user-connected', userId, use);
    

    // socket.to(roomId).emit("user-connected", userId);

    // WhiteBoard 👇🏻

    socket.on('white-boardClick', function () {
      console.log('White board is clicked.');
      socket.to(roomId).emit('DoClick-white-board');
    });

    connectionsList.push(socket);
    console.log(`${socket.id} is connected`);

    socket.on('draw', function (data) {
      //Recieving coordinate data from front-end and sending it to other users connected to the socket except to the sender.
      connectionsList.forEach(function (con) {
        if (con.id !== socket.id) {
          socket.to(roomId).emit('on-draw', { x: data.x, y: data.y });
        }
      });
    });

    socket.on('mouse-down', function (data) {
      connectionsList.forEach(function (con) {
        if (con.id !== socket.id) {
          socket.to(roomId).emit('mouse-on-down', { x: data.x, y: data.y });
        }
      });
    });

    socket.on('disconnect', function (reason) {
      console.log(`${socket.id} is disconnected`);
      console.log(`${socket.id} is disconnected`)
      socket.broadcast.to(roomId).emit("user-disconnected", userId, use)
      const index = connectionsList.indexOf(socket.id);
      connectionsList.splice(index, 1)
      // connectionsList = connectionsList.filter(function (con) {
      //   con.id !== socket.id;
        // The filter() method creates a new array filled with elements that pass a test provided by a function.
        // The filter() method does not execute the function for empty elements.
        // The filter() method does not change the original array.
      });
    
    // WhiteBoard ☝

    socket.on('message', (text, user) => {
      // if(x){
      console.log('server sending message:');
      io.to(roomId).emit('createMessage', text, user);
      // }
      // x=!x;
    });
    // socket.on('disconnect', () => {
    //   socket.broadcast.to(roomId).emit('user-disconnected', userId, use);
    // });
  });
});

// signup
app.use('/signup', signup);
// logout
app.use('/logout', logout);

server.listen(process.env.PORT || 3000);
