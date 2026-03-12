 
 const messageInput = document.querySelector('#messageInput');
 const sendBtn = document.querySelector('#sendBtn');
 const messageList = document.querySelector('#messageList');

async function getMessages() {
	const response = await fetch('http://tinkr.tech/sdb/projekt_2');
	const messages = await response.json();

  messageList.innerHTML = '';
  messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = msg.text;
    messageList.appendChild(messageDiv);
  });
}



 async function getMessages() {

const text = messageInput.value;

 	const messageData = { text: 'Hello!' };

 	const response = await fetch('http://tinkr.tech/sdb/projekt_2', {
 		//const messages = await response.json(); 
 		method: 'POST',
 		headers: {
 			'Content-Type': 'application/json'
 		},
 		body: JSON.stringifty(messageData)
 	});
 	const result = await response.json();

 	messageInput.value = '';
 	getMessages();
 }

sendBtn.addEventListener('click',sendMessage);

getMessages();
 	
 


