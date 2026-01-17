// Personal Website Interactive Features - Optimized for Performance

class PersonalWebsite {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bindEvents(), { once: true });
        } else {
            this.bindEvents();
        }
    }

    bindEvents() {
        // Set fixed header background
        const header = document.querySelector('.header');
        if (header) {
            header.style.background = 'rgba(10, 11, 15, 0.95)';
        }

        this.setupSmoothScrolling();
        this.setupClickAnimations();
        this.setupNavigationEffects();
        this.setupUnifiedObserver();
        this.setupLazyLoading();
        this.setupServiceWorker();
    }

    setupNavigationEffects() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }, { passive: true });
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupClickAnimations() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
        buttons.forEach(button => {
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
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

                button.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Unified IntersectionObserver for all scroll-triggered animations
    setupUnifiedObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;

                    // Handle terminal lines with staggered animation
                    if (target.classList.contains('terminal')) {
                        const lines = target.querySelectorAll('.terminal-line');
                        lines.forEach((line, index) => {
                            setTimeout(() => {
                                line.style.opacity = '1';
                                line.style.transform = 'translateX(0)';
                            }, index * 400);
                        });
                    }

                    // Handle general animate-in elements
                    if (target.classList.contains('project-card') ||
                        target.classList.contains('stat-item') ||
                        target.classList.contains('contact-link')) {
                        target.classList.add('animate-in');
                    }

                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        const animateElements = document.querySelectorAll('.project-card, .stat-item, .contact-link, .terminal');
        animateElements.forEach(element => observer.observe(element));
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        if (images.length === 0) return;

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
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
            }, { once: true });
        }
    }
}

// Inject all CSS animations in a single operation
const style = document.createElement('style');
style.textContent = `
    @keyframes buttonRipple {
        to { transform: scale(2); opacity: 0; }
    }
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    .nav-link.active {
        color: var(--text-accent);
    }
    .nav-link.active::after {
        width: 100%;
    }
    .keyboard-navigation *:focus {
        outline: 2px solid var(--neural-primary);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Initialize
const website = new PersonalWebsite();

// Keyboard navigation detection
let isKeyboardNav = false;
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !isKeyboardNav) {
        isKeyboardNav = true;
        document.body.classList.add('keyboard-navigation');
    }
}, { passive: true });

document.addEventListener('mousedown', () => {
    if (isKeyboardNav) {
        isKeyboardNav = false;
        document.body.classList.remove('keyboard-navigation');
    }
}, { passive: true });
