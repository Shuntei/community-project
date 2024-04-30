import cors from "cors";
import express from "express";
import gameRouter from "./routes/ellie/game.js";
import communityRouter from "./routes/johnny/community-one.js";
import communityRouterThree from "./routes/johnny/community-three.js";
import communityRouterTwo from "./routes/johnny/community-two.js";
import cartRouter from "./routes/kevin/cart.js";
import productRouter from "./routes/kevin/product.js";
import memberRouter from "./routes/linda/member.js";
import tourRouter from "./routes/tony/tour.js";
import chatRouter from "./routes/tyler/server.js";

const app = express();

// Socket.io Connection
import { Server as HttpServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
const server = new HttpServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

// top level middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    callback(null, true);
  },
};

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use("/member", memberRouter);
//產品路由
app.use("/product", productRouter);
//購物車路由
app.use("/cart", cartRouter);
app.use("/game", gameRouter);
app.use("/tour", tourRouter);
// 聊天室路由
app.use("/chat", chatRouter);
app.use("/community", communityRouter);
app.use("/community", communityRouterTwo);
app.use("/community", communityRouterThree);
app.use("/tour", tourRouter);

app.use((req, res) => {
  res.status(404).send(`<h2>404 wrong path</h2>`);
});


// Socket.io content
let viewerIdList = [];
// let roomName = ""

// 確認連線
io.on('connection', socket => {

  const handleSendComment = (newComment, room) => {
    io.to(room).emit('receiveComment', newComment)
  }

  const handlePinnedComment = (pinI, pinP, pinN, pinC, roomCode) => {
    io.to(roomCode).emit('pinnedAll', pinI, pinP, pinN, pinC)
  }

  const handleUnpinComment = (roomCode) => {
    io.to(roomCode).emit("unpinAll")
  }


  // FIXME:人數在離開時對不上
  const updateLiveStatus = (room) => {
    const users = io.sockets.adapter.rooms.get(room);
    if (users) {
      const liveNum = users.size;
      console.log(` 目前 '${room}' 中有 ${liveNum} 人`);
      io.to(room).emit("updateLiveNum", liveNum)
    } else {
      console.log(`房間 ${room} 没有用戶`);
      io.to(room).emit("updateLiveNum", 0)
    }
  }

  const handleUpdateBonus = (data, roomCode) => {
    socket.to(roomCode).emit("updateBonus", data)
  }

  socket.on('sendComment', handleSendComment)
  socket.on('pinnedComment', handlePinnedComment)
  socket.on('unpinComment', handleUnpinComment)
  socket.on('totalBonus', handleUpdateBonus)

  // 視訊
  const handleCheckRole = (id, role) => {

    if (role == 'isStreamer') {
      socket.emit('streamerStart', id)
      socket.join(id)
      console.log(`主播 ${id} 登入`);
      updateLiveStatus(id);
      // roomName = id;
      // console.log({roomName});
    } else {
      socket.emit('viewerGo', id, socket.id)
      console.log(`觀眾 ${id} 登入`);
    }
  };

  const handleJoinStreamerRoom = (roomCode) => {
    socket.join(roomCode)
    updateLiveStatus(roomCode);
    console.log({ roomCode });
    console.log(`一人登入 ${roomCode}`)
  }

  const handleUserEnter = (userData, roomCode) => {
    const item = viewerIdList.find(el => el.viewerId === userData.viewerId)

    if (item) {
      console.log('已經在聊天室了');
    } else if (userData.viewerId === "") {
      console.log(`你送空ID`);
    } else {
      viewerIdList.push(userData)
      io.to(roomCode).emit('userGo', viewerIdList)
      console.log({ viewerIdList });
    }
  }

  const handleShowGift = (roomCode, giftRain) => {
    io.to(roomCode).emit('showGift', giftRain)
  }

  const handleDisconnect = () => {
    const i = viewerIdList.findIndex(viewer => viewer.socketId === socket.id);
    console.log({ i });
    if (i !== -1) {
      viewerIdList.splice(i, 1)
      io.emit('userGo', viewerIdList)
    }
    // updateLiveStatus(roomName)
    // console.log(`退出房${roomName}`);
    console.log(`${socket.id}用戶退出`);
  }

  socket.on('check-role', handleCheckRole)
  socket.on('joinRoom', handleJoinStreamerRoom)
  socket.on('userEnter', handleUserEnter)
  socket.on('showGift', handleShowGift)
  socket.on('disconnecting', handleDisconnect)
})


const port = process.env.WEB_PORT || 3002;
// app.listen(port, () => {
//   console.log(`server started at ${port}`);
// });

server.listen(port, () => {
  console.log(`server started at ${port}`);
})
