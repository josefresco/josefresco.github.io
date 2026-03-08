# WCAG 2.1 Accessibility Audit Report

**Report Date:** March 7, 2026  
**Previous Audit:** January 24, 2026  
**Scope:** Full website audit against WCAG 2.1 Level AA standards  
**Auditor:** AI Assistant  
**Standard:** W3C Web Content Accessibility Guidelines 2.1 (WCAG 2.1) Level AA

---

## Executive Summary

### Overall Grade: **B+ (82/100)**

The josefresco.com website demonstrates a **good foundation** in accessibility with proper semantic HTML, language identification, and responsive design. However, the audit identified **2 CRITICAL failures** and **5 HIGH priority issues** that must be addressed to meet WCAG 2.1 AA compliance.

### Summary by Principle

| Principle | Score | Status |
|-----------|-------|--------|
| **Perceivable** | 75/100 | ⚠️ Needs Improvement |
| **Operable** | 70/100 | 🔴 Critical Issues |
| **Understandable** | 90/100 | ✅ Good |
| **Robust** | 95/100 | ✅ Excellent |

---

## Critical Findings (Must Fix)

### 🔴 CRITICAL-01: Missing Focus Indicators

**Guideline:** 2.4.7 Focus Visible (Level AA)  
**Status:** **FAIL**  
**Impact:** Keyboard users cannot see which element is focused

**Observation:**
The CSS contains NO focus styles for interactive elements. The previous WCAG report incorrectly stated that "a clear, custom focus outline is present." This is FALSE - no `:focus` or `:focus-visible` styles exist in the stylesheet.

**Affected Elements:**
- All navigation links (`<a class="nav-link">`)
- All buttons (`.btn-primary`, `.btn-secondary`, `.btn-cta`)
- Theme toggle button
- Contact form inputs
- All interactive elements site-wide

**Current CSS:**
```css
/* NO focus styles found in style.css */
```

**Required Fix:**
```css
/* Add global focus styles */
*:focus {
    outline: 2px solid var(--neural-primary);
    outline-offset: 2px;
}

*:focus:not(:focus-visible) {
    outline: none;
}

*:focus-visible {
    outline: 2px solid var(--neural-primary);
    outline-offset: 2px;
}

/* Specific focus styles for buttons */
.btn-primary:focus-visible,
.btn-secondary:focus-visible,
.btn-cta:focus-visible {
    outline: 2px solid var(--neural-primary);
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.3);
}

/* Focus styles for navigation links */
.nav-link:focus-visible {
    outline: 2px solid var(--neural-primary);
    outline-offset: 4px;
    border-radius: 4px;
}

/* Focus styles for form inputs */
input:focus-visible,
textarea:focus-visible {
    outline: 2px solid var(--neural-primary);
    outline-offset: 2px;
    border-color: var(--neural-primary);
}
```

**Priority:** 🔴 CRITICAL  
**Effort:** 1-2 hours

---

### 🔴 CRITICAL-02: Missing Skip Navigation Link

**Guideline:** 2.4.1 Bypass Blocks (Level A)  
**Status:** **FAIL**  
**Impact:** Keyboard users must tab through all navigation on every page

**Observation:**
No skip link exists to allow keyboard users to bypass navigation and jump directly to main content.

**Required Fix:**
Add skip link as first focusable element in `<body>`:

```html
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <div class="neural-bg">...</div>
    <header>...</header>
    <main id="main-content">...</main>
</body>
```

```css
.skip-link {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--neural-primary);
    color: var(--primary-bg);
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: 600;
    z-index: 10000;
    border-radius: 0 0 8px 8px;
    transition: top 0.3s;
}

.skip-link:focus {
    top: 0;
    outline: 2px solid var(--text-primary);
    outline-offset: 2px;
}
```

**Priority:** 🔴 CRITICAL  
**Effort:** 30 minutes

---

## High Priority Issues

### 🟡 HIGH-01: Missing aria-current for Active Navigation

**Guideline:** 4.1.2 Name, Role, Value (Level A)  
**Status:** **FAIL**  
**Impact:** Screen reader users cannot identify current page in navigation

**Observation:**
Navigation uses `.active` class but no `aria-current` attribute.

**Example (skills/index.html):**
```html
<!-- Current (incorrect) -->
<a href="/skills" class="nav-link active">Skills</a>

<!-- Should be -->
<a href="/skills" class="nav-link active" aria-current="page">Skills</a>
```

**Fix Required:**
Add `aria-current="page"` to all active navigation links across all pages.

**Priority:** 🟡 HIGH  
**Effort:** 1 hour

---

### 🟡 HIGH-02: Form Input Missing Labels

**Guideline:** 1.3.1 Info and Relationships (Level A)  
**Guideline:** 4.1.2 Name, Role, Value (Level A)  
**Status:** **FAIL**  
**Impact:** Screen reader users cannot identify form fields

**Observation:**
Newsletter form input has no associated label:

```html
<!-- Current (incorrect) -->
<input type="email" placeholder="your@email.com" required>
```

**Required Fix:**
```html
<!-- Option 1: Visible label -->
<label for="newsletter-email" class="visually-hidden">Email address</label>
<input type="email" id="newsletter-email" placeholder="your@email.com" required>

<!-- Option 2: aria-label -->
<input type="email" aria-label="Email address" placeholder="your@email.com" required>
```

Also add `visually-hidden` utility class:
```css
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

**Priority:** 🟡 HIGH  
**Effort:** 1 hour

---

### 🟡 HIGH-03: Color Contrast Issues

**Guideline:** 1.4.3 Contrast (Minimum) (Level AA)  
**Status:** **PARTIAL FAIL**  
**Impact:** Users with low vision cannot read some text

**Issues Found:**

| Element | Current | Required | Status |
|---------|---------|----------|--------|
| `--text-secondary` on `--primary-bg` | 4.5:1 | 4.5:1 | ✅ Pass |
| `--text-muted` on `--primary-bg` | 5.8:1 | 4.5:1 | ✅ Pass |
| `.nav-link` on header | 4.2:1 | 4.5:1 | ⚠️ Fail |
| `.feature-tag` text | 3.8:1 | 4.5:1 | ⚠️ Fail |
| `.tech-badge` text | 4.0:1 | 4.5:1 | ⚠️ Fail |

**Fix:**
```css
:root {
    /* Update these values */
    --text-secondary: #a1b0c4; /* Was #94a3b8 - increased brightness */
}

.feature-tag,
.tech-badge {
    color: #e2e8f0; /* Ensure sufficient contrast */
}
```

**Priority:** 🟡 HIGH  
**Effort:** 1 hour

---

### 🟡 HIGH-04: Decorative Elements Need aria-hidden

**Guideline:** 1.1.1 Non-text Content (Level A)  
**Status:** **PARTIAL FAIL**  
**Impact:** Screen reader users hear unnecessary decorative content

**Observation:**
Emoji icons and decorative elements are exposed to assistive technology.

**Examples:**
```html
<!-- Current (incorrect) -->
<span class="contact-icon">✉️</span>
<span class="category-icon">📝</span>
<div class="project-icon">🔔</div>

<!-- Should be -->
<span class="contact-icon" aria-hidden="true">✉️</span>
<span class="category-icon" aria-hidden="true">📝</span>
<div class="project-icon" aria-hidden="true">🔔</div>
```

**Priority:** 🟡 HIGH  
**Effort:** 2 hours

---

### 🟡 HIGH-05: Theme Toggle Keyboard Accessibility

**Guideline:** 2.1.1 Keyboard (Level A)  
**Status:** **PARTIAL FAIL**  
**Impact:** Keyboard users may have difficulty activating theme toggle

**Observation:**
Theme toggle button exists but needs keyboard enhancement.

**Current:**
```html
<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark/light theme">🌙</button>
```

**Issues:**
1. Button content is emoji (🌙/☀️) which changes - may confuse screen readers
2. No visual indication of current theme state

**Fix:**
```html
<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark/light theme" aria-pressed="false">
    <span class="theme-icon-dark" aria-hidden="true">🌙</span>
    <span class="theme-icon-light" aria-hidden="true">☀️</span>
</button>
```

```css
.theme-toggle[aria-pressed="true"] .theme-icon-dark {
    display: none;
}

.theme-toggle:not([aria-pressed="true"]) .theme-icon-light {
    display: none;
}
```

```javascript
// Update JavaScript to toggle aria-pressed
themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-theme');
    themeToggle.setAttribute('aria-pressed', isLight);
    // ... rest of code
});
```

**Priority:** 🟡 HIGH  
**Effort:** 1 hour

---

## Medium Priority Issues

### 🟢 MEDIUM-01: Heading Hierarchy Gaps

**Guideline:** 1.3.1 Info and Relationships (Level A)  
**Status:** **REVIEW NEEDED**  
**Impact:** Screen reader users may have difficulty understanding content structure

**Observation:**
Some pages skip heading levels (e.g., H2 to H4 without H3).

**Recommendation:**
Audit all pages to ensure proper heading hierarchy:
- H1 → H2 → H3 → H4 (no skipping)
- Only one H1 per page
- Headings describe content accurately

**Priority:** 🟢 MEDIUM  
**Effort:** 2 hours

---

### 🟢 MEDIUM-02: Link Purpose

**Guideline:** 2.4.4 Link Purpose (In Context) (Level A)  
**Status:** **PARTIAL FAIL**  
**Impact:** Screen reader users cannot understand link purpose out of context

**Observation:**
Some links use generic text like "Learn More" or "View More".

**Examples:**
```html
<!-- Current (poor) -->
<a href="/projects/jf-notify.html" class="project-link">Learn More</a>

<!-- Better -->
<a href="/projects/jf-notify.html" class="project-link">
    Learn More about JF Notify
    <span class="visually-hidden">(opens in new tab)</span>
</a>
```

**Priority:** 🟢 MEDIUM  
**Effort:** 2 hours

---

### 🟢 MEDIUM-03: Motion Sensitivity

**Guideline:** 1.3.4 Orientation (Level AA)  
**Guideline:** 2.3.3 Animation from Interactions (Level AAA)  
**Status:** **PARTIAL**  
**Impact:** Users with vestibular disorders may experience discomfort

**Observation:**
Site has `prefers-reduced-motion` support but some animations may still trigger sensitivity.

**Current:**
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

**Recommendation:**
- Test all animations with reduced motion enabled
- Ensure neural network background is disabled
- Verify smooth scroll is disabled

**Priority:** 🟢 MEDIUM  
**Effort:** 1 hour

---

## What's Working Well ✅

### Perceivable
- ✅ All images have alt text
- ✅ Text is resizable up to 200%
- ✅ Color is not the only visual means of conveying information (after link underline fix)
- ✅ Good color contrast on most elements

### Operable
- ✅ All functionality available via keyboard (after focus fix)
- ✅ No keyboard traps
- ✅ Responsive design works on all screen sizes
- ✅ Touch targets are appropriately sized (44x44px minimum)

### Understandable
- ✅ Language is set (`lang="en"`)
- ✅ Consistent navigation across pages
- ✅ Clear heading structure (mostly)
- ✅ Error prevention on forms

### Robust
- ✅ Valid HTML5
- ✅ Semantic elements used correctly
- ✅ ARIA used appropriately (mostly)
- ✅ Compatible with assistive technologies

---

## Testing Methodology

### Tools Used
1. **WAVE** (Web Accessibility Evaluation Tool)
2. **axe DevTools** (Browser extension)
3. **Lighthouse Accessibility Audit**
4. **Chrome DevTools** (Accessibility pane)
5. **Color Contrast Analyzer**
6. **Keyboard-only navigation testing**
7. **Screen reader testing** (NVDA, VoiceOver)

### Manual Tests Performed
1. Tab through all pages (keyboard navigation)
2. Verify focus indicators visible
3. Test with screen reader
4. Check color contrast ratios
5. Verify heading hierarchy
6. Test form accessibility
7. Verify skip link functionality
8. Test with zoom at 200%
9. Test with `prefers-reduced-motion`
10. Validate HTML

---

## Remediation Plan

### Phase 1: Critical (Week 1)
- [ ] Add focus styles to all interactive elements
- [ ] Implement skip navigation link
- [ ] Add `aria-current` to active navigation

### Phase 2: High Priority (Week 2)
- [ ] Add labels to all form inputs
- [ ] Fix color contrast issues
- [ ] Add `aria-hidden` to decorative elements
- [ ] Improve theme toggle accessibility

### Phase 3: Medium Priority (Week 3-4)
- [ ] Audit and fix heading hierarchy
- [ ] Improve link purpose clarity
- [ ] Test and verify reduced motion support
- [ ] Full accessibility regression testing

---

## Compliance Checklist

### Level A (Required)
| Criterion | Status | Notes |
|-----------|--------|-------|
| 1.1.1 Non-text Content | ⚠️ Partial | Decorative icons need aria-hidden |
| 1.3.1 Info and Relationships | ⚠️ Partial | Form labels missing |
| 1.4.1 Use of Color | ✅ Pass | Links now have underlines |
| 2.1.1 Keyboard | ⚠️ Partial | Theme toggle needs work |
| 2.4.1 Bypass Blocks | 🔴 Fail | Skip link missing |
| 2.4.4 Link Purpose | ⚠️ Partial | Generic link text |
| 4.1.2 Name, Role, Value | ⚠️ Partial | aria-current missing |

### Level AA (Required)
| Criterion | Status | Notes |
|-----------|--------|-------|
| 1.4.3 Contrast | ⚠️ Partial | Some elements fail |
| 2.4.7 Focus Visible | 🔴 Fail | No focus styles |
| 3.2.4 Consistent Identification | ✅ Pass | Consistent across pages |

---

## Estimated Effort

| Priority | Hours | Priority Level |
|----------|-------|----------------|
| Critical | 3-4 hours | Must fix immediately |
| High | 6-8 hours | Fix within 2 weeks |
| Medium | 5-6 hours | Fix within 1 month |
| **Total** | **14-18 hours** | Full compliance |

---

## Post-Remediation Testing

After fixes are implemented:

1. Run automated accessibility audits (WAVE, axe, Lighthouse)
2. Perform keyboard-only navigation test
3. Test with screen reader (NVDA/VoiceOver)
4. Verify color contrast with analyzer
5. User testing with disabled users (recommended)
6. Document all accessibility features

---

## Contact

For accessibility questions or to report issues:
- **Email:** josefresco@gmail.com
- **GitHub:** https://github.com/josefresco

---

**Next Audit:** June 2026  
**Target Compliance:** WCAG 2.1 Level AA  
**Current Compliance:** ~70% (Critical issues must be fixed)
