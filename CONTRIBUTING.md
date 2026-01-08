# Contributing to josefresco.github.io

Thank you for your interest in contributing to my personal website! While this is primarily a personal portfolio, I welcome contributions that improve the site's functionality, accessibility, performance, or fix bugs.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing Requirements](#testing-requirements)
- [Pull Request Process](#pull-request-process)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Project Structure](#project-structure)
- [Performance Considerations](#performance-considerations)
- [Development Workflow](#development-workflow)
- [Common Tasks](#common-tasks)
- [Debugging Tips](#debugging-tips)
- [Version Control Guidelines](#version-control-guidelines)
- [Deployment](#deployment)
- [Additional Resources](#additional-resources)

## Code of Conduct

- Be respectful and constructive in all interactions
- Focus on what is best for the project and community
- Show empathy towards other contributors
- Accept constructive criticism gracefully

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor or IDE
- Git installed on your system
- Basic knowledge of HTML5, CSS3, and vanilla JavaScript

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/josefresco.github.io.git
   cd josefresco.github.io
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/josefresco/josefresco.github.io.git
   ```

4. **Open the site locally**
   ```bash
   # Simply open index.html in your browser
   # For best results, use a local web server:
   python3 -m http.server 8000
   # Then navigate to http://localhost:8000
   ```

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Include proper ARIA attributes for accessibility
- Use kebab-case for class names (e.g., `hero-title`, `project-card`)
- Maintain proper indentation (4 spaces)
- Include `alt` attributes for all images
- Ensure all interactive elements are keyboard accessible

**Example:**
```html
<section id="projects" class="projects">
    <div class="container">
        <article class="project-card" role="article">
            <h3 class="project-title">Project Name</h3>
            <p class="project-description">Description here</p>
        </article>
    </div>
</section>
```

### CSS

- Use CSS custom properties (variables) defined in `:root`
- Follow BEM-like naming conventions where appropriate
- Write mobile-first responsive CSS
- Group related properties together
- Include comments for complex sections
- Prefer `rem` and `em` units for scalability
- Support `prefers-reduced-motion` and `prefers-contrast` media queries

**Variable Usage:**
```css
.project-card {
    background: var(--card-bg);
    color: var(--text-primary);
    padding: var(--card-padding);
    border-radius: 12px;
    transition: all var(--transition-smooth);
}
```

**Responsive Design:**
```css
/* Mobile-first approach */
.hero {
    padding: 60px 0;
}

/* Desktop styles */
@media (min-width: 768px) {
    .hero {
        padding: 140px 0 100px;
    }
}
```

### JavaScript

- Use ES6+ modern JavaScript syntax
- Use `const` and `let` instead of `var`
- Use arrow functions for callbacks
- Include JSDoc comments for classes and complex functions
- Follow the existing class-based architecture
- Prefer event delegation for dynamic elements
- Always use strict equality (`===` and `!==`)

**Example:**
```javascript
/**
 * Handles smooth scrolling for anchor links
 * @param {Event} event - The click event
 */
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
```

## Testing Requirements

### Browser Testing

All changes must be tested in:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

### Device Testing

Test on various screen sizes:
- 📱 Mobile (320px - 480px)
- 📱 Tablet (481px - 1024px)
- 💻 Desktop (1025px+)

### Accessibility Testing

- Run Lighthouse accessibility audit (score should be 90+)
- Test keyboard navigation (Tab, Enter, Space, Arrow keys)
- Verify screen reader compatibility (NVDA, VoiceOver, or JAWS)
- Ensure sufficient color contrast (WCAG AA minimum)
- Test with browser zoom at 200%

### Performance Testing

- Run Lighthouse performance audit (score should be 85+)
- Check First Contentful Paint (FCP) < 1.8s
- Check Time to Interactive (TTI) < 3.8s
- Verify Total Blocking Time (TBT) < 200ms
- Test on low-power devices (like Raspberry Pi)

**Running Lighthouse:**
```bash
# Using Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to "Lighthouse" tab
# 3. Select categories: Performance, Accessibility, Best Practices, SEO
# 4. Click "Analyze page load"
```

### Manual Testing Checklist

Before submitting a PR, verify:
- [ ] All navigation links work correctly
- [ ] All external links open in new tabs with `rel="noopener"`
- [ ] Smooth scrolling works for anchor links
- [ ] Responsive design works on all breakpoints
- [ ] No console errors or warnings
- [ ] Images load properly
- [ ] Buttons have proper hover and active states
- [ ] Forms (if any) validate correctly
- [ ] No broken links (404s)

## Pull Request Process

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

**Branch naming conventions:**
- `feature/` - New features or enhancements
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `style/` - Code style/formatting changes
- `refactor/` - Code refactoring
- `perf/` - Performance improvements

### 2. Make Your Changes

- Keep changes focused and atomic
- Test thoroughly on all supported browsers
- Update documentation if needed
- Add entries to CHANGELOG.md if applicable

### 3. Commit Your Changes

See [Commit Message Guidelines](#commit-message-guidelines) below.

### 4. Keep Your Branch Updated

```bash
git fetch upstream
git rebase upstream/master
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template with:
   - Clear description of changes
   - Issue number (if applicable)
   - Screenshots (for UI changes)
   - Testing performed
   - Browser/device compatibility

**PR Title Format:**
```
[Type] Brief description

Examples:
[Feature] Add dark mode toggle
[Fix] Correct navigation link alignment
[Perf] Optimize image loading
```

### 7. Code Review Process

- Address all review comments
- Make requested changes in new commits
- Push updates to the same branch
- Re-request review when ready

### 8. Merge

Once approved:
- Squash commits if requested
- The maintainer will merge your PR
- Delete your feature branch after merge

## Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>: <description>

[optional body]

[optional footer]
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples

```bash
feat: Add contact form with validation

- Implemented HTML form structure
- Added client-side validation
- Styled form to match site design
- Tested across all browsers

Closes #123
```

```bash
fix: Correct header z-index on mobile devices

The header was appearing behind modal content on mobile.
Increased z-index from 100 to 1000.

Fixes #456
```

```bash
perf: Optimize neural background animation

Disabled heavy animations on low-power devices to improve
performance. Animation now only runs on devices with
matchMedia '(prefers-reduced-motion: no-preference)'.

Lighthouse performance score improved from 72 to 89.
```

## Project Structure

```
josefresco.github.io/
├── index.html              # Main homepage
├── style.css              # Main stylesheet
├── script.js              # Main JavaScript file
├── blog/                  # Blog posts directory
│   ├── index.html        # Blog listing page
│   └── *.html            # Individual blog posts
├── css/                   # Additional CSS files
│   └── main.css
├── admin/                 # Admin utilities
├── README.md              # Project overview
├── CHANGELOG.md           # Version history
├── CONTRIBUTING.md        # This file
├── robots.txt             # SEO configuration
├── sitemap.xml            # Site map for search engines
└── website-sync.sh        # Deployment script
```

## Performance Considerations

This site is optimized to run on low-power devices like Raspberry Pi. Keep these principles in mind:

### Critical Performance Rules

1. **Minimize JavaScript animations**
   - Heavy animations are disabled by default
   - Use CSS animations/transitions where possible
   - Check for `prefers-reduced-motion`

2. **Optimize asset loading**
   - Inline critical CSS in `<head>`
   - Defer non-critical CSS with `rel="preload"`
   - Use `defer` or `async` for JavaScript
   - Compress and minify CSS/JS files

3. **Reduce DOM manipulation**
   - Batch DOM updates
   - Use DocumentFragment for multiple insertions
   - Leverage event delegation

4. **Images and media**
   - Use appropriate image formats (WebP with fallbacks)
   - Include `width` and `height` attributes
   - Implement lazy loading for below-fold images
   - Optimize image compression

5. **Third-party resources**
   - Minimize external dependencies
   - Use `rel="preconnect"` for external domains
   - Self-host critical resources when possible

### Performance Testing

Before submitting performance-related changes:

```bash
# Test on a throttled connection
# Chrome DevTools > Network > Throttling > Slow 3G

# Test with CPU throttling
# Chrome DevTools > Performance > CPU: 4x slowdown
```

## Development Workflow

### Setting Up Your Development Environment

1. **Install recommended tools** (optional but helpful):
   ```bash
   # Install a local web server if you don't have one
   npm install -g http-server
   # or use Python's built-in server
   python3 -m http.server 8000
   ```

2. **Validate your changes**:
   ```bash
   # Check for broken links
   # Check HTML validation at https://validator.w3.org/
   # Run Lighthouse audit in Chrome DevTools
   ```

### Pre-commit Checklist

Before creating a pull request, ensure you've:

- [ ] Tested on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Tested responsive design on mobile, tablet, and desktop
- [ ] Run Lighthouse audit (Performance 85+, Accessibility 90+)
- [ ] Validated HTML at https://validator.w3.org/
- [ ] Checked for console errors or warnings
- [ ] Updated CHANGELOG.md with your changes
- [ ] Verified all links work correctly
- [ ] Ensured images have alt text
- [ ] Tested keyboard navigation
- [ ] Checked that changes work on low-power devices

## Common Tasks

### Adding a New Blog Post

1. Create a new HTML file in the `blog/` directory
2. Follow the existing blog post structure
3. Add the post to `blog/index.html`
4. Update `sitemap.xml` if needed
5. Test all links and formatting

### Modifying Styles

1. Update `style.css` for main styles
2. Use existing CSS custom properties when possible
3. Test responsive breakpoints
4. Ensure changes don't negatively impact performance
5. Verify dark mode compatibility (if applicable)

### Updating JavaScript

1. Modify `script.js` following the existing class-based structure
2. Keep performance in mind (this site runs on Raspberry Pi)
3. Test on low-power devices if possible
4. Avoid heavy animations or CPU-intensive operations
5. Use event delegation for better performance

## Debugging Tips

### Common Issues

**Styling doesn't update:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check for CSS specificity conflicts
- Verify CSS custom property usage

**JavaScript not working:**
- Check browser console for errors
- Ensure DOM elements exist before accessing them
- Verify event listeners are properly attached

**Performance issues:**
- Run Lighthouse audit to identify bottlenecks
- Check for large images or unoptimized assets
- Review JavaScript for inefficient loops or DOM manipulation
- Test with CPU throttling in DevTools

## Version Control Guidelines

### Branch Management

- Keep your fork's master branch in sync with upstream
- Create feature branches for all changes
- Delete branches after they're merged
- Rebase on upstream/master before submitting PR

**Updating your fork:**
```bash
git fetch upstream
git checkout master
git merge upstream/master
git push origin master
```

### Handling Merge Conflicts

```bash
# Fetch latest changes
git fetch upstream

# Rebase your branch
git checkout feature/your-feature
git rebase upstream/master

# Resolve conflicts if any
# After resolving, continue rebase
git add .
git rebase --continue

# Force push to your fork (only on your feature branch!)
git push origin feature/your-feature --force-with-lease
```

## Deployment

This website is hosted on GitHub Pages and also runs on a local Raspberry Pi server. The repository includes automated deployment scripts.

### Automated Sync

The `website-sync.sh` script automatically syncs changes from the local server to GitHub:
- Runs on a schedule via cron
- Excludes administrative directories (like Pi-hole)
- Creates automatic commits with timestamps
- Bidirectional sync (pushes changes and pulls updates)

**Note for contributors:** You don't need to worry about this script. It's used by the maintainer to sync the production environment. Your pull requests will be merged through the normal GitHub workflow.

## Questions or Need Help?

- Open an issue for bug reports or feature requests
- Email: josefresco@gmail.com
- Check existing issues and PRs first to avoid duplicates

## Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript references
- [Web.dev](https://web.dev/) - Performance and best practices guides
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility standards
- [Conventional Commits](https://www.conventionalcommits.org/) - Commit message format

## License

By contributing to this project, you agree that your contributions will be licensed under the same terms as the project.

---

Thank you for contributing! Your efforts help make this website better for everyone.
