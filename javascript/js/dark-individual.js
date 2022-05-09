let playtrailerDarkLarge = document.querySelector(".play-dark-large");
let videoDarkLarge = document.querySelector(".video-dark-large");
let closeVideoDarkLarge = document.querySelector(".close-video-dark-large");


playtrailerDarkLarge.onclick = () => {
  videoDarkLarge.classList.add("show-video");
}

closeVideoDarkLarge.onclick = () => {
  videoDarkLarge.classList.remove("show-video");
}