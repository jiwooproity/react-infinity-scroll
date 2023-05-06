const slider = document.querySelector('.slider');
const slides = document.getElementById('slides');

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const slideWidth = slider.offsetWidth;

let currentTranslateX = 0;

const moveSlides = (direction) => {
    let currentPosition = parseInt(currentTranslateX) || 0;

    if(direction === 'left') {
        currentPosition += slideWidth;
    } else {
        currentPosition -= slideWidth;
    }

    slides.style.transform = `translateX(${currentPosition}px)`;
    currentTranslateX = currentPosition;

    if(currentPosition > 0) {
        slides.style.transform = `translateX(-${slides.offsetWidth - slideWidth}px)`;
        currentTranslateX = -(slides.offsetWidth - slideWidth);
    } else if(currentPosition < -(slides.offsetWidth - slideWidth)) {
        slides.style.transform = 'translateX(0px)';
        currentTranslateX = 0;
    }
}

let timer = setInterval(() => {
    moveSlides('right');
}, 5000);

slider.addEventListener("mouseover", () => {
    clearInterval(timer);
});

slider.addEventListener("mouseout", () => {
    timer = setInterval(() => {
        moveSlides('right');
    }, 5000);
});

arrowLeft.addEventListener('click', () => {
    moveSlides('left');
});

arrowRight.addEventListener('click', () => {
    moveSlides('right');
});