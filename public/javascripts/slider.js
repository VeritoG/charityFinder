const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slideConteiner = document.querySelector(".slides")
const slides = document.querySelectorAll(".slide")

let index = 0

// Set interval
function moveCarousel() {
    // Last image
    if (index > slides.length -1) {
        index = 0
    } else if (index < 0) {
        index = slides.length -1
    }

    slideConteiner.style.transform = `translateX(-${index * 100}%)`
}

// function startInterval() {
//     index++
//     moveCarousel()
// }

//let interval = setInterval(startInterval, 2000)

// function resetInterval() {
//     clearInterval(interval)
//     interval = setInterval(startInterval, 500)
// }



// Nav buttons
function prevSlide() {
    index--
    //resetInterval()
    //clearInterval(interval) 
    moveCarousel()
}

function nextSlide() {
    index++
    //resetInterval()
    //clearInterval(interval) 
    moveCarousel()
}


prev.addEventListener("click", prevSlide)
next.addEventListener("click", nextSlide)