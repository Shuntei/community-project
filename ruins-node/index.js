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
import db from "./utils/mysql2-connect.js";

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
// 遊戲路由
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
let streamStatus = false
let title = ""
let description = ""
let streamerSocketId = ""

app.post('/check-avail', async (req, res) => {

  let avail = "empty"

  let sql = 'INSERT INTO tyler_check_available (room_available, time) VALUES (?, CURRENT_TIMESTAMP())'
  let [rows] = await db.query(sql, [avail])
  res.json(rows)
})

// 確認連線
io.on('connection', socket => {

  // if (streamStatus) {
  //   io.emit('haveStream', streamStatus)
  // }

  const handleSendComment = (newComment, room) => {
    io.to(room).emit('receiveComment', newComment)
  }

  const handlePinnedComment = (pinI, pinP, pinN, pinC, roomCode) => {
    io.to(roomCode).emit('pinnedAll', pinI, pinP, pinN, pinC)
  }

  const handleUnpinComment = (roomCode) => {
    io.to(roomCode).emit("unpinAll")
  }

  const updateLiveStatus = (room) => {
    const users = io.sockets.adapter.rooms.get(room);
    if (users) {
      const liveNum = users.size;
      console.log(` 目前 '${room}' 中有 ${liveNum} 人`);
      io.to(room).emit("updateLiveNum", liveNum)
    } else {
      // console.log(`房間 ${room} 没有用戶`);
      io.to(room).emit("updateLiveNum", 0)
    }
  }

  const handleUpdateBonus = (data, roomCode) => {
    socket.to(roomCode).emit("updateBonus", data)
  }

  const handleSetTitle = (streamTitle, streamDesciption) => {
    console.log({ streamTitle, streamDesciption });
    title = streamTitle
    description = streamDesciption
    io.emit('setTitle', title, description)
  }

  const handleHaveStream = (data) => {
    streamStatus = data.stream
    console.log(streamStatus);
  }

  socket.on('sendComment', handleSendComment)
  socket.on('pinnedComment', handlePinnedComment)
  socket.on('unpinComment', handleUnpinComment)
  socket.on('totalBonus', handleUpdateBonus)
  socket.on('setTitle', handleSetTitle)
  // socket.on('haveStream', handleHaveStream)

  // 視訊
  const handleCheckRole = (id, role) => {

    if (role == 'isStreamer') {
      socket.emit('streamerStart', id)
      socket.join(id)
      console.log(`主播 ${id} 登入`);
      streamerSocketId = socket.id
      updateLiveStatus(id);
    } else {
      socket.emit('viewerGo', id, socket.id)
      console.log(`觀眾 ${id} 登入`);
    }
  };

  const handleJoinStreamerRoom = (roomCode) => {
    socket.join(roomCode)
    updateLiveStatus(roomCode);
    // console.log({ roomCode });
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
      socket.emit('setTitle', title, description);
    }
  }

  const handleShowGift = (roomCode, giftRain) => {
    io.to(roomCode).emit('showGift', giftRain)
  }

  const handleDisconnect = async () => {
    const i = viewerIdList.findIndex(viewer => viewer.socketId === socket.id);
    // console.log({ i });
    if (i !== -1) {
      viewerIdList.splice(i, 1)
      io.emit('userGo', viewerIdList)
    }

    const sql = `SELECT * FROM tyler_stream ORDER BY time DESC LIMIT 1`
    let [rows] = await db.query(sql)

    updateLiveStatus(rows[0].stream_code)
    // console.log(`${socket.id}用戶退出`);

    if (streamerSocketId == socket.id) {
      try {
        await fetch(`http://localhost:3001/chat/check-avail`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ avail: "empty" })
        });
      } catch (error) {
        console.error('Error recording empty status:', error);
      }
    }

  }

  socket.on('check-role', handleCheckRole)
  socket.on('joinRoom', handleJoinStreamerRoom)
  socket.on('userEnter', handleUserEnter)
  socket.on('showGift', handleShowGift)
  socket.on('disconnecting', handleDisconnect)
})

const port = process.env.WEB_PORT || 3002;

server.listen(port, () => {
  console.log(`server started at ${port}`);
})
