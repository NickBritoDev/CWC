let playtrailerRedLarge = document.querySelector(".play-red-large");
let videoRedLarge = document.querySelector(".video-red-large");
let closeVideoRedLarge = document.querySelector(".close-video-red-large");


playtrailerRedLarge.onclick = () => {
  videoRedLarge.classList.add("show-video");
}

closeVideoRedLarge.onclick = () => {
  videoRedLarge.classList.remove("show-video");
}