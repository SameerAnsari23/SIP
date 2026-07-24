const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 3000
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

let userMap = {}
io.on('connection', (socket) => { 
    console.log(io.engine.clientsCount);
    console.log(socket.id)

    socket.on('newuser', async({socketId, name}) => {
        userMap[socketId] = name;
        let clients = [];
        let sockets = await io.fetchSockets();
        sockets.forEach(e => {
            if (userMap[e.id]) {
                console.log(e.id)
                clients.push({id: e.id, name: userMap[e.id]})
            }
        });

        socket.emit('useradded', {
            msg:"User added successfully",
            username: userMap[socket.id],
            clients,
            clientsCount: clients.length
        });

        socket.broadcast.emit('updatedetails', {
            msg: "New users added!",
            clients,
            clientsCount: clients.length
        })
    })

    socket.on('newMsg', ({msg, socketId}) => {

        // let clients = [];
        // io.sockets.sockets.forEach(c => clients.push({
        //     "name": userMap[c.id],
        //     "id": c.id,
        //     clientCount: io.engine.clientsCount
        // }));

        console.log(msg);
        // console.log("Current Clients: ",clients);
        console.log(userMap[socketId])
        io.emit('msgrecieved', {
            msg,
            username: userMap[socketId],
            socketId: socket.id,
            // clients,
            clientsCount: io.engine.clientsCount
        })
    })
});



server.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});