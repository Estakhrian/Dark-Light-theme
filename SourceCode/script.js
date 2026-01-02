const switchElement = document.querySelector(".switch")

switchElement.addEventListener("click", function () {
    // add dark class to body
    document.body.classList.toggle("dark")

    let darkTheme = document.body.className.includes("dark")  //boolean 

    if (darkTheme) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }

})


window.onload = function() {
    let localStorageTheme = localStorage.getItem("theme")
    if(localStorageTheme === "dark") {
        document.body.classList.add("dark")
    }
}