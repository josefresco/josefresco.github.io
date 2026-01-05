class PersonalWebsite{constructor(){this.init();this.setupNeuralNetwork();this.setupScrollEffects();this.setupNavigationEffects();this.setupTypewriterEffect();this.setupParallaxEffects();this.setupIntersectionObserver();}
init(){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',()=>this.bindEvents());}else{this.bindEvents();}}
bindEvents(){this.setupSmoothScrolling();this.setupClickAnimations();this.setupProjectCardEffects();this.setupTerminalAnimation();this.setupPerformanceOptimizations();}
setupNeuralNetwork(){return;}
createNeuralConnections(container){return;}
animateConnections(nodes){return;}
setupMouseInteraction(container){return;}
createRipple(x,y){return;}
setupScrollEffects(){let lastScroll=0;let ticking=!1;const updateScrollEffects=()=>{const scrolled=window.pageYOffset;if(Math.abs(scrolled-lastScroll)<10&&lastScroll!==0){ticking=!1;return;}
lastScroll=scrolled;const header=document.querySelector('.header');if(header){const opacity=Math.min(scrolled/100,0.95);header.style.background=`rgba(10, 11, 15, ${opacity})`;}
ticking=!1;};const requestScrollUpdate=()=>{if(!ticking){requestAnimationFrame(updateScrollEffects);ticking=!0;}};window.addEventListener('scroll',requestScrollUpdate,{passive:!0});}
setupNavigationEffects(){const navLinks=document.querySelectorAll('.nav-link');navLinks.forEach(link=>{link.addEventListener('click',()=>{navLinks.forEach(l=>l.classList.remove('active'));link.classList.add('active');});});}
setupSmoothScrolling(){document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',e=>{e.preventDefault();const target=document.querySelector(anchor.getAttribute('href'));if(target){const headerHeight=document.querySelector('.header').offsetHeight;const targetPosition=target.offsetTop-headerHeight-20;window.scrollTo({top:targetPosition,behavior:'smooth'});}});});}
setupTypewriterEffect(){return;}
typeText(element,text,speed){return;}
setupTerminalAnimation(){const terminalLines=document.querySelectorAll('.terminal-line');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){terminalLines.forEach((line,index)=>{setTimeout(()=>{line.style.opacity='1';line.style.transform='translateX(0)';},index*400);});observer.unobserve(entry.target);}});});const terminal=document.querySelector('.terminal');if(terminal){observer.observe(terminal);}}
setupClickAnimations(){const buttons=document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');buttons.forEach(button=>{button.addEventListener('click',e=>{const ripple=document.createElement('span');const rect=button.getBoundingClientRect();const size=Math.max(rect.width,rect.height);const x=e.clientX-rect.left-size/2;const y=e.clientY-rect.top-size/2;ripple.style.cssText=`
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
                `;button.style.position='relative';button.style.overflow='hidden';button.appendChild(ripple);setTimeout(()=>ripple.remove(),600);});});}
setupProjectCardEffects(){return;}
setupIntersectionObserver(){const animateElements=document.querySelectorAll('.project-card, .stat-item, .contact-link');const observerOptions={threshold:0.1,rootMargin:'0px 0px -50px 0px'};const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('animate-in');observer.unobserve(entry.target);}});},observerOptions);animateElements.forEach(element=>{observer.observe(element);});}
setupParallaxEffects(){return;}
setupPerformanceOptimizations(){this.setupLazyLoading();this.preloadResources();}
setupLazyLoading(){const images=document.querySelectorAll('img[data-src]');if('IntersectionObserver'in window){const imageObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const img=entry.target;img.src=img.dataset.src;img.classList.remove('lazy');imageObserver.unobserve(img);}});});images.forEach(img=>imageObserver.observe(img));}else{images.forEach(img=>{img.src=img.dataset.src;img.classList.remove('lazy');});}}
preloadResources(){const fontLink=document.createElement('link');fontLink.rel='preload';fontLink.href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';fontLink.as='style';fontLink.onload=function(){this.onload=null;this.rel='stylesheet';};document.head.appendChild(fontLink);}}
const style=document.createElement('style');style.textContent=`
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
`;document.head.appendChild(style);const website=new PersonalWebsite();document.addEventListener('keydown',e=>{if(e.key==='Tab'){document.body.classList.add('keyboard-navigation');}});document.addEventListener('mousedown',()=>{document.body.classList.remove('keyboard-navigation');});const keyboardStyle=document.createElement('style');keyboardStyle.textContent=`
    .keyboard-navigation *:focus {
        outline: 2px solid var(--neural-primary);
        outline-offset: 2px;
    }
`;document.head.appendChild(keyboardStyle);