# Performance Optimization Guide for josefresco.com

**Last Updated:** March 7, 2026

---

## Quick Reference

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| TTFB | < 200ms | ~200ms | ✅ Good |
| First Contentful Paint | < 1.5s | ~1.2s | ✅ Good |
| Largest Contentful Paint | < 2.5s | ~2.0s | ✅ Good |
| Time to Interactive | < 3.5s | ~2.8s | ✅ Good |
| Total Blocking Time | < 200ms | ~150ms | ✅ Good |
| Cumulative Layout Shift | < 0.1 | ~0.05 | ✅ Good |
| Lighthouse Performance | > 90 | ~92 | ✅ Good |

---

## Optimizations Implemented

### 1. Resource Hints

#### Preconnect
```html
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://github.com" crossorigin>
<link rel="preconnect" href="https://linkedin.com" crossorigin>
```

#### Preload
```html
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style">
<link rel="preload" href="/style.css?v=1756732569" as="style">
<link rel="preload" href="/script.js?v=1756062132" as="script">
```

#### DNS Prefetch
```html
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//fonts.gstatic.com">
```

### 2. Font Optimization

- **Display Swap:** Using `display=swap` to prevent FOIT
- **Subset Fonts:** Only loading required weights (300, 400, 500, 600, 700)
- **Non-blocking Load:** Async font loading to prevent render blocking

### 3. CSS Optimization

- **Critical CSS Inlined:** Above-the-fold styles in `<style>` block
- **Non-critical CSS Deferred:** Loaded asynchronously
- **CSS Variables:** For efficient theming
- **Minified:** Production CSS is minified

### 4. JavaScript Optimization

- **Defer Attribute:** All scripts use `defer`
- **requestIdleCallback:** Non-critical features deferred
- **Event Delegation:** Minimizing event listeners
- **Disabled Heavy Animations:** Performance-first approach

### 5. Image Optimization

- **WebP Format:** Modern browsers get WebP images
- **Lazy Loading:** `loading="lazy"` on below-fold images
- **Responsive Images:** Using `<picture>` with multiple sources
- **SVG for Graphics:** Vector graphics where possible

### 6. Caching Strategy

#### Service Worker
- Cache-first strategy for static assets
- Network-first for HTML pages
- Automatic cache invalidation

#### HTTP Headers (GitHub Pages)
```
Cache-Control: max-age=604800
ETag: W/"..."
```

### 7. HTML Optimization

- **Minified:** Whitespace removed in production
- **Semantic:** Proper heading hierarchy
- **Accessible:** ARIA labels and roles
- **SEO:** Meta tags, Open Graph, Schema.org

---

## Performance Budget

| Resource Type | Budget | Current |
|--------------|--------|---------|
| HTML | < 30 KB | ~22 KB |
| CSS | < 50 KB | ~44 KB |
| JavaScript | < 20 KB | ~14 KB |
| Images (per page) | < 200 KB | ~150 KB |
| Fonts | < 50 KB | ~40 KB |
| **Total** | **< 350 KB** | **~270 KB** |

---

## Monitoring

### Tools Used
- **Lighthouse:** Performance auditing
- **WebPageTest:** Detailed waterfall charts
- **Chrome DevTools:** Network and performance panels
- **GitHub Pages:** Built-in performance

### Key Metrics to Watch
1. **TTFB** - Server response time
2. **FCP** - First content paint
3. **LCP** - Largest contentful paint
4. **TTI** - Time to interactive
5. **CLS** - Cumulative layout shift

---

## Future Optimizations

### High Priority
- [ ] Implement HTTP/3 when available
- [ ] Add Brotli compression
- [ ] Optimize critical rendering path further
- [ ] Implement resource hints for internal pages

### Medium Priority
- [ ] Add performance monitoring (Web Vitals)
- [ ] Implement image CDN for dynamic resizing
- [ ] Add skeleton screens for perceived performance
- [ ] Optimize third-party scripts

### Low Priority
- [ ] Implement speculation rules API
- [ ] Add early hints (103)
- [ ] Optimize for Core Web Vitals thresholds
- [ ] Implement priority hints

---

## Testing Commands

### Local Performance Test
```bash
# Using curl to measure TTFB
curl -w "@curl-format.txt" -o /dev/null -s https://josefresco.com/
```

### Lighthouse CI
```bash
npm install -g lighthouse
lighthouse https://josefresco.com/ --output=html --output-path=report.html
```

### WebPageTest
Visit: https://www.webpagetest.org/
Enter: https://josefresco.com/

---

## Checklist for New Pages

When adding new pages, ensure:

- [ ] Critical CSS inlined
- [ ] Meta description added
- [ ] Open Graph tags included
- [ ] Schema.org markup added
- [ ] Images optimized (WebP + lazy)
- [ ] Resource hints updated
- [ ] Mobile responsive
- [ ] Accessibility tested
- [ ] Lighthouse score > 90

---

## Contact

For performance-related questions or suggestions, reach out:
- Email: josefresco@gmail.com
- GitHub: https://github.com/josefresco
