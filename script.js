// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Typing Effect
    const typingSpan = document.querySelector('.typing');
    const words = ['Software Developer', 'BCA Student', 'Tech Enthusiast', 'Quick Learner'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingDelay = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingDelay = 500; // Pause before new word
        }

        setTimeout(type, typingDelay);
    }

    // Start typing effect
    if(typingSpan) {
        typingSpan.textContent = '';
        setTimeout(type, 1000);
    }

    // Scroll Animations (Fade-in elements)
    const fadeElements = document.querySelectorAll('.glass-card, .section-title, .hero-content, .hero-image');
    
    // Initial check
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
    });

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85;

        fadeElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    // Check once on load
    checkVisibility();
});
