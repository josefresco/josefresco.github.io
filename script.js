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

    // Neural Network Background Animation
    setupNeuralNetwork() {
        const neuralNodes = document.querySelector('.neural-nodes');
        if (!neuralNodes) return;

        // Create dynamic neural connections
        this.createNeuralConnections(neuralNodes);
        
        // Add mouse interaction
        this.setupMouseInteraction(neuralNodes);
    }

    createNeuralConnections(container) {
        const connections = [];
        const nodeCount = 15;
        
        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'neural-node';
            node.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--neural-primary);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.3};
                animation: pulse ${2 + Math.random() * 3}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            
            container.appendChild(node);
            connections.push(node);
        }

        // Animate connections between nodes
        this.animateConnections(connections);
    }

    animateConnections(nodes) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.2;
        `;
        
        document.querySelector('.neural-bg').appendChild(svg);

        setInterval(() => {
            svg.innerHTML = '';
            
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const node1 = nodes[i];
                    const node2 = nodes[j];
                    
                    const rect1 = node1.getBoundingClientRect();
                    const rect2 = node2.getBoundingClientRect();
                    
                    const distance = Math.sqrt(
                        Math.pow(rect2.left - rect1.left, 2) + 
                        Math.pow(rect2.top - rect1.top, 2)
                    );
                    
                    if (distance < 200 && Math.random() > 0.7) {
                        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        line.setAttribute('x1', rect1.left + rect1.width / 2);
                        line.setAttribute('y1', rect1.top + rect1.height / 2);
                        line.setAttribute('x2', rect2.left + rect2.width / 2);
                        line.setAttribute('y2', rect2.top + rect2.height / 2);
                        line.setAttribute('stroke', 'var(--neural-primary)');
                        line.setAttribute('stroke-width', '1');
                        line.setAttribute('opacity', '0.3');
                        
                        svg.appendChild(line);
                    }
                }
            }
        }, 3000);
    }

    setupMouseInteraction(container) {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Create ripple effect
            if (Math.random() > 0.98) {
                this.createRipple(mouseX, mouseY);
            }
        });

        // Parallax effect for neural nodes
        const nodes = container.querySelectorAll('.neural-node');
        
        document.addEventListener('mousemove', (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const deltaX = (e.clientX - centerX) * 0.01;
            const deltaY = (e.clientY - centerY) * 0.01;
            
            nodes.forEach((node, index) => {
                const factor = (index + 1) * 0.1;
                node.style.transform = `translate(${deltaX * factor}px, ${deltaY * factor}px)`;
            });
        });
    }

    createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, var(--neural-primary) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: rippleExpand 1s ease-out forwards;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 1000);
    }

    // Scroll Effects
    setupScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax background
            const neuralBg = document.querySelector('.neural-bg');
            if (neuralBg) {
                neuralBg.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
            
            // Header background opacity
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

    // Typewriter Effect
    setupTypewriterEffect() {
        const codeLines = document.querySelectorAll('.code-line .code-text');
        
        codeLines.forEach((line, index) => {
            const text = line.innerHTML;
            line.innerHTML = '';
            
            setTimeout(() => {
                this.typeText(line, text, 50);
            }, index * 600);
        });
    }

    typeText(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                element.classList.add('typing-complete');
            }
        }, speed);
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

    // Project Card Effects
    setupProjectCardEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                
                // Add glow effect
                const glowElements = card.querySelectorAll('.project-icon, .project-version');
                glowElements.forEach(el => {
                    el.style.filter = 'drop-shadow(0 0 10px var(--neural-primary))';
                });
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                
                // Remove glow effect
                const glowElements = card.querySelectorAll('.project-icon, .project-version');
                glowElements.forEach(el => {
                    el.style.filter = 'none';
                });
            });
            
            // Add tilt effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        });
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

    // Parallax Effects
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.code-editor, .terminal, .stats-grid');
        
        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach((element, index) => {
                const rate = scrolled * (0.1 + index * 0.05);
                const yPos = -(rate / 2);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        };
        
        window.addEventListener('scroll', updateParallax, { passive: true });
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