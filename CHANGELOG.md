# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.12.0] - 2026-04-03

### Reviewed
- All 27 blog post HTML files confirmed present and accounted for in `sitemap.xml`
- All 27 `sitemap.xml` blog post URLs verified against files on disk — no orphaned entries or missing pages
- `feed.xml` confirmed correct with 10 most recent posts in chronological order
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- No unnecessary, duplicate, or unreferenced files found for removal
- `README.md` reviewed — project structure and documentation index are accurate and up to date

### Fixed
- `feed.xml` — removed stray blank line before closing `</channel>` tag (same issue as v1.8.0, had crept back in)

### Updated
- `sitemap.xml` — updated `lastmod` for `/`, `/blog/`, and `/feed.xml` entries to 2026-04-03
- `feed.xml` — updated `lastBuildDate` to 2026-04-03

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.11.0] - 2026-04-02

### Reviewed
- All 27 blog post HTML files confirmed present and accounted for in `sitemap.xml`
- All 27 `sitemap.xml` blog post URLs verified against files on disk — no orphaned entries or missing pages
- `feed.xml` confirmed correct with 10 most recent posts in chronological order
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- No unnecessary, duplicate, or unreferenced files found for removal
- `README.md` reviewed — project structure and documentation index are accurate and up to date

### Updated
- `sitemap.xml` — updated `lastmod` for `/`, `/blog/`, and `/feed.xml` entries to 2026-04-02
- `feed.xml` — updated `lastBuildDate` to 2026-04-02

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.10.0] - 2026-03-31

### Reviewed
- All 27 blog post HTML files confirmed present and accounted for in `sitemap.xml`
- All 27 blog post URLs in `sitemap.xml` verified against files on disk — no orphaned entries or missing pages
- `feed.xml` confirmed correct with 10 most recent posts in chronological order
- `blog/images/` directory audited — `moving-hosting-gemini-ai.png` confirmed referenced and retained; `watch-list-screenshot-3.jpeg` confirmed referenced and retained
- `blog/who-dis-chrome-extension.html` confirmed reusing `who-dis-ip-lookup.svg` intentionally — no missing image
- No unnecessary, duplicate, or unreferenced files found for removal

### Updated
- `sitemap.xml` — updated `lastmod` for `/`, `/blog/`, and `/feed.xml` entries to 2026-03-31
- `feed.xml` — updated `lastBuildDate` to 2026-03-31

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.9.0] - 2026-03-30

### Removed
- `css/main.css` — unused 3-line stub file with no HTML references; `css/` directory removed along with it

### Updated
- `README.md` — removed `css/` directory from project structure listing
- `CONTRIBUTING.md` — removed `css/main.css` entry from project structure listing
- `feed.xml` — updated `lastBuildDate` to 2026-03-30
- `sitemap.xml` — updated `lastmod` for `/feed.xml` entry to 2026-03-30

## [1.8.0] - 2026-03-28

### Fixed
- `README.md` — removed duplicate `images/` entry from project structure listing

### Removed
- `blog/images/Dynamic Raspberry Pi with Data Flow Visualization.png` — unreferenced image file with no links from any page

### Updated
- `feed.xml` — removed stray blank line before closing `</channel>` tag

### Known Issues
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by `blog/wpe-central-command.html` as both OG image and inline hero image

## [1.7.0] - 2026-03-27

### Updated
- `README.md` — added `blog.css` to project structure's blog directory listing
- `sitemap.xml` — updated `lastmod` for `/now/` and `feed.xml` entries to 2026-03-27
- `feed.xml` — updated `lastBuildDate` to 2026-03-27; trimmed to 10 most recent posts

## [1.6.0] - 2026-03-26

### Updated
- `sitemap.xml` — corrected `lastmod` for `save-to-my-blog.html` from `2026-01-24` to `2026-03-21` (post was updated in March 2026)
- `README.md` — removed references to deleted planning documents from project structure and documentation index

### Removed
- `MARKETING_RECOMMENDATIONS.md` — AI-generated marketing strategy report; internal planning document not suited for public repository
- `WEBSITE_REVIEW_2026.md` — AI-generated site audit report; internal planning document not suited for public repository

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
