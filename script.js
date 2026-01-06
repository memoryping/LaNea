document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 1500);
    });

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorOutline = document.querySelector('.custom-cursor-outline');

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Outline with a slight delay
        setTimeout(() => {
            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        }, 50);
    });

    // Cursor Hover Effects
    const links = document.querySelectorAll('a, button, .collection-card, .gallery-item');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => body.classList.add('cursor-hover'));
        link.addEventListener('mouseleave', () => body.classList.remove('cursor-hover'));
    });
    const body = document.body;

    // Floating Particles
    function createParticles() {
        const hero = document.querySelector('.hero');
        const particleCount = 15;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = Math.random() * 10 + 10;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.bottom = `-20px`;
            particle.style.animation = `float-particle ${duration}s ${delay}s linear infinite`;

            hero.appendChild(particle);
        }
    }
    createParticles();

    // Scroll Animation Observer via existing logic below...
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Parallax effect for Hero - Only on Desktop
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / 700);
            }
        }
    });

    // No hero slideshow needed, using static image
});
