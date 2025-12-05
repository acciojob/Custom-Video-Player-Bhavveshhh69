const video = document.querySelector(".player__video");
const toggle = document.querySelector(".player__button.toggle");
const rewindBtn = document.querySelector(".rewind");
const skipBtn = document.querySelector(".skip");
const volumeInput = document.querySelector(".volume");
const speedInput = document.querySelector(".playbackSpeed");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

// ---------- PLAY / PAUSE ----------
function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = "❚❚";
  } else {
    video.pause();
    toggle.textContent = "►";
  }
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// ---------- UPDATE PLAY/PAUSE BUTTON ----------
video.addEventListener("play", () => toggle.textContent = "❚❚");
video.addEventListener("pause", () => toggle.textContent = "►");

// ---------- UPDATE PROGRESS BAR ----------
video.addEventListener("timeupdate", () => {
  if (video.duration) {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = percent + "%";
  }
});

// ---------- SEEK ON PROGRESS CLICK ----------
progress.addEventListener("click", (e) => {
  const percent = e.offsetX / progress.offsetWidth;
  video.currentTime = percent * video.duration;
});

// ---------- SKIP BUTTONS ----------
rewindBtn.addEventListener("click", () => {
  video.currentTime = Math.max(0, video.currentTime - 10);
});

skipBtn.addEventListener("click", () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
});

// ---------- VOLUME ----------
volumeInput.addEventListener("input", () => {
  video.volume = volumeInput.value;
});

// ---------- PLAYBACK SPEED ----------
speedInput.addEventListener("input", () => {
  video.playbackRate = speedInput.value;
});

// ---------- ERROR HANDLING ----------
video.addEventListener("error", () => {
  alert("Video failed to load. Please check that download.mp4 exists.");
});
