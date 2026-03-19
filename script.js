
const messageInput = document.querySelector('#messageInput');
const sendBtn = document.querySelector('#sendBtn');
const messageList = document.querySelector('#messageList');

const deleteAllBtn = document.querySelector('#deleteAllBtn');

async function getMessages() {
  const response = await fetch('https://tinkr.tech/sdb/projekt_2');
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

  const response = await fetch('https://tinkr.tech/sdb/projekt_2', {
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



async function deleteAllMessages() {
  const response = await fetch('https://tinkr.tech/sdb/projekt_2');
  const messages = await response.json();

  for (let msg of messages) {
    await fetch(`https://tinkr.tech/sdb/projekt_2/${msg.id}`, {
      method: 'DELETE'
    });
  }

  getMessages();
}

deleteAllBtn.addEventListener('click', deleteAllMessages);
