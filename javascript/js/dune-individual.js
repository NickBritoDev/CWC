let playtrailerDuneLarge = document.querySelector(".play-dune-large");
let videoDuneLarge = document.querySelector(".video-dune-large");
let closeVideoDuneLarge = document.querySelector(".close-video-dune-large");


playtrailerDuneLarge.onclick = () => {
  videoDuneLarge.classList.add("show-video");
}

closeVideoDuneLarge.onclick = () => {
  videoDuneLarge.classList.remove("show-video");
}