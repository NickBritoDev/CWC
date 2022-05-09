let playtrailerLotrLarge = document.querySelector(".play-lotr-large");
let videoLotrLarge = document.querySelector(".video-lotr-large");
let closeVideoLotrLarge = document.querySelector(".close-video-lotr-large");


playtrailerLotrLarge.onclick = () => {
  videoLotrLarge.classList.add("show-video");
}

closeVideoLotrLarge.onclick = () => {
  videoLotrLarge.classList.remove("show-video");
}