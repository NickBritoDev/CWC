let playtrailerEndgameLarge = document.querySelector(".play-endgame-large");
let videoEndgameLarge = document.querySelector(".video-endgame-large");
let closeVideoEndgameLarge = document.querySelector(".close-video-endgame-large");


playtrailerEndgameLarge.onclick = () => {
  videoEndgameLarge.classList.add("show-video");
}

closeVideoEndgameLarge.onclick = () => {
  videoEndgameLarge.classList.remove("show-video");
}