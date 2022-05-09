let playtrailerMatrixLarge = document.querySelector(".play-matrix-large");
let videoMatrixLarge = document.querySelector(".video-matrix-large");
let closeVideoMatrixLarge = document.querySelector(".close-video-matrix-large");


playtrailerMatrixLarge.onclick = () => {
  videoMatrixLarge.classList.add("show-video");
}

closeVideoMatrixLarge.onclick = () => {
  videoMatrixLarge.classList.remove("show-video");
}