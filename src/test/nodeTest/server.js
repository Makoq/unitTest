var express = require('express')

app = express()
var server = require('http').createServer(app);

const { v4: uuidv4 } = require('uuid');

server.listen(3000);

app.get('/',  function(req, res) {
    res.sendFile(__dirname + '/webRTC.html');
});
var WebSocketServer = require('ws').Server,
wss =  new WebSocketServer({server: server});

let conns = {}
let connCount=0

wss.on('connection', function (ws) { 
    
    let uid = uuidv4()
    ws.id=uid
    connCount++
     
    console.log(uid,'connected',"count:",connCount)
    //有新用户加入
    //转发共享用户ICE候选    
    ws.send(JSON.stringify({
        "event": "ownID",
        "uid":uid
        }
    ))
    //把自己发给别人
    if (connCount > 1) {
        wss.clients.forEach(function (client) {
            if (client!=ws) {
                client.send(JSON.stringify({
                    "event": "addPeer",
                    "data": {
                        peerId:  ws.id,
                    },
                    "offer":false
                }));
                ws.send(JSON.stringify({
                    "event": "addPeer",
                    "data": {
                        peerId: ws.id,
                    },
                    "offer":true
                }))
            }
        });        
    }

    ws.on('message', function (message) { 

        let meeageObj=JSON.parse(message)
        console.log("event", meeageObj['event'] )
        //转发共享用户ICE候选
        if (meeageObj['event'] =='relayICECandidate') {
            
            //一个连接的时候不发
            wss.clients.forEach(function (client) {
                console.log("send iceCandidate")
                    client.send(JSON.stringify({
                        "event": "iceCandidate",
                        "data": meeageObj['data'],
                        "fromID": meeageObj['fromID']
                    }));
                
            });
        }

        //收到描述中转请求
        if (meeageObj['event'] =='relaySessionDescription') {
            console.log(meeageObj["fromID"],meeageObj["data"].type) 
            wss.clients.forEach(function (client) {
                if (client!=ws) {
                    client.send(JSON.stringify({
                        "event": "sessionDescription",
                        "fromId":meeageObj["fromID"],
                        "data": meeageObj["data"],
                    }));
                }
            });
        }
    })

     ws.on('close', function (con) {
        let delId
        for (let conn in conns) {
            if (conns[conn] == con) {
                delId=conn
            }
        }
         wss.clients
         delete conns[delId]
         connCount--
        console.log(delId,'-close')
    })
})
