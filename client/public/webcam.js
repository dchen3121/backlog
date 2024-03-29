var video = document.querySelector("#videoElement");
var canvas = document.createElement("canvas");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: { width: 426, height: 240 } })
    .then(function(stream) {
      video.srcObject = stream;
    })
    .catch(e => {
      console.error(e);
    });

  const WS_URL = "ws://localhost:3001";
  const ws = new WebSocket(WS_URL);
  ws.onopen = () => {
    console.log(`Connected to ${WS_URL}`);
    setInterval(() => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      canvas.toBlob(b => {
        ws.send(b);
      });
    }, 3000);
  };

  ws.onmessage = message => {
    console.log(message);
    const slouchRoot = document.querySelector("#slouch");
    var data = JSON.parse(message.data);
    console.log(data);
    slouchRoot.textContent = data.predictions[0].tagName;
  };
}
