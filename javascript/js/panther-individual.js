let playtrailerPantherLarge = document.querySelector(".play-panther-large");
let videoPantherLarge = document.querySelector(".video-panther-large");
let closeVideoPantherLarge = document.querySelector(".close-video-panther-large");


playtrailerPantherLarge.onclick = () => {
  videoPantherLarge.classList.add("show-video");
}

closeVideoPantherLarge.onclick = () => {
  videoPantherLarge.classList.remove("show-video");
}