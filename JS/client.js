const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container')

var audio = new Audio('ting.mp3');

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position)
    messageContainer.append(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
    if(position == 'left'){
        console.log('sound is playing');
        audio.play();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageInput = $("#messageInp").data("emojioneArea"); // Access emojioneArea instance
    const message = messageInput.getText(); // Get the message text
    if (message.trim() !== "") {
        append(`You: ${message}`, 'right');
        socket.emit('send', message);
        messageInput.setText(''); // Clear the emojioneArea input
    }
});

const name = prompt("Enter your name to join LetsChat")
socket.emit('new-user-joined', name)

socket.on('user-joined', name=>{
    append(`${name} joined the chat`, 'mid');

})

socket.on('receive', data=>{
    append(`${data.name }: ${data.message}`, 'left')
})

socket.on('left', name=>{
    append(`${name } left the chat`, 'left');
})