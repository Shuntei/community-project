import express from "express";
import multer from "multer";
import communityRouter from "./routes/johnny/community-one.js";
import communityRouterTwo from "./routes/johnny/community-two.js";
import memberRouter from "./routes/linda/member.js";
import productRouter from "./routes/kevin/product.js";
import cartRouter from "./routes/kevin/cart.js";
import tourRouter from "./routes/tony/tour.js";
import chatRouter from "./routes/tyler/server.js";
import db from "./utils/mysql2-connect.js";
import cors from "cors";
import gameRouter from "./routes/ellie/game.js";

const app = express();

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
app.use(express.static('public'));
app.use("/member", memberRouter);
//產品路由
app.use("/product", productRouter);
//購物車路由
app.use("/cart", cartRouter);
app.use("/game", gameRouter);
app.use("/tour", tourRouter);
app.use("/chat", chatRouter);
app.use("/community", communityRouter);
app.use("/community", communityRouterTwo);
app.use("/tour", tourRouter);

app.use((req, res) => {
  res.status(404).send(`<h2>404 wrong path</h2>`);
});

const port = process.env.WEB_PORT || 3002;
app.listen(port, () => {
  console.log(`server started at ${port}`);
});
