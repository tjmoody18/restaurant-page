import "./styles.css";
import loadHomeTab from "./home.js"
import loadMenuTab from "./menu.js"
import loadContactTab from "./contact.js"

console.log("test")
loadHomeTab()

const content = document.getElementById("content")

const homeButton = document.querySelector(".home")
const menuButton = document.querySelector(".menu")
const contactButton = document.querySelector(".contact")

homeButton.addEventListener("click", () => {
  content.innerHTML = ""
  loadHomeTab()
})
menuButton.addEventListener("click", () => {
  content.innerHTML = ""
  loadMenuTab()
})
contactButton.addEventListener("click", () => {
  content.innerHTML = ""
  loadContactTab()
})





