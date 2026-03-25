# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2026-03-25

### Updated
- `README.md` — expanded project structure to include all content directories, scripts, and documentation files; added `MARKETING_RECOMMENDATIONS.md` and `WEBSITE_REVIEW_2026.md` to the documentation index
- `sitemap.xml` — moved `wpe-central-command.html` to the blog posts section (was misplaced between homepage and about/projects/contact); refreshed `lastmod` dates for homepage, blog index, and now page
- `feed.xml` — trimmed to 10 most recent posts (removed oldest entry); updated `lastBuildDate` to 2026-03-25

### Removed
- `moving-hosting-gemini-ai.png` (root) — unused duplicate; the blog post references `.svg` and `.webp` versions from `blog/images/`
- `website-sync.log` — local sync log file; was tracked in git despite being listed in `.gitignore`

## [1.4.0] - 2026-03-24

### Added
- Watch List PWA blog post — private JustWatch alternative powered by TMDB API
- Arpy Assist blog post — Qwen CLI web interface for Raspberry Pi via Cloudflare Tunnel
- SafeShare blog post — clean Reddit post sharing with one-click bookmarklet
- Pi Backups blog post — automating offsite backups for Raspberry Pi applications

### Updated
- `sitemap.xml` with new blog posts and current lastmod dates
- `feed.xml` with new blog posts (now includes 10 most recent, in chronological order)

### Removed
- `index.nginx-debian.html` — default nginx welcome page (not part of site)
- `test-agent.html` — local development test file
- `agent-ui.html` — localhost redirect page (not suitable for production)

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
