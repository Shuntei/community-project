import express from 'express'
const app = express()
import { Server as HttpServer } from 'http';
const server = new HttpServer(app);
import { Server as SocketIOServer } from 'socket.io';
const io = new SocketIOServer(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

// 確認連線
io.on('connection', socket => {
  // console.log(`用戶ID ${socket.id} 已連線`);
  // 聊天室
  const handleJoinRoom = (room) => {
    socket.join(room)
    updateLiveStatus(room);
  }

  const handleSendComment = (newComment, room) => {
    io.to(room).emit('receiveComment', newComment)
  }

  const handlePinnedComment = (pinI, pinP, pinN, pinC) => {
    io.emit('pinnedAll', pinI, pinP, pinN, pinC)
  }

  const handleUnpinComment = () => {
    io.emit("unpinAll")
  }

  // const handleGiveGift = (createGiftArray) => {
  //   socket.broadcast.emit('giveGiftToRoom', createGiftArray)
  // }

  const updateLiveStatus = (room) => {
    const users = io.sockets.adapter.rooms.get(room);
    if (users) {
      const liveNum = users.size;
      console.log(` 目前 '${room}' 中有 ${liveNum} 人`);
      io.to(room).emit("updateLiveNum", liveNum)
    } else {
      console.log(`房間 ${room} 没有用戶`);
    }
  }

  socket.on('joinRoom', handleJoinRoom)
  socket.on('sendComment', handleSendComment)
  socket.on('pinnedComment', handlePinnedComment)
  socket.on('unpinComment', handleUnpinComment)
  // socket.on('giveGive', handleGiveGift)

  // 視訊
  const handleJoinVideoRoom = (room, id, role) => {

    socket.join(room);
    console.log({ room });

    if (role === 'isStreamer') {
      socket.emit('streamerStart', id)
      console.log(`主播 ${id} 加入房間 ${room}`);
    } else {
      socket.emit('viewerGo', id)
      console.log(`觀眾 ${id} 加入房間 ${room}`)
    }
  };

  socket.on('join-room', handleJoinVideoRoom)
})

server.listen(3030, () => {
  console.log("socket 伺服器跑在 3030");
})