<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "爱在西元前",
        artist: '周杰伦',
        url: 'https://www.ytmp3.cn/down/70276.mp3',
        cover: 'https://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
    ]
});