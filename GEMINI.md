# GEMINI.md - Instructional Context for josefresco.github.io

This document provides a comprehensive overview of the `josefresco.github.io` project, its structure, conventions, and operational procedures. It is intended to be used as a primary context source for AI-assisted development.

**Last Updated:** January 24, 2026

## Project Overview

This is the personal website, portfolio, and blog of Jose Fresco. It is a static website built with vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**. The project is designed with a strong emphasis on:

*   **Performance:** Optimized for speed, with fast server response times confirmed by network tests (see `SPEED1.md`). This is achieved through inlined critical CSS, deferred asset loading, and a conscious decision to disable performance-heavy animations.
*   **Responsiveness:** Mobile-first design that adapts to all screen sizes.
*   **AI Optimization (AIO):** The content and structure are specifically tailored for discoverability and citability by AI agents and web crawlers.
*   **PWA-Ready:** Includes a service worker (`sw.js`) for caching and offline capabilities.

The project does not use any frontend frameworks or static site generators. There is no build step; files are edited directly. The homepage also promotes premium projects like **JF Website Monitor**.

## Known Issues & Improvement Areas

A WCAG accessibility review was conducted and saved in `WCAG1.md`. Key findings include:

*   **(Critical Fail) WCAG 1.4.1 - Use of Color:** Links within blog post paragraphs are not visually distinct from regular text without hovering. They **must** be styled with an underline or other non-color indicator.
*   **(Recommendation) WCAG 1.4.3 - Contrast (Minimum):** The `--text-muted` color (`#64748b`) has borderline contrast against the dark background. It is recommended to increase its brightness for better readability.

## Building and Running

### Local Development

There is no build process. To run the website locally, serve the files using a simple HTTP server from the root directory.

**Using Python 3:**
```bash
python3 -m http.server
```

**Using Node.js:**
```bash
# If not installed: npm install -g http-server
npx http-server
```
The site will be available at `http://localhost:8000`.

## Development Conventions

The project follows a strict set of development conventions outlined in `CONTRIBUTING.md`, `PROCESS.md`, and `AI_OPTIMIZATION_INSTRUCTIONS.md`.

### Content Management

Refer to **`PROCESS.md`** for detailed workflows.

**Adding a New Blog Post:**
1.  Create a new `.html` file in the `/blog` directory (e.g., `my-new-post.html`).
2.  Add HTML content following the site's structure.
3.  **Create a new SVG hero image** in `/blog/images/` that visually represents the post. This is the preferred format.
4.  Update the blog post HTML to use a `<picture>` element, pointing to the new `.svg` and a `.png` fallback.
5.  Add a new `<article>` card to `blog/index.html` for the new post.

### Code Style & Structure

Refer to **`CONTRIBUTING.md`** for detailed style guides.

*   **CSS:** The project uses a dark, "neural"-inspired theme.
    *   Global styles are in `style.css`.
    *   Blog-specific styles are in `blog.css`.
    *   Utilize the CSS custom properties (variables) defined in `:root`.
*   **JavaScript:** All custom code is in `script.js` and organized into a `PersonalWebsite` class. Performance-heavy animations are intentionally disabled.
*   **Service Worker:** A service worker is active in `sw.js` for caching static assets. When adding new pages or key assets, consider updating the `ASSETS_TO_CACHE` list in this file.

### Version Control & Commits

*   **Branching:** Use feature branches (`feature/...`, `fix/...`).
*   **Commits:** Follow the **Conventional Commits** specification (e.g., `feat: Add dark mode toggle`, `fix: Correct header z-index`).

## Deployment

The project has two deployment targets, documented in **`DEPLOYMENT.md`**.

1.  **Primary: Automated Sync (`website-sync.sh`)**
    *   The main deployment method, run on the production server. It syncs files from the web root to the Git repo and pushes to GitHub.
    *   **Crucially, it excludes the `admin/` directory.**

2.  **Secondary: GitHub Pages**
    *   The repository is also configured to be served directly via GitHub Pages.

## Key Files Summary

*   `index.html`: The main portfolio landing page. Promotes key projects.
*   `blog/index.html`: The blog listing page.
*   `blog/*.html`: Individual blog posts.
*   `/projects/*.html`: Landing pages for specific projects.

**Styles & Scripts:**
*   `style.css`: The primary global stylesheet.
*   `blog.css`: Styles specific to the blog section.
*   `script.js`: The primary JavaScript file, including PWA service worker registration.
*   `sw.js`: The service worker file, configured to cache the site's static assets for offline use and faster loads.

**Documentation & Reports:**
*   `README.md`: High-level project overview.
*   `CONTRIBUTING.md`: **Crucial.** Contains detailed coding standards, testing requirements, and commit conventions.
*   `PROCESS.md`: **Crucial.** Explains how to add and update content.
*   `DEPLOYMENT.md`: Explains the deployment process.
*   `AI_OPTIMIZATION_INSTRUCTIONS.md`: Details the strategy for making content AI-friendly.
*   `IMPROVEMENTS1.md`: A report detailing potential site improvements (now largely implemented).
*   `WCAG1.md`: A report detailing accessibility findings, including a critical failure that needs to be addressed.
*   `SPEED1.md`: A network performance report confirming excellent server response times.

**Automation:**
*   `website-sync.sh`: Automated deployment script for the production server.
*   `update_content_for_ai.sh`: A shell script providing a content creation checklist.
