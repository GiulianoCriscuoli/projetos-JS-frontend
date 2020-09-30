let maxSlides = document.querySelectorAll(".slider-item").length;
let currentSlide = 0;

document.querySelector(".slider-width").style.width= `calc(100vw * ${maxSlides})`;
document.querySelector(".slider-controls").style.height = 
`${document.querySelector(".slider").clientHeight}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = maxslides - 1;
    }

    updateMargin();
}

function goNext() {
    currentSlide++;
    if(currentSlide > (maxSlides - 1)) {
        currentSlide = 0; 
    }

    updateMargin();
}

function updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth);

    document.querySelector(".slider-width").style.marginLeft =`-${newMargin}px`;

}