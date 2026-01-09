# josefresco.github.io

This repository contains the source code for my personal website and blog, [josefresco.com](https://josefresco.com). It is a static website built with HTML, CSS, and vanilla JavaScript, designed to be fast, responsive, and AI-friendly.

## Features

*   **Modern & Responsive Design:** Optimized for seamless viewing on all devices, from desktops to mobile phones
*   **Performance-Focused:** Built with critical CSS inlining, deferred script loading, and optimized assets
*   **AI-Optimized:** Structured content with semantic HTML, schema markup, and TL;DR summaries for AI agents and web crawlers
*   **Project Portfolio:** Curated showcase of featured projects with source code and live demos
*   **Blog Platform:** Technical articles on web development, AI/ML, automation, and developer tools

## Tech Stack

*   **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Styling:** CSS Grid, Flexbox, CSS Custom Properties
*   **Icons & Fonts:** Font Awesome, Inter font family
*   **Deployment:** Automated sync script (`website-sync.sh`) to web server at `/var/www/html/`
*   **Version Control:** Git + GitHub
*   **Hosting:** Self-hosted web server + optional GitHub Pages

## Quick Start

### Local Development

Clone the repository and run a local HTTP server:

```bash
# Clone the repository
git clone https://github.com/josefresco/josefresco.github.io.git

# Navigate to the project directory
cd josefresco.github.io

# Start a local server (Python 3)
python -m http.server

# Alternative: Python 2
python -m SimpleHTTPServer

# Alternative: Node.js
npx http-server
```

The website will be available at `http://localhost:8000` (or the port shown in your terminal).

### Making Changes

1. Edit HTML, CSS, or JavaScript files directly
2. Refresh your browser to see changes
3. Test responsiveness across different screen sizes
4. Ensure AI optimization guidelines are followed (see below)

## Project Structure

```
josefresco.github.io/
├── index.html              # Main landing page with portfolio
├── style.css               # Global stylesheet
├── script.js               # JavaScript functionality
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for SEO
├── blog/                   # Blog posts directory
│   ├── index.html          # Blog listing page
│   └── *.html              # Individual blog post files
├── css/                    # Additional stylesheets
├── admin/                  # Pi-hole admin (excluded from sync)
├── website-sync.sh         # Automated deployment script
├── update_content_for_ai.sh # AI optimization checklist
├── README.md               # This file
├── PROCESS.md              # Content management guide
├── DEPLOYMENT.md           # Deployment documentation
├── CONTRIBUTING.md         # Contribution guidelines
├── AI_OPTIMIZATION_INSTRUCTIONS.md  # AI content guidelines
└── CHANGELOG.md            # Version history
```

## Content Management

### Adding a New Blog Post

1. Create a new HTML file in the `blog/` directory with a descriptive slug (e.g., `my-project-name.html`)
2. Use the HTML template provided in [PROCESS.md](PROCESS.md)
3. Include TL;DR summary, proper heading hierarchy, and schema markup
4. Run the AI optimization checklist:
   ```bash
   ./update_content_for_ai.sh
   ```
5. Add a blog card entry to `blog/index.html`
6. Deploy using `./website-sync.sh`

See [PROCESS.md](PROCESS.md) for detailed step-by-step instructions.

### Adding a New Project

1. Open `index.html` in the root directory
2. Locate the `<section id="projects" class="projects">` section
3. Copy an existing project card and update with your project details
4. Deploy changes using `./website-sync.sh`

See [PROCESS.md](PROCESS.md) for the complete process.

## AI Optimization

This website follows specific guidelines to ensure content is easily discoverable and citable by AI agents:

- **TL;DR Summaries:** Each blog post includes a 50-60 word summary at the top
- **Semantic HTML:** Proper heading hierarchy (H1 → H2 → H3) for content structure
- **Schema Markup:** BlogPosting schema for enhanced indexing
- **Structured Lists:** Bullet points and numbered lists for key information
- **External Citations:** Links to authoritative sources
- **Meta Descriptions:** Concise 150-160 character descriptions

Run `./update_content_for_ai.sh` to see the full checklist. See [AI_OPTIMIZATION_INSTRUCTIONS.md](AI_OPTIMIZATION_INSTRUCTIONS.md) for comprehensive guidelines.

## Deployment

The site can be deployed in two ways:

### Automated Deployment (Recommended)

Use the automated sync script to deploy to your web server:

```bash
./website-sync.sh
```

This script:
- Syncs files from `/var/www/html/` to the GitHub repository
- Commits and pushes changes automatically
- Pulls remote updates back to the web server
- Excludes the `admin/` directory from sync

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment documentation, including:
- Manual deployment steps
- Cron automation setup
- GitHub Pages configuration
- Rollback procedures
- Troubleshooting guide

### Manual Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md#manual-deployment) for step-by-step manual deployment instructions.

## Contributing

Contributions that improve functionality, accessibility, performance, or fix bugs are welcome!

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for:
- Development setup instructions
- Code style guidelines
- Testing requirements
- Pull request process
- Commit message conventions

## Documentation

- **[README.md](README.md)** - Project overview and quick start (you are here)
- **[PROCESS.md](PROCESS.md)** - Content management workflows
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment guide and troubleshooting
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines
- **[AI_OPTIMIZATION_INSTRUCTIONS.md](AI_OPTIMIZATION_INSTRUCTIONS.md)** - AI content optimization guide
- **[CHANGELOG.md](CHANGELOG.md)** - Version history

## License

This is a personal portfolio project. All content is © Jose Fresco. The code structure and implementation details may be referenced for educational purposes.

## Contact

- **Website:** [josefresco.com](https://josefresco.com)
- **GitHub:** [@josefresco](https://github.com/josefresco)
- **Issues:** [GitHub Issues](https://github.com/josefresco/josefresco.github.io/issues)