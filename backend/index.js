import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { Server } from "socket.io";
import { createServer } from "http";

import connectToDb from "./Db/connectToDb.js";
import authRoutes from "./routes/auth.routes.js";
import errorMiddleware from "./middleware/errormiddleware.js";
import { log } from "console";

dotenv.config();

const app = express();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  // console.log("user connected :", socket.id);

  {
    /* tell all the user that a new user is connected*/
  }

  socket.broadcast.emit(
    "welcome",
    `a new user connected to the server ${socket.id}`
  );

  {
    /* */
  }

  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", data);
  });

  {
    /*user disconnected message*/
  }

  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id);
  });
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const port = process.env.port || 5000;

app.use("/api/auth", authRoutes);

app.use(errorMiddleware);

server.listen(port, () => {
  connectToDb();
  console.log("the server is running on the port :", port);
});
