console.log("hello world")

 
 const messageInput = document.querySelector('#messageInput');
 const sendBtn = document.querySelector('#sendBtn');
 const messageList = document.querySelector('#messageList');

 async function getMessages() {
 	const messageData = { text: 'Hello!' };

 	const response = await fetch('script.js', {
 		method: 'POST',
 		headers: {
 			'Content-Type': 'application/json'
 		},
 		body: JSON.stringifty(messageData)
 	});
 	const result = await response.json();
 	
 }

