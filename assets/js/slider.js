window.addEventListener("load", () => {

    let btnNext = document.querySelector(".slider__btn-next");
    let btnPrev = document.querySelector(".slider__btn-prev");
    let slides = document.querySelectorAll(".slides__item");

    let counter = 0;
    let allSlides = slides.length;

    //Funcionalidad boton siguiente.
    btnNext.addEventListener("click", () => {
        
        counter++;

        if(counter >= allSlides) {
            counter = 0;
        }

        activeSlide(counter);

    });
    
    
    //Funcionalidad boton atras
    btnPrev.addEventListener("click", () => {
    
        counter--;

        if(counter < 0) {
            counter = allSlides - 1;
        }

        activeSlide(counter);

    });

    //Activar slide
    let activeSlide = (index) => {
        clearActives();

        slides[index].classList.add("slides__item--active");
    }

    //Funcionalidad remover
    let clearActives = () => {

        slides.forEach(slide => {
            slide.classList.remove("slides__item--active");    
        });
    }

});