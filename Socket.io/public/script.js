const socket = io();
console.log("Connected");

let btn = document.querySelector('.login-btn');
let inp = document.querySelector('.username')
let login = document.querySelector('.login');
let chatApplication = document.querySelector('.chat-application');

btn.addEventListener('click', () => {
    let username = inp.value.trim();
    // console.log(username)
    if (username.length > 0) {
        socket.emit('newuser', {
            socketId: socket.id,
            name: username
        })
    }
    else {
        alert('Please enter correct username');
    }
})

socket.on('useradded', ({msg, username, clients, clientsCount}) => {
    console.log(clients, clientsCount);
    if (clientsCount) {
        document.querySelector('.active-users').innerText = clientsCount;
    }
    login.style.display = 'none';
    chatApplication.style.display = 'block';
    let currentUser = document.querySelector('.current-user');
    currentUser.innerText = username;
})

document.querySelector('.message-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.querySelector('.send-button').click();
    }
})

document.querySelector('.send-button').addEventListener('click', () => {
    let message = document.querySelector('.message-input').value;
    console.log(message.trim());
    if (message.length > 0) {
        // message = '';
        // document.querySelector('.message-input') = '';
        socket.emit('newMsg', {
            msg: message,
            socketId: socket.id
        })
        // message = '';
        document.querySelector('.message-input').value = '';
    }
})

socket.on('msgrecieved', ({msg, username, socketId, clientsCount}) => {
    console.log(clientsCount, msg, username)
    let chats = document.querySelector('.chats');
    let chat = document.createElement('div');
    document.querySelector('.active-users').innerText = clientsCount;
    chat.classList.add('chat');
    let chatMsg = document.createElement('div');
    chatMsg.classList.add('chatMsg');
    
    if (socketId === socket.id) {
        chatMsg.innerText = `${msg}`;
        chatMsg.classList.add('my-chat');
    }
    else {
        chatMsg.innerText = `${username}: ${msg}`;
        chatMsg.classList.add('another-chat');
    }
    chat.appendChild(chatMsg);
    chats.appendChild(chat);
})

socket.on('updatedetails', ({msg, username, clients, clientsCount}) => {
    let allUsers = document.querySelector('.all-users-status');
    allUsers.innerText = '';
    clients.forEach(c => {
        if (c.id != socket.id) {
            let li = document.createElement('li');
            li.innerText = c.name;
            allUsers.appendChild(li);
            li.style.listStyleType = 'none';
            li.style.textAlign = 'center';
            // li.style.alignContent = 'center';
        }
    });
})