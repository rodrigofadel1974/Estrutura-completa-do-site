// =========================================================
// HEADER SCROLL
// =========================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");
    }
});


// =========================================================
// HERO SLIDER
// =========================================================

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

if(slides.length > 0){

    function showSlides(){

        slides.forEach(slide => {

            slide.classList.remove("active");
        });

        slideIndex++;

        if(slideIndex > slides.length){

            slideIndex = 1;
        }

        slides[slideIndex - 1].classList.add("active");
    }

    showSlides();

    setInterval(showSlides, 5000);
}


// =========================================================
// REVEAL ON SCROLL
// =========================================================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {

        const revealTop = reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();