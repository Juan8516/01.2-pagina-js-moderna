//
let themeGreen = document.querySelector(".themes__green");
let themeBlue = document.querySelector(".themes__blue");
let themeRed = document.querySelector(".themes__red");

let page = document.querySelector("html");

themeGreen.addEventListener('click', () => {
    page.removeAttribute("class");
    page.classList.add("theme__green--active");
});

themeRed.addEventListener('click', () => {
    page.removeAttribute("class");
    page.classList.add("theme__red--active");
});

themeBlue.addEventListener('click', () => {
    page.removeAttribute("class");
    page.classList.add("theme__blue--active");
});



