const input = document.querySelector(".search-input")
const form = document.querySelector(".search-input-form")
const logoMenu = document.querySelector(".logo-menu")
const searchIcon = document.querySelector(".search-icon")
const closeIcon = document.querySelector(".close-icon")
const header = document.querySelector("header")


searchIcon.addEventListener("click",()=> {
    closeIcon.style.display = "block";
    searchIcon.style.display = "none"
    form.style.display = "block"
    logoMenu.style.display = "none"
})

closeIcon.addEventListener("click", () => {
    
    closeIcon.style.display = "none";
    searchIcon.style.display = "block"
    form.style.display = "none"
    logoMenu.style.display = "flex"
    header.style.justifyContent = "space-between"
})