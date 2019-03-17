export const handleListening = PORT => {
  console.log(`✅ Treduler Server listening on port ${PORT}`);
};

export const HelloWorld = (req, res) => {
  res.send(
    `Hi, This is treduler server. We are composed of Shin dong gyu, Lee jung hyun, Park sung joon`
  );
};
