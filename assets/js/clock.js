window.addEventListener("load", () => {

    let clockTime = document.querySelector(".clock__time");

    setInterval(() => {
        let date = new Date();
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let seconds = date.getSeconds().toString().padStart(2, '0');

        clockTime.innerHTML = `${hours}:${minutes}:${seconds}`;
        
    }, 1000);

});