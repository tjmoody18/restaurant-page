
import headerImageSrc from "./assets/imgs/header-home.jpg"
import menuData from "./assets/data/menu.json"



function createMenu(content) {

  console.log(menuData)

  // For centering menu ]
  const menuFlexContainer = document.createElement("div")
  menuFlexContainer.className = "menu-flex-container"
  
  const menuContainer = document.createElement("div")
  menuContainer.className = "menu-container"

  menuData.sections.forEach(section => {
    const sectionDiv = document.createElement("div")
    sectionDiv.className = "menu-section"

    const sectionTitle = document.createElement("div")
    sectionTitle.className = "section-title rubik-subheading"
    sectionTitle.textContent = section.name
    sectionDiv.appendChild(sectionTitle)

    section.items.forEach(item => {
      const menuItem = document.createElement("div")
      menuItem.className = "menu-item"

      const title = document.createElement("div")
      title.className = "title rubik-body"
      title.textContent = item.name
      menuItem.appendChild(title)

      if (item.description) {
        const description = document.createElement("div")
        description.className = "description rubik-light"
        description.textContent = item.description
        menuItem.appendChild(description)
      }

      sectionDiv.appendChild(menuItem)
    })

    menuContainer.appendChild(sectionDiv)
    menuFlexContainer.appendChild(menuContainer)
    content.appendChild(menuFlexContainer)
    
  })
}

export default function () {
  const text = document.createElement("div")
  text.className = "text rubik-subheading"
  text.textContent = "Los Pollos Hermanos"

  const subtext = document.createElement("div")
  subtext.className = "subtext rubik-heading"
  subtext.textContent = "Menu"

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
  createMenu(content)
}



