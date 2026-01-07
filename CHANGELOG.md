# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
