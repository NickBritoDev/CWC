let playtrailerEternalsLarge = document.querySelector(".play-eternals-large");
let videoEternalsLarge = document.querySelector(".video-eternals-large");
let closeVideoEternalsLarge = document.querySelector(".close-video-eternals-large");


playtrailerEternalsLarge.onclick = () => {
  videoEternalsLarge.classList.add("show-video");
}

closeVideoEternalsLarge.onclick = () => {
  videoEternalsLarge.classList.remove("show-video");
}