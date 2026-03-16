// Global Header Component
// This script loads a consistent header on all pages

(function() {
    const globalHeader = `
        <nav class="nav">
            <div class="nav-brand">
                <a href="/" style="text-decoration: none; color: inherit;">
                    <span class="nav-logo">JF</span>
                    <span class="nav-name">Jose Fresco</span>
                </a>
            </div>
            <div class="nav-menu-toggle" id="mobile-menu-toggle">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </div>
            <div class="nav-links" id="nav-links">
                <a href="/about" class="nav-link">About</a>
                <a href="/projects" class="nav-link">Projects</a>
                <a href="/blog" class="nav-link">Blog</a>
                <a href="/skills" class="nav-link">Skills</a>
                <a href="/ai-tools" class="nav-link">AI Tools</a>
                <a href="/now" class="nav-link">Now</a>
                <a href="/contact" class="nav-link">Contact</a>
                <a href="mailto:josefresco@gmail.com?subject=Let's Work Together&body=Hi Jose,%0D%0A%0D%0AI'm interested in working with you on a project. Let's discuss how we can collaborate.%0D%0A%0D%0ABest Regards," class="btn-cta btn-cta-nav">Hire Me</a>
            </div>
        </nav>
    `;

    const globalFooter = `
        <div class="container">
            <div class="footer-content">
                <p>&copy; ${new Date().getFullYear()} Jose Fresco. Built with modern web technologies.</p>
                <div class="footer-links">
                    <a href="https://github.com/josefresco" target="_blank" rel="noopener">GitHub</a>
                    <a href="/contact">Contact</a>
                    <a href="/feed.xml">RSS Feed</a>
                </div>
            </div>
        </div>
    `;

    function setActiveNav() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Remove active class from all links
            link.classList.remove('active');
            
            // Set active class based on current path
            if (href === '/' && currentPath === '/') {
                link.classList.add('active');
            } else if (href !== '/' && currentPath.includes(href.replace('/', ''))) {
                link.classList.add('active');
            }
        });
    }

    function initGlobalHeader() {
        const header = document.querySelector('.header');
        if (header) {
            // Replace header content with global header
            header.innerHTML = globalHeader;
            setActiveNav();
        }
    }

    function initGlobalFooter() {
        const footer = document.querySelector('.footer');
        if (footer) {
            // Replace footer content with global footer
            footer.innerHTML = globalFooter;
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initGlobalHeader();
            initGlobalFooter();
        });
    } else {
        initGlobalHeader();
        initGlobalFooter();
    }
})();
