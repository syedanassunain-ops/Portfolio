/**
 * Simple script to handle dynamic elements on the portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current year in footer automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth scrolling for anchor links (if browser doesn't natively support scroll-behavior: smooth)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of anchorLinks) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // 3. Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const projectImages = document.querySelectorAll('.project-image img');

    if (lightbox && lightboxImg && lightboxClose) {
        // Open lightbox
        projectImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
            });
        });

        // Close lightbox on close button click
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        // Close lightbox on clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        // Close lightbox on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });
    }

    // 4. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
        });
    }

    // 5. Ambient Orb Mouse Tracking (Parallax)
    const orbs = document.querySelectorAll('.orb');
    if (orbs.length > 0 && window.matchMedia("(min-width: 768px)").matches) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Move orbs slightly opposite to mouse direction
            orbs[0].style.transform = `translate(${x * -20}px, ${y * -20}px)`;
            orbs[1].style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            orbs[2].style.transform = `translate(${x * -15}px, ${y * -15}px)`;
        });
    }
});
