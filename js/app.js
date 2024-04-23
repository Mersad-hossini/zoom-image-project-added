let container = document.querySelector(".container")
let img = document.querySelector("img")

container.addEventListener("mousemove", e => {

    let clientXSize = e.clientX - container.offsetLeft + "px"
    let clientYSize = e.clientY - container.offsetTop + "px"

    img.style.cssText = `transform-origin: ${clientXSize} ${clientYSize};transform: scale(2);`
})

container.addEventListener("mouseleave", () => {
    img.style.cssText = "transform-origin: center center;transform: scale(1);"
})