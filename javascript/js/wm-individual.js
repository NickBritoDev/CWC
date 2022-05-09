let playWonderLarge = document.querySelector(".play-woman-large");
let videoWonderLarge = document.querySelector(".video-woman-large");
let closeVideoWomanLarge = document.querySelector(".close-video-woman-large");



playWonderLarge.onclick = () => {
  videoWonderLarge.classList.add("show-video");
}

closeVideoWomanLarge.onclick = () => {
  videoWonderLarge.classList.remove("show-video");
}