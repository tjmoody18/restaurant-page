
import headerImageSrc from "./assets/imgs/header-home.jpg"
import ownerImageSrc from "./assets/imgs/gus_fring.jpg"

export default function() {
  const text = document.createElement("div")
  text.className = "text rubik-subheading"
  text.textContent = "Los Pollos Hermanos"

  const subtext = document.createElement("div")
  subtext.className = "subtext rubik-heading"
  subtext.textContent = "Fried Chicken"

  const description = document.createElement("div")
  description.className = "description rubik-body"
  description.textContent = "The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know."

  const overlayText = document.createElement("div")
  overlayText.className = "overlay-text";

  const overlay = document.createElement("div")
  overlay.className = "overlay"

  const headerImageElem = document.createElement("img")
  headerImageElem.src = headerImageSrc;

  const imgContainer = document.createElement("div")
  imgContainer.className = "img-container"

  const ownerImageElem = document.createElement("img")
  ownerImageElem.src = ownerImageSrc;

  const ownerImgContainer = document.createElement("div")
  ownerImgContainer.className = "owner-img"

  overlayText.appendChild(text)
  overlayText.appendChild(subtext)
  overlayText.appendChild(description)

  overlay.appendChild(overlayText)
  

  imgContainer.appendChild(headerImageElem)
  imgContainer.appendChild(overlay)

  ownerImgContainer.appendChild(ownerImageElem)

  const content = document.getElementById("content")
  content.appendChild(imgContainer)
  content.appendChild(ownerImgContainer)
}



``