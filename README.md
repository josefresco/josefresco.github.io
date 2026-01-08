# josefresco.github.io

This repository contains the source code for my personal website and blog, [josefresco.com](https://josefresco.com). It is a static website built with HTML, CSS, and vanilla JavaScript, designed to be a fast, responsive, and AI-friendly portfolio and content hub.

## Key Features

*   **Modern & Responsive Design:** Optimized for a seamless experience on all devices, from desktops to mobile phones.
*   **Performance-Focused:** Built with performance in mind, using techniques like inlined critical CSS, deferred script loading, and minified assets.
*   **AI-Optimized:** Structured to be easily parsed and understood by AI agents and web crawlers.
*   **Project Portfolio:** A curated list of my featured projects with links to their source code and live demos.
*   **Blog:** A collection of articles on web development, AI/ML, and other technology topics.

## Tech Stack

*   **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Deployment:** The site is deployed to a standard web server using the `website-sync.sh` script.
*   **Tooling:** Git

## Development

To run this website locally, you can use any simple HTTP server. For example, using Python's built-in server:

```bash
# Clone the repository
git clone https://github.com/josefresco/josefresco.github.io.git

# Navigate to the project directory
cd josefresco.github.io

# Start a local server (for Python 3)
python -m http.server
```

The website will then be available at `http://localhost:8000`.

## Content Management

This is a static website, so content is managed by editing the HTML files directly. The following files are of particular interest for content management:

*   **`index.html`**: The main landing page.
*   **`blog/`**: This directory contains the blog posts, each in its own HTML file.
*   **`PROCESS.md`**: This file contains the process for adding new blog posts and projects.

## AI Optimization

This project follows a set of guidelines for optimizing content for AI agent retrieval and citation. These guidelines are documented in the `update_content_for_ai.sh` script, which provides a checklist for ensuring blog posts are AI-friendly.

## Contributing

Interested in contributing? Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to get started, code style requirements, and the pull request process.

## Changelog

All notable changes to this project are documented in the [CHANGELOG.md](./CHANGELOG.md) file.