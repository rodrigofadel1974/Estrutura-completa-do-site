const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';

    }else{

        header.style.boxShadow = 'none';

    }

});

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