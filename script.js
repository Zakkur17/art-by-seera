// ===================================
// Art Portfolio - Interactive Features
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all artwork cards for animation
    const artworkCards = document.querySelectorAll('.slide-in-up');
    artworkCards.forEach(card => {
        observer.observe(card);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading state for images
    const images = document.querySelectorAll('.artwork-image');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
    });
    
    // Optional: Add click handler for artwork cards (for future expansion)
    const cards = document.querySelectorAll('.artwork-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Future: Could open a modal or detail view
            console.log('Artwork clicked:', this.querySelector('.artwork-title').textContent);
        });
    });
    
    // Add parallax effect to hero section (subtle)
    let lastScrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    
    function updateParallax() {
        const scrollY = window.scrollY;
        if (hero && scrollY < window.innerHeight) {
            hero.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        lastScrollY = scrollY;
    }
    
    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Add hover sound effect preparation (optional, currently disabled)
    // Uncomment if you want to add subtle audio feedback
    /*
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Play subtle hover sound
        });
    });
    */
    
    console.log('🎨 Art Portfolio loaded successfully!');
});
