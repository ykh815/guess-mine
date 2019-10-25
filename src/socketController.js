const socketController = socket => {
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
};

export default socketController;
