const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

app.use("/", express.static(path.join(__dirname, "/public")));

io.on("connection", (socket) => {
  console.log("Connection Established");
  console.log(socket.id);
});

server.listen(3003, () => {
  console.log("Server running at port 3003");
});
