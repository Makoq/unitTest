/**************/
/*** CONFIG ***/
/**************/
const PORT = 3000;

const cors = require('cors')

/*************/
/*** SETUP ***/
/*************/
const fs = require("fs");
const express = require('express');
var http = require('http');
// const https = require("https");
const bodyParser = require('body-parser')


const main = express()
main.use(cors())
var server = http.createServer(main);

const io  = require('socket.io')(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});


// server.listen(PORT, null, function() {
//     console.log("Listening on port " + PORT);
// });

 
main.get('/', function(req, res){ res.sendFile(__dirname + '/client.html'); });

server.listen(PORT, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    //console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
})

var channels = {};
var sockets = {};

io.sockets.on('connection', function (socket) {
    socket.channels = {};
    sockets[socket.id] = socket;

    //console.log("["+ socket.id + "] connection accepted");
    socket.on('disconnect', function () {
        for (var channel in socket.channels) {
            part(channel);
        }
        //console.log("["+ socket.id + "] disconnected");
        delete sockets[socket.id];
    });


    socket.on('join', function (config) {
        //console.log("["+ socket.id + "] join ", config);
        var channel = config.channel;
        var userdata = config.userdata;

        if (channel in socket.channels) {
            //console.log("["+ socket.id + "] ERROR: already joined ", channel);
            return;
        }

        if (!(channel in channels)) {
            channels[channel] = {};
        }

        for (id in channels[channel]) {
            channels[channel][id].emit('addPeer', {'peer_id': socket.id, 'should_create_offer': false});
            socket.emit('addPeer', {'peer_id': id, 'should_create_offer': true});
        }

        channels[channel][socket.id] = socket;
        socket.channels[channel] = channel;
    });

    function part(channel) {
        //console.log("["+ socket.id + "] part ");

        if (!(channel in socket.channels)) {
            //console.log("["+ socket.id + "] ERROR: not in ", channel);
            return;
        }

        delete socket.channels[channel];
        delete channels[channel][socket.id];

        for (id in channels[channel]) {
            channels[channel][id].emit('removePeer', {'peer_id': socket.id});
            socket.emit('removePeer', {'peer_id': id});
        }
    }
    socket.on('part', part);

    socket.on('relayICECandidate', function(config) {
        console.log("relayICECandidate")
        var peer_id = config.peer_id;
        var ice_candidate = config.ice_candidate;
        //console.log("["+ socket.id + "] relaying ICE candidate to [" + peer_id + "] ");

        if (peer_id in sockets) {
            sockets[peer_id].emit('iceCandidate', {'peer_id': socket.id, 'ice_candidate': ice_candidate});
        }
    });

    socket.on('relaySessionDescription', function(config) {
        var peer_id = config.peer_id;
        var session_description = config.session_description;
        //console.log("["+ socket.id + "] relaying session description to [" + peer_id + "] ", );

        if (peer_id in sockets) {
            sockets[peer_id].emit('sessionDescription', {'peer_id': socket.id, 'session_description': session_description});
        }
    });
});
