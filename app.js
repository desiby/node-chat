const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    //send the "connected" event to all users
    io.emit("connected");
  //send msg to all users  
  socket.on("chat message", (msg) => {
     io.emit("chat message", msg);
  }); 
  //notify all users whenever a user disconnects 
  socket.on("disconnect", () => {
    io.emit("disconnect");
 });
 
});


http.listen(3000, () => {
    console.log("listening on port 3000...")
})