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

//Create the Google Sign-In div
document.getElementById('chatMessages').innerHTML = 
    '<button id="signInDiv" style="margin-top: 10px; padding: 15px; background-color: #4285F4; color: white; border: none; border-radius: 5px; cursor: pointer;">Google Sign-In</button>';

//Google Integration
function handleCredentialResponse(response) {
            const data = jwt_decode(response.credential);  // JWT decode function to get user info
            console.log('ID Token:', response.credential);
            console.log('User info:', data);
			document.getElementById('given_name').innerHTML = data.given_name;
        }

        function initializeGoogleSignIn() {
            google.accounts.id.initialize({
                client_id: "797479792738-keusivlrc0lithsap3eguovfg5nmq4ie.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById('signInDiv'),
                { theme: 'outline', size: 'large' }  // Customizing button
            );
            google.accounts.id.prompt();  // Display the One Tap prompt automatically
        }
