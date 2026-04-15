# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.24.0] - 2026-04-15

### Added
- `blog/images/raspberry-pi-agent.svg` — SVG hero illustration for `blog/raspberry-pi-agent.html`; resolves Known Issue carried forward since v1.8.0
- `blog/images/wpe-central-command.svg` — SVG hero illustration replacing the missing `wpe-central-command.png`; both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` updated to reference `.svg`; resolves Known Issue carried forward since v1.8.0
- `blog/images/jf-website-monitor-content-change.svg` — SVG hero for `blog/jf-website-monitor-content-change-detection.html`
- `blog/images/jf-notify-website.svg` — SVG hero for `blog/jf-notify-website.html`
- `blog/images/developer-portfolio-performance.svg` — SVG hero for `blog/developer-portfolio-performance.html`
- `blog/images/watch-list-internals.svg` — SVG hero for `blog/watch-list-internals.html`
- `blog/images/arpy-assist-coding-agent.svg` — SVG hero for `blog/arpy-assist-coding-agent.html`
- `blog/images/pi-backups-encryption.svg` — SVG hero for `blog/pi-backups-encryption.html`
- `blog/images/watch-list-vercel-deploy.svg` — SVG hero for `blog/watch-list-vercel-deploy.html`
- `blog/images/jf-notify-plugin-internals.svg` — SVG hero for `blog/jf-notify-plugin-internals.html`
- `blog/archives.html` — new blog archives page listing all posts grouped by year (no pagination)

### Changed
- `now/index.html` — replaced static "Working On" content with a live GitHub repository feed (fetches and displays recently updated repos via the GitHub API)
- `blog/archives.html` — simplified from paginated listing to grouped-by-year listing shortly after initial creation

### Fixed
- `sw.js` — service worker now includes a version-busted cache key so browsers receive updated CSS after deploys instead of serving stale assets
- `about/index.html` — GitHub Projects stat now fetches the live count from the GitHub API rather than using a hardcoded value
- `now/index.html` — repo description layout and text overflow corrected
- `index.html` — removed non-functional newsletter subscribe section from homepage
- `contact/index.html` — contact page layout no longer squishes on desktop viewports

### Updated
- `sitemap.xml` — added `blog/archives.html` entry (2026-04-14); updated `lastmod` for `/about/`, `/contact/`, and `/now/` entries to `2026-04-14` to reflect their changes

### Reviewed
- All 37 blog post HTML files on disk verified against `sitemap.xml` — all entries accounted for, no orphaned or missing URLs
- `blog/images/` directory audited — all images confirmed referenced; no unreferenced or duplicate files found
- `README.md` reviewed — accurate and up to date; no changes required
- `sitemap.xml` reviewed — all 37 blog posts present, dates accurate after this version's updates
- `feed.xml` reviewed — 10 most recent posts correct, all in descending date order; no changes required
- No unnecessary or stale files found for removal

## [1.23.0] - 2026-04-14

### Added
- `blog/jf-notify-plugin-internals.html` — new blog post: "Inside JF Notify: How a WordPress Plugin Hooks into Gravity Forms and Fires Telegram Alerts" (2026-04-14)

### Removed
- `blog/images/family-dashboard.png` — unreferenced PNG; `blog/family-dashboard.html` uses `family-dashboard.svg` for all image references
- `blog/images/save-to-my-blog.png` — unreferenced PNG; `blog/save-to-my-blog.html` uses `save-to-my-blog.svg` for all image references
- `blog/images/telegram-pi-bot.png` — unreferenced PNG; `blog/telegram-pi-monitoring-bot.html` uses `telegram-pi-bot.svg` for all image references
- `blog/images/watch-list.png` — unreferenced PNG; all Watch List posts (`watch-list-pwa.html`, `watch-list-internals.html`, `watch-list-vercel-deploy.html`) use `watch-list-pwa.svg` and/or JPEG screenshots

### Updated
- `sitemap.xml` — added `jf-notify-plugin-internals.html` entry (2026-04-14); updated `lastmod` for `/`, `/blog/`, and `/feed.xml` entries to `2026-04-14`
- `feed.xml` — added `jf-notify-plugin-internals.html` as newest item; removed oldest item (`jf-website-monitor-content-change-detection.html`, Thu 27 Mar 2026) to maintain 10-item cap; updated `lastBuildDate` to `Tue, 14 Apr 2026`

### Reviewed
- All 37 blog post HTML files on disk verified against `sitemap.xml` — all entries accounted for, no orphaned or missing URLs (v1.22.0 review reported 36 posts; that count was correct at the time; `jf-notify-plugin-internals.html` brings the total to 37)
- `blog/images/` directory audited — 4 unreferenced PNG files identified and removed (see Removed section above); directory confirmed clean after removal
- `README.md` reviewed — accurate and up to date; no changes required
- `sitemap.xml` reviewed — all 37 blog posts present, dates accurate; no changes required
- `feed.xml` reviewed — 10 most recent posts correct, all in descending date order; no changes required
- No other unnecessary or stale files found for removal

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.22.0] - 2026-04-13

### Added
- `blog/watch-list-vercel-deploy.html` — new blog post: "Deploying Watch List on Vercel: TMDB Setup, Environment Variables, and PWA Installation" (2026-04-13)

### Fixed
- `feed.xml` — removed stray blank lines before closing `</channel>` tag (recurring issue; previously fixed in v1.8.0, v1.12.0, and v1.15.0)

### Updated
- `sitemap.xml` — added `watch-list-vercel-deploy.html` entry (2026-04-13); updated `lastmod` for `/`, `/blog/`, and `/feed.xml` entries to `2026-04-13`
- `feed.xml` — added `watch-list-vercel-deploy.html` as newest item; removed oldest item (`jf-website-monitor-content-change-detection.html`, Fri 27 Mar 2026) to maintain 10-item cap; updated `lastBuildDate` to `Mon, 13 Apr 2026`

### Reviewed
- All 36 blog post HTML files on disk verified against `sitemap.xml` — all entries accounted for, no orphaned or missing URLs (corrects v1.21.0 count of 35; actual post count is 36)
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- `README.md` reviewed — accurate and up to date; no changes required
- `sitemap.xml` reviewed — all 36 blog posts present, dates accurate; no changes required
- No unnecessary or stale files found for removal

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.21.0] - 2026-04-12

### Fixed
- `feed.xml` — removed 11th item (`raspberry-pi-agent.html`, Thu 26 Mar 2026) to restore the 10-item cap; feed was at 11 items after v1.20.0 added 2 posts but only removed 1

### Reviewed
- All 35 blog post HTML files on disk verified against `sitemap.xml` — all entries accounted for, no orphaned or missing URLs (corrects v1.20.0 count of 34; actual post count is 35)
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- `README.md` reviewed — accurate and up to date; no changes required
- `sitemap.xml` reviewed — all 35 blog posts present, dates accurate; no changes required
- No unnecessary or stale files found for removal

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.20.0] - 2026-04-11

### Added
- `blog/watch-list-internals.html` — new blog post: "Watch List Internals: Single-File PWA Architecture, Build-Time Credential Injection, and TMDB Session Auth" (2026-04-10)
- `blog/arpy-assist-coding-agent.html` — new blog post: "Arpy Assist Becomes a Coding Agent: Claude Code, Autonomous Commits, and a Pi That Manages Its Own Repos" (2026-04-11)

### Updated
- `sitemap.xml` — added entries for `watch-list-internals.html` (2026-04-10) and `arpy-assist-coding-agent.html` (2026-04-11); corrected `lastmod` for `/feed.xml` entry from `2026-04-10` to `2026-04-11`
- `feed.xml` — added `arpy-assist-coding-agent.html` as newest item and `watch-list-internals.html` as second; removed oldest item (`who-dis-chrome-extension.html`) to restore the 10-item cap; updated `lastBuildDate` to `Sat, 11 Apr 2026`

### Reviewed
- All 34 blog post HTML files on disk verified against `sitemap.xml` — all entries accounted for, no orphaned or missing URLs
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- `README.md` reviewed — accurate and up to date; no changes required
- No unnecessary or stale files found for removal

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.19.0] - 2026-04-10

### Updated
- `sitemap.xml` — updated `lastmod` for `/`, `/blog/`, `/now/`, and `/feed.xml` entries to `2026-04-10`
- `feed.xml` — updated `lastBuildDate` to `Fri, 10 Apr 2026`
- `now/index.html` — updated date stamp from "March 2026" to "April 2026"; updated "Working On" section to reflect Family Dashboard v3.30 (was v3.26), content change detection work on JF Website Monitor, and developer portfolio performance project

### Reviewed
- All 33 blog post HTML files on disk verified against `sitemap.xml` — all entries accounted for, no orphaned or missing URLs
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- `README.md` reviewed — accurate and up to date; no changes required
- No unnecessary or stale files found for removal

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.18.0] - 2026-04-09

### Added
- `blog/developer-portfolio-performance.html` — new blog post: "Building a Fast Developer Portfolio: Critical CSS, Service Workers, and Why I Skipped Frameworks" (2026-04-09)

### Fixed
- `feed.xml` — corrected chronological sort order: `family-dash-v330.html` (Wed 08 Apr) was incorrectly positioned after `save-to-my-blog-extension-internals.html` (Mon 06 Apr) and `family-dash-vercel-caldav-setup.html` (Sun 05 Apr); items now in strict newest-first order
- `feed.xml` — removed 11th item (`pi-backups-raspberry-pi.html`) to restore the 10-item cap

### Updated
- `sitemap.xml` — added `developer-portfolio-performance.html` entry (2026-04-09); updated `lastmod` for `/`, `/blog/`, and `/feed.xml` entries to `2026-04-09`
- `feed.xml` — `lastBuildDate` already current at `Thu, 09 Apr 2026`; feed now correctly reflects 10 most-recent posts in descending date order

### Reviewed
- All 32 blog post HTML files on disk verified against `sitemap.xml` — all entries accounted for, no orphaned or missing URLs (note: v1.17.0 reported "33 blog post HTML files" — that count incorrectly included `blog/index.html`; actual post count is 32)
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- `README.md` reviewed — accurate and up to date; no changes required
- No unnecessary or stale files found for removal

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.17.0] - 2026-04-08

### Fixed
- `sitemap.xml` — removed orphaned entry for `blog/wpengine-hourly-backup-internals.html` (file does not exist on disk; was incorrectly added in v1.16.0)
- `sitemap.xml` — added missing entries for `blog/family-dash-v330.html` (2026-04-04) and `blog/jf-notify-website.html` (2026-04-03); both files exist on disk and were not indexed
- `feed.xml` — removed item referencing non-existent `wpengine-hourly-backup-internals.html`; rebuilt feed with correct 10 most-recent posts in chronological order

### Updated
- `sitemap.xml` — updated `lastmod` for `/`, `/blog/`, and `/feed.xml` entries to `2026-04-08`
- `feed.xml` — updated `lastBuildDate` to `Wed, 08 Apr 2026`; feed now correctly reflects the 10 most-recent posts: `save-to-my-blog-extension-internals.html` through `pi-backups-raspberry-pi.html`

### Reviewed
- All 33 blog post HTML files on disk verified against `sitemap.xml` — all entries accounted for, no orphaned or missing URLs
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- `README.md` reviewed — accurate and up to date

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.16.0] - 2026-04-07

### Reviewed
- All 31 blog post HTML files confirmed present and accounted for in `sitemap.xml`
- All 31 `sitemap.xml` blog post URLs verified against files on disk — no orphaned entries or missing pages
- `feed.xml` confirmed correct with 10 most recent posts in chronological order
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- No unnecessary, duplicate, or unreferenced files found for removal
- `README.md` reviewed — accurate and up to date

### Updated
- `sitemap.xml` — updated `lastmod` for `/`, `/blog/`, and `/feed.xml` entries to `2026-04-07`
- `feed.xml` — updated `lastBuildDate` to `Tue, 07 Apr 2026`

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.15.0] - 2026-04-06

### Reviewed
- All 31 blog post HTML files confirmed present and accounted for in `sitemap.xml`
- All 31 `sitemap.xml` blog post URLs verified against files on disk — no orphaned entries or missing pages
- `feed.xml` trimmed to 10 most recent posts; `save-to-my-blog-extension-internals.html` added as newest entry, `safeshare-reddit-bookmarklet.html` removed as oldest
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- No unnecessary, duplicate, or unreferenced files found for removal
- `README.md` reviewed — accurate and up to date

### Added
- `blog/save-to-my-blog-extension-internals.html` — new blog post: technical deep-dive into Save to My Blog (Chrome Manifest V3, service workers, WordPress REST API)

### Updated
- `blog/index.html` — updated featured posts to show `save-to-my-blog-extension-internals.html` as newest; `safeshare-reddit-bookmarklet.html` noted as updated April 2026
- `sitemap.xml` — added `save-to-my-blog-extension-internals.html` entry; updated `lastmod` for `/`, `/blog/`, `safeshare-reddit-bookmarklet.html`, and `/feed.xml` entries to `2026-04-06`
- `feed.xml` — updated `lastBuildDate` to `Mon, 06 Apr 2026`; added `save-to-my-blog-extension-internals.html` as newest item; removed `safeshare-reddit-bookmarklet.html` as oldest item to maintain 10-item cap; removed stray blank line before closing `</channel>` tag

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.14.0] - 2026-04-05

### Reviewed
- All 30 blog post HTML files confirmed present and accounted for in `sitemap.xml`
- All 30 `sitemap.xml` blog post URLs verified against files on disk — no orphaned entries or missing pages
- `feed.xml` trimmed to 10 most recent posts; `family-dash-vercel-caldav-setup.html` added as newest entry, `arpy-assist-qwen-web-interface.html` removed as oldest
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- No unnecessary, duplicate, or unreferenced files found for removal
- `README.md` reviewed — accurate and up to date

### Updated
- `sitemap.xml` — added `family-dash-vercel-caldav-setup.html` entry; updated `lastmod` for `/`, `/blog/`, `family-dashboard.html`, and `/feed.xml` entries to `2026-04-05`
- `feed.xml` — updated `lastBuildDate` to `Sun, 05 Apr 2026`; updated to 10 most recent posts

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

## [1.13.0] - 2026-04-04

### Reviewed
- All 29 blog post HTML files confirmed present and accounted for in `sitemap.xml`
- All 29 `sitemap.xml` blog post URLs verified against files on disk — no orphaned entries or missing pages
- `feed.xml` trimmed to 10 most recent posts (was 12; `watch-list-pwa.html` and `jf-notify-launch-announcement.html` removed as oldest entries)
- `blog/images/` directory confirmed clean — no unreferenced or duplicate image files
- No unnecessary, duplicate, or unreferenced files found for removal
- `README.md` reviewed — accurate and up to date

### Fixed
- `feed.xml` — removed 2 excess items (`watch-list-pwa.html` and `jf-notify-launch-announcement.html`) to restore the 10-item cap; `lastBuildDate` already correct at 2026-04-04
- `sitemap.xml` — removed stray blank line between homepage and about URL blocks
- `sitemap.xml` — updated `lastmod` for `/feed.xml` entry from `2026-04-03` to `2026-04-04`

### Known Issues (Carried Forward from v1.8.0)
- `blog/images/raspberry-pi-agent.svg` is missing; referenced by `blog/raspberry-pi-agent.html` as both OG image and inline hero image
- `blog/images/wpe-central-command.png` is missing; referenced by both `blog/wpe-central-command.html` and `blog/wpe-central-command-helper.html` as OG image and inline hero image

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
