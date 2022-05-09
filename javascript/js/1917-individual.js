let playtrailer1917Large = document.querySelector(".play-1917-large");
let video1917Large = document.querySelector(".video-1917-large");
let closeVideo1917Large = document.querySelector(".close-video-1917-large");


playtrailer1917Large.onclick = () => {
  video1917Large.classList.add("show-video");
}

closeVideo1917Large.onclick = () => {
  video1917Large.classList.remove("show-video");
}