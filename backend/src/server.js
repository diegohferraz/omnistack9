const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http')

const routes = require('./routes');

const app = express();
const server = http.Server(app)
const io = socketio(server)

io.on('connection', socket => {
  console.log('conectado', socket.id)
})

mongoose.connect('mongodb+srv://sandbox:sandbox@diegolabs-y2jf2.mongodb.net/omnistack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes)

app.get('/', (req, res) => { 
  return res.json({message: 'hello world'});
});

server.listen(3333);

