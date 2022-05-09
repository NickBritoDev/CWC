let playtrailerShangLarge = document.querySelector(".play-shang-large");
let videoShangLarge = document.querySelector(".video-shang-large");
let closeVideoShangLarge = document.querySelector(".close-video-shang-large");


playtrailerShangLarge.onclick = () => {
  videoShangLarge.classList.add("show-video");
}

closeVideoShangLarge.onclick = () => {
  videoShangLarge.classList.remove("show-video");
}