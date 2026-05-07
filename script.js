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

    // 4. Haul Parallax Effect
    const truckLayer = document.getElementById('haul-truck');
    const parallaxContainer = document.getElementById('haul-parallax');

    if (truckLayer && parallaxContainer) {
        window.addEventListener('scroll', () => {
            const containerRect = parallaxContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate progress from 0 (starts entering) to 1 (starts exiting)
            if (containerRect.top < windowHeight && containerRect.bottom > 0) {
                // Container is visible
                const scrollDistance = windowHeight - containerRect.top;
                const totalScrollable = windowHeight + containerRect.height;
                const progress = Math.max(0, Math.min(1, scrollDistance / totalScrollable));
                
                // Map [0, 1] to [-50, 150]
                const yOffset = -50 + (progress * 200);
                truckLayer.style.transform = `translateY(${yOffset}px)`;
            }
        });
    }
});
