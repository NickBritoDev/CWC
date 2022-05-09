let playtrailerCapitainLarge = document.querySelector(".play-capitain-large");
let videoCapitainLarge = document.querySelector(".video-capitain-large");
let closeVideoCapitainLarge = document.querySelector(".close-video-capitain-large");


playtrailerCapitainLarge.onclick = () => {
  videoCapitainLarge.classList.add("show-video");
}

closeVideoCapitainLarge.onclick = () => {
  videoCapitainLarge.classList.remove("show-video");
}