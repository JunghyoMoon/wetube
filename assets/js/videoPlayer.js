const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = videoContainer.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayBtn");

const handlePlayClick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
};

const init = () => {
  playBtn.addEventListener("click", handlePlayClick);
};

if (videoContainer) {
  init();
}
