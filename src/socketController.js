import events from "./events";

const socketController = socket => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);

  socket.on(events.setNickname, ({ nickname }) => {
    console.log("New", nickname);
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname });
  });

  socket.on(events.disconnect, () => {
    console.log("Del", socket.nickname);
    broadcast(events.disconnected, { nickname: socket.nickname });
  });
};

export default socketController;