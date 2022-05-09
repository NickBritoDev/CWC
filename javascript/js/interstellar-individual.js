let playtrailerInterstellarLarge = document.querySelector(".play-interstellar-large");
let videoInterstellarLarge = document.querySelector(".video-interstellar-large");
let closeVideoInterstellarLarge = document.querySelector(".close-video-interstellar-large");


playtrailerInterstellarLarge.onclick = () => {
  videoInterstellarLarge.classList.add("show-video");
}

closeVideoInterstellarLarge.onclick = () => {
  videoInterstellarLarge.classList.remove("show-video");
}