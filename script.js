// ===== TYPING ANIMATION =====
const typingText = document.querySelector('.typing-text');
const titles = [
    'Cybersecurity · Linux · AI Automation',
    'SOC Analyst · Network Engineer',
    'AI Automation Specialist',
    'Linux System Administrator'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when link clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== SCROLL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// ===== START TYPING ON LOAD =====
window.addEventListener('load', () => {
    typeEffect();
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 26, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 14, 26, 0.85)';
    }
});

console.log('%c👋 Hey there! Welcome to my portfolio!', 'color: #38bdf8; font-size: 16px; font-weight: bold;');
console.log('%c💼 Looking to collaborate? Email: sarathkumar.rrk@gmail.com', 'color: #94a3b8;');
