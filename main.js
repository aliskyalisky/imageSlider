const prevBtn = document.querySelector('.spinleft');
const nextBtn = document.querySelector('.spinright');
const slideImage = document.querySelectorAll('.imagecard');
const slidesContainer = document.querySelector('.imageholder');
const navDots = document.querySelector('.navdots');
let currentSlide = 0;

function init() {

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + '%';
    });

    slideImage[0].classList.add('active');

    createNavigationDots();
}

init();

function createNavigationDots() {
    for (let i = 0; i < slideImage.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('singledot');
        navDots.appendChild(dot);

        dot.addEventListener('click', () => {
            goToSlide(i);
        })
    }

    navDots.children[0].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    if (currentSlide >= slideImage.length - 1) {
        goToSlide(0);
        currentSlide = 0;
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
    if (currentSlide <= 0) {
        goToSlide(slideImage.length - 1);
        currentSlide = slideImage.length - 1;
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});


function goToSlide(slideNumber) {
    let slideWidth = slideImage[0].clientWidth;
    slidesContainer.style.transform = 'translateX(-' + slideWidth * slideNumber + 'px)';

    currentSlide = slideNumber;
    setActiveClass();
}

function setActiveClass() {
    let currentActive = document.querySelector('.imagecard.active');
    currentActive.classList.remove('active');
    slideImage[currentSlide].classList.add('active');

    let currentDot = document.querySelector('.singledot.active');
    currentDot.classList.remove('active');
    navDots.children[currentSlide].classList.add('active');
}

