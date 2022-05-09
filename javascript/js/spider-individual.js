let playtrailerSpiderLarge = document.querySelector(".play-spider-large");
let videoSpiderLarge = document.querySelector(".video-spider-large");
let closeVideoSpiderLarge = document.querySelector(".close-video-spider-large");


playtrailerSpiderLarge.onclick = () => {
  videoSpiderLarge.classList.add("show-video");
}

closeVideoSpiderLarge.onclick = () => {
  videoSpiderLarge.classList.remove("show-video");
}