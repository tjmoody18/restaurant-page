
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

  // Contact info
  const contactContainer = document.createElement("div")
  contactContainer.className = "contact-container"

  const info = document.createElement("div")
  info.className = "info"

  const address = document.createElement("div")
  const hours = document.createElement("div")
  const phone = document.createElement("div")

  address.textContent = "🏠 4275 Isleta SW, Albuquerque, NM 87105"
  hours.textContent = "🕑 Mon-Sun: 6am-8pm"
  phone.textContent = "📞 (505) 555-5555"

  address.className = "address rubik-body"
  hours.className = "hours rubik-body"
  phone.className = "phone rubik-body"

  const map = document.createElement("iframe")
  map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13070.739895547977!2d-106.69657443109497!3d35.01459026495376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220dd72bedf733%3A0xd0672c8833de7ff7!2sTwisters%20Burgers%20and%20Burritos!5e0!3m2!1sen!2sus!4v1736278066939!5m2!1sen!2sus" 
  map.width = "600"
  map.height = "450"
  map.style = "border:0;"
  map.allowFullscreen = ""
  map.loading = "lazy"
  map.referrerpolicy = "no-referrer-when-downgrade"

  info.appendChild(address)
  info.appendChild(hours)
  info.appendChild(phone)
  info.appendChild(map)

  contactContainer.appendChild(info)


  overlayText.appendChild(text)
  overlayText.appendChild(subtext)

  overlay.appendChild(overlayText)
  

  imgContainer.appendChild(headerImageElem)
  imgContainer.appendChild(overlay)


  const content = document.getElementById("content")
  content.appendChild(imgContainer)
  content.appendChild(contactContainer)
}



