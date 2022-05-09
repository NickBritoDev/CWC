let playtrailerCassinoLarge = document.querySelector(".play-cassino-large");
let videoCassinoLarge = document.querySelector(".video-cassino-large");
let closeVideoCassinoLarge = document.querySelector(".close-video-cassino-large");


playtrailerCassinoLarge.onclick = () => {
  videoCassinoLarge.classList.add("show-video");
}

closeVideoCassinoLarge.onclick = () => {
  videoCassinoLarge.classList.remove("show-video");
}