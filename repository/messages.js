let messages = []

function CreateMessagesAndSendMessage(message = '', ws) {
  messages.push(message)
  ws.emit('msg', message)
  return true
}

function GetMessages() {
  return messages
}

module.exports = {
  CreateMessagesAndSendMessage,
  GetMessages
}