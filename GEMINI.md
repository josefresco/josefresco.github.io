# GEMINI.md - Instructional Context for josefresco.github.io

This document provides a comprehensive overview of the `josefresco.github.io` project, its structure, conventions, and operational procedures. It is intended to be used as a primary context source for AI-assisted development.

## Project Overview

This is the personal website, portfolio, and blog of Jose Fresco. It is a static website built with vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**. The project is designed with a strong emphasis on:

*   **Performance:** Optimized for speed, especially on low-power devices like the Raspberry Pi. This is achieved through inlined critical CSS, deferred script loading, and a conscious decision to disable performance-heavy animations.
*   **Responsiveness:** Mobile-first design that adapts to all screen sizes.
*   **AI Optimization (AIO):** The content and structure are specifically tailored for discoverability and citability by AI agents and web crawlers, following modern AIO guidelines.

The project does not use any frontend frameworks (like React or Vue) or static site generators (like Jekyll or Hugo). There is no build step; files are edited directly.

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
1.  Create a new `.html` file in the `/blog` directory.
2.  Use the standard HTML template provided in `PROCESS.md`.
3.  Add content, ensuring it follows the AI Optimization guidelines (see below).
4.  Run the AI optimization checklist script: `./update_content_for_ai.sh`.
5.  Add a new blog card to `blog/index.html` pointing to the new file.

**Adding a New Project:**
1.  Edit `index.html`.
2.  Locate the `<section id="projects">`.
3.  Duplicate an existing `<article class="project-card">` and update its content.

### AI Optimization (AIO)

Refer to **`AI_OPTIMIZATION_INSTRUCTIONS.md`**. This is a key feature of the project.
*   **TL;DR Summaries:** Each blog post must start with a 50-60 word "Too Long; Didn't Read" summary.
*   **Semantic HTML:** Use a logical heading hierarchy (one `<h1>` per page, followed by `<h2>`, `<h3>`, etc.).
*   **Structured Data:** Use JSON-LD `BlogPosting` schema markup.
*   **Checklist:** Use the `./update_content_for_ai.sh` script to verify compliance.

### Code Style

Refer to **`CONTRIBUTING.md`** for detailed style guides.

*   **HTML:** Use semantic HTML5 elements (`<article>`, `<section>`, etc.). Class names are `kebab-case`.
*   **CSS:** The project uses a dark, "neural"-inspired theme. Styles are primarily in `style.css`.
    *   Utilize the CSS custom properties (variables) defined in `:root`.
    *   Follow a mobile-first approach.
    *   Be mindful of performance; prefer CSS transitions over JS-heavy animations.
*   **JavaScript:** All custom code is in `script.js`.
    *   Use modern, performance-conscious ES6+ vanilla JavaScript.
    *   The code is organized into a `PersonalWebsite` class.
    *   Many potential features (e.g., complex animations, parallax) are explicitly **disabled** in the code for performance reasons. Do not re-enable them without a strong justification.

### Version Control & Commits

*   **Branching:** Use feature branches (`feature/...`, `fix/...`).
*   **Commits:** Follow the **Conventional Commits** specification (e.g., `feat: Add dark mode toggle`, `fix: Correct header z-index`). This is detailed in `CONTRIBUTING.md`.

## Deployment

The project has two deployment targets, documented in **`DEPLOYMENT.md`**.

1.  **Primary: Automated Sync (`website-sync.sh`)**
    *   This is the main deployment method. The `website-sync.sh` script is designed to be run on the production web server (likely via a cron job).
    *   It `rsync`s files from the web root (`/var/www/html/`) into the git repository, commits any changes, and pushes them to GitHub.
    *   It also pulls any remote changes back to the web server.
    *   **Crucially, it excludes the `admin/` directory**, which contains the Pi-hole admin interface and should not be in the public repository.

2.  **Secondary: GitHub Pages**
    *   The repository is also configured to be served directly via GitHub Pages from the `master` branch.

## Key Files Summary

*   `index.html`: The main portfolio landing page.
*   `blog/index.html`: The blog listing page.
*   `blog/*.html`: Individual blog posts.
*   `style.css`: The primary stylesheet. Contains all theme variables and styles.
*   `script.js`: The primary JavaScript file.
*   `README.md`: High-level project overview.
*   `CONTRIBUTING.md`: **Crucial.** Contains detailed coding standards, testing requirements, and commit conventions.
*   `PROCESS.md`: **Crucial.** Explains how to add and update content.
*   `DEPLOYMENT.md`: Explains the deployment process and `website-sync.sh` script.
*   `AI_OPTIMIZATION_INSTRUCTIONS.md`: **Crucial.** Details the forward-looking strategy for making content AI-friendly.
*   `website-sync.sh`: The automated deployment script for the production server.
*   `update_content_for_ai.sh`: A shell script that provides a checklist for content creators.
