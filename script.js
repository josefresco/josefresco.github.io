// AI-Inspired Personal Website Interactive Features

class PersonalWebsite {
    constructor() {
        this.init();
        this.setupNeuralNetwork();
        this.setupScrollEffects();
        this.setupNavigationEffects();
        this.setupTypewriterEffect();
        this.setupParallaxEffects();
        this.setupIntersectionObserver();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bindEvents());
        } else {
            this.bindEvents();
        }
    }

    bindEvents() {
        // Smooth scrolling for navigation links
        this.setupSmoothScrolling();
        
        // Add click animations
        this.setupClickAnimations();
        
        // Setup project card interactions
        this.setupProjectCardEffects();
        
        // Setup terminal typing animation
        this.setupTerminalAnimation();
        
        // Performance monitoring
        this.setupPerformanceOptimizations();
    }

    // Neural Network Background Animation - DISABLED for performance
    setupNeuralNetwork() {
        // Disabled heavy animations for better performance on low-power devices
        return;
    }

    createNeuralConnections(container) {
        // Disabled for performance
        return;
    }

    animateConnections(nodes) {
        // Disabled for performance
        return;
    }

    setupMouseInteraction(container) {
        // Disabled for performance
        return;
    }

    createRipple(x, y) {
        // Disabled for performance
        return;
    }

    // Scroll Effects - Optimized for performance
    setupScrollEffects() {
        // Disabled parallax effects for better performance
        // Only keep essential header opacity change with throttling
        let lastScroll = 0;
        let ticking = false;

        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;

            // Only update if scroll changed significantly (more than 10px)
            if (Math.abs(scrolled - lastScroll) < 10 && lastScroll !== 0) {
                ticking = false;
                return;
            }

            lastScroll = scrolled;

            // Header background opacity only
            const header = document.querySelector('.header');
            if (header) {
                const opacity = Math.min(scrolled / 100, 0.95);
                header.style.background = `rgba(10, 11, 15, ${opacity})`;
            }

            ticking = false;
        };

        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    }

    // Navigation Effects
    setupNavigationEffects() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        // Highlight active nav link based on scroll position
        const highlightActiveLink = () => {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach((section, index) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    const correspondingLink = document.querySelector(`a[href="#${section.id}"]`);
                    if (correspondingLink) {
                        correspondingLink.classList.add('active');
                    }
                }
            });
        };
        
        window.addEventListener('scroll', highlightActiveLink, { passive: true });
        
        // Add hover effects
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
            });
        });
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Typewriter Effect - DISABLED for performance
    setupTypewriterEffect() {
        // Disabled for performance - text displays immediately
        return;
    }

    typeText(element, text, speed) {
        // Disabled for performance
        return;
    }

    // Terminal Animation
    setupTerminalAnimation() {
        const terminalLines = document.querySelectorAll('.terminal-line');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    terminalLines.forEach((line, index) => {
                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateX(0)';
                        }, index * 400);
                    });
                    observer.unobserve(entry.target);
                }
            });
        });
        
        const terminal = document.querySelector('.terminal');
        if (terminal) {
            observer.observe(terminal);
        }
    }

    // Click Animations
    setupClickAnimations() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: buttonRipple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Project Card Effects - DISABLED tilt effects for performance
    setupProjectCardEffects() {
        // Disabled heavy mouse tracking and tilt effects
        // Basic hover effects handled by CSS only
        return;
    }

    // Intersection Observer for Animations
    setupIntersectionObserver() {
        const animateElements = document.querySelectorAll('.project-card, .stat-item, .contact-link');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Parallax Effects - DISABLED for performance
    setupParallaxEffects() {
        // Disabled parallax effects for better performance on low-power devices
        return;
    }

    // Performance Optimizations
    setupPerformanceOptimizations() {
        // Lazy load images if any are added later
        this.setupLazyLoading();
        
        // Preload critical resources
        this.preloadResources();
        
        // Setup service worker for caching
        this.setupServiceWorker();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    preloadResources() {
        // Preload Google Fonts
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        fontLink.as = 'style';
        fontLink.onload = function() {
            this.onload = null;
            this.rel = 'stylesheet';
        };
        document.head.appendChild(fontLink);
    }

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }
}

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.2); }
    }
    
    @keyframes rippleExpand {
        to {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
        }
    }
    
    @keyframes buttonRipple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .neural-node {
        transition: transform 0.3s ease-out;
    }
    
    .typing-complete {
        position: relative;
    }
    
    .typing-complete::after {
        content: '';
        position: absolute;
        right: -2px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--neural-primary);
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .nav-link.active {
        color: var(--text-accent);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Initialize the website when DOM is ready
const website = new PersonalWebsite();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard users
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--neural-primary);
        outline-offset: 2px;
    }
`;
document.head.appendChild(keyboardStyle);