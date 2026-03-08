# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-03-07

### Added
- JF Notify project launch (formerly Telegram Notifier for Gravity Forms)
- JF Notify launch announcement blog post
- New project landing page at `/projects/jf-notify.html`
- Contact section to homepage with email, GitHub, and LinkedIn links
- `llms.txt` for AI agent optimization and guidance
- CSS styles for link underlines in blog content (WCAG 2.1 AA compliance)
- Contact section styles with responsive design

### Changed
- Homepage featured project updated to JF Notify (was JF Website Monitor)
- Homepage featured blog post updated to JF Notify announcement
- Family Dashboard marked as recently updated (v3.26)
- Project branding from "Telegram Notifier" to "JF Notify"
- External link to jfnotify.com
- Navigation links on internal pages use absolute paths (`/about` instead of `/#about`)

### Updated
- Sitemap.xml with JF Notify page and current dates
- Service worker cache to include JF Notify page
- QWEN.md project structure documentation

### Fixed
- Accessibility: Links in blog content now have persistent underlines (WCAG 1.4.1)
- Navigation: Internal page links now correctly point to absolute paths
- Missing contact section on homepage (nav link now has destination)

## [1.2.0] - 2026-01-24

### Added
- JF Website Monitor self-hosting migration blog post
- SLA reporting feature blog post

### Changed
- Updated project documentation

## [1.1.0] - 2026-01-07

### Added
- `CHANGELOG.md` to track website updates.
- Content Security Policy (CSP) for enhanced security against XSS attacks.
- Accessibility attributes (`aria-label`, `role`) for better screen reader support.

### Changed
- Minified `style.css` and `script.js` for improved performance.
- Removed dead code and disabled features from `script.js` to reduce file size.
- Updated `README.md` to mention the new changelog.

### Fixed
- Removed broken service worker registration from `script.js` that was causing a console error.
