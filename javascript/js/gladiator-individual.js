let playtrailerGladiatorLarge = document.querySelector(".play-gladiator-large");
let videoGladiatorLarge = document.querySelector(".video-gladiator-large");
let closeVideoGladiatorLarge = document.querySelector(".close-video-gladiator-large");


playtrailerGladiatorLarge.onclick = () => {
  videoGladiatorLarge.classList.add("show-video");
}

closeVideoGladiatorLarge.onclick = () => {
  videoGladiatorLarge.classList.remove("show-video");
}