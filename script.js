const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Set the date for countdown (adjust the date below)
const targetDate = new Date("march 28, 2025 10:30:00").getTime();

const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.querySelector(".countdown .time-box:nth-child(1) .time").innerHTML = days;
    document.querySelector(".countdown .time-box:nth-child(3) .time").innerHTML = hours;
    document.querySelector(".countdown .time-box:nth-child(5) .time").innerHTML = minutes;
    document.querySelector(".countdown .time-box:nth-child(7) .time").innerHTML = seconds;

    if (timeDifference < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "Registration Closed";
    }
}, 1000);



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function setCurrentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
setInterval(() => moveSlides(1), 5000);

