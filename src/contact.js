
import headerImageSrc from "./assets/imgs/header-home.jpg"

export default function() {
  const text = document.createElement("div")
  text.className = "text rubik-subheading"
  text.textContent = "Los Pollos Hermanos"

  const subtext = document.createElement("div")
  subtext.className = "subtext rubik-heading"
  subtext.textContent = "Contact Us"

  const overlayText = document.createElement("div")
  overlayText.className = "overlay-text";

  const overlay = document.createElement("div")
  overlay.className = "overlay"

  const headerImageElem = document.createElement("img")
  headerImageElem.src = headerImageSrc;

  const imgContainer = document.createElement("div")
  imgContainer.className = "img-container"


  overlayText.appendChild(text)
  overlayText.appendChild(subtext)

  overlay.appendChild(overlayText)
  

  imgContainer.appendChild(headerImageElem)
  imgContainer.appendChild(overlay)


  const content = document.getElementById("content")
  content.appendChild(imgContainer)
}



