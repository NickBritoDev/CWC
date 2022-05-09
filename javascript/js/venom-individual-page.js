let playVenomLarge = document.querySelector(".play-venom-large");
let videoVenomLarge = document.querySelector(".video-venom-large");
let closeVideoVenomLarge = document.querySelector(".close-video-venom-large");



playVenomLarge.onclick = () => {
  videoVenomLarge.classList.add("show-video");
}

closeVideoVenomLarge.onclick = () => {
  videoVenomLarge.classList.remove("show-video");
}