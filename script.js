
const messageInput = document.querySelector('#messageInput');
const sendBtn = document.querySelector('#sendBtn');
const messageList = document.querySelector('#messageList');

const url = 'https://tinkr.tech/sdb/xcv'

async function getMessages() {
  const response = await fetch(url);
  const messages = await response.json();

  messageList.innerHTML = '';
  messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = msg.text;
    messageList.appendChild(messageDiv);
  });
}


async function sendMessage() {

  const text = messageInput.value;
  const messageData = {text: text};
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(messageData)
  });
  const result = await response.json();

  messageInput.value = '';
  getMessages();
}

sendBtn.addEventListener('click',sendMessage);

getMessages();





















