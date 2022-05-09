let playtrailerRyanLarge = document.querySelector(".play-ryan-large");
let videoRyanLarge = document.querySelector(".video-ryan-large");
let closeVideoRyanLarge = document.querySelector(".close-video-ryan-large");


playtrailerRyanLarge.onclick = () => {
  videoRyanLarge.classList.add("show-video");
}

closeVideoRyanLarge.onclick = () => {
  videoRyanLarge.classList.remove("show-video");
}