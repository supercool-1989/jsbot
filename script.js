const defaultResponses = {
  hello: "Hi! How are you?",
  hi: "Hello! How can I assist you today?",
  hey: "Hey there! How's it going?",
  "how are you": "I'm just a bot, but I'm here to help! How are you?",
};


// Function to send user messages
function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  const message = chatInput.value.trim().toLowerCase();

  if (message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = chatInput.value;
    messageElement.classList.add('user-message');
    chatMessages.appendChild(messageElement);
    chatInput.value = '';

    if (defaultResponses[message]) {
      setTimeout(() => {
        respondWithMessage(defaultResponses[message]);
      }, 500);
    } else {
      setTimeout(() => {
        respondWithMessage('pls train your bot for better responses');
      }, 500);
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Function to display bot responses
function respondWithMessage(response) {
  const chatMessages = document.getElementById('chatMessages');
  const botMessage = document.createElement('div');
  botMessage.textContent = response;
  botMessage.classList.add('bot-message');
  chatMessages.appendChild(botMessage);
}

// Toggle chat popup
document.getElementById('chatbotIcon').addEventListener('click', function() {
  const chatContainer = document.getElementById('chatContainer');
  chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
});

// Send message on button click
document.getElementById('sendButton').addEventListener('click', sendMessage);

// Send message on Enter key press
document.getElementById('chatInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
