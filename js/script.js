// Swiper js
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     // grabCursor: true,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// })

// Nav open close
const body = document.querySelector('body');
const navMenu = document.querySelector('.menu-content');
const navOpenBtn = document.querySelector('.navOpen-btn');
const navCloseBtn = document.querySelector('.navClose-btn');

// Open navigation menu
if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
        navMenu.classList.add("open");
        body.style.overflowY = "hidden";
    });
}

// Close navigation menu
if (navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
        body.style.overflowY = "auto";
    });
}

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        body.style.overflowY = "auto";
    });
});

// Change header bg color


// Scroll up button
  
  
  
// Nav link indicator
 
  
// Scroll Reveal Animation
  // Change header background color on scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#FFFFFF";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

        document.querySelectorAll(
            ".logo-icon, .logo-text, .nav-link, .phone-icon, .phone-number"
        ).forEach(element => {
            element.style.color = "#333";
        });

    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";

        document.querySelectorAll(
            ".logo-icon, .logo-text, .nav-link, .phone-icon, .phone-number"
        ).forEach(element => {
            element.style.color = "#FFFFFF";
        });
    }
});


// Nav link indicator

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {
    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-navlink");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-navlink");
        }
    });
});


// Scroll Reveal Animation

const sr = ScrollReveal({
    distance: "50px",
    duration: 1000,
    easing: "ease",
    reset: false
});

sr.reveal(".section-heading", {
    origin: "top"
});

sr.reveal(".lesson-image", {
    origin: "left",
    delay: 200
});

sr.reveal(".lesson-item", {
    origin: "right",
    interval: 150
});

sr.reveal(".problem-card", {
    origin: "bottom",
    interval: 150
});

sr.reveal(".importance-card", {
    origin: "bottom",
    interval: 150
});