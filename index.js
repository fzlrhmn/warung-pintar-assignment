const express = require('express');
const app = express();
app.use(express.json())
const server = require('http').Server(app);
const io = require('socket.io')(server);
const np = io.of('message')
const {CreateMessagesAndSendMessage, GetMessages} = require('./repository/messages')

server.listen(3000);

np.on('connection', function (socket) {
  console.log('New user connected');
  np.emit('msg', 'hello world')
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/message', function (req, res) {
  const {message} = req.body
  CreateMessagesAndSendMessage(message, np)
  return res.json({message})
})

app.get('/message', function (req, res) {
  let messages = GetMessages()
  return res.json({messages})
})
