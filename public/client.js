$(function () {
    //send message to server
    const socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    //fetch chat message on the client side
    socket.on("chat message", (msg) =>{
      $('#messages').append($('<li>').text(msg));
    });
    //handle the disconnect event on the client side
    socket.on("disconnect", () =>{
      $('#messages').append('<li>a user left</li>');
    });
   
    //handle the "connected" event client side
    socket.on("connected", () => {
      $('#messages').append('<li>a user is connected</li>')
    });
  });