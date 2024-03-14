'use strict'

const topicSpan = document.getElementById('topic').span;
const messageSpan = document.getElementById('message').span;

window.electronAPI.onMQTTMessage((message) => {
  // topic.innerText = messageObj.topic;
  console.log("Renderer :: ", message);  
  // topicSpan.innerText = message.topic;
  // messageSpan.innerText = message.strMessage;
})
