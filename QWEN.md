# josefresco.github.io - Project Context

## Project Overview

This is a personal portfolio and blog website for Jose Fresco (josefresco.com), built as a static website using HTML, CSS, and vanilla JavaScript. The site showcases projects, contains a technical blog, and serves as an AI-optimized platform for content discovery and citation.

### Key Features
- Modern, responsive design with neural network-inspired visual elements
- Performance-focused with critical CSS inlining and deferred script loading
- AI-optimized content structure with semantic HTML, schema markup, and TL;DR summaries
- Project portfolio showcasing various web applications, browser extensions, and WordPress plugins
- Technical blog platform with structured content for AI agents

### Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling:** CSS Grid, Flexbox, CSS Custom Properties with gradient effects
- **Icons & Fonts:** Font Awesome, Inter font family
- **Deployment:** Automated sync script (`website-sync.sh`) to web server at `/var/www/html/`
- **Version Control:** Git + GitHub
- **Hosting:** Self-hosted web server with optional GitHub Pages

## Project Structure

```
josefresco.github.io/
├── index.html              # Main landing page with portfolio
├── style.css               # Global stylesheet with neural-inspired design
├── script.js               # JavaScript functionality with performance optimizations
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for SEO
├── blog/                   # Blog posts directory
│   ├── index.html          # Blog listing page
│   └── *.html              # Individual blog post files
│   └── images/             # Blog post images
├── css/                    # Additional stylesheets
├── admin/                  # Pi-hole admin (excluded from sync)
├── website-sync.sh         # Automated deployment script
├── update_content_for_ai.sh # AI optimization checklist
├── README.md               # Project overview
├── PROCESS.md              # Content management guide
├── DEPLOYMENT.md           # Deployment documentation
├── CONTRIBUTING.md         # Contribution guidelines
├── AI_OPTIMIZATION_INSTRUCTIONS.md  # AI content guidelines
└── CHANGELOG.md            # Version history
```

## Building and Running

### Local Development
The site is a static website that can be served with any HTTP server:

```bash
# Clone the repository
git clone https://github.com/josefresco/josefresco.github.io.git

# Navigate to the project directory
cd josefresco.github.io

# Start a local server (Python 3)
python -m http.server

# Alternative: Node.js
npx http-server
```

The website will be available at `http://localhost:8000`.

### Content Management

#### Adding a New Blog Post
1. Create a new HTML file in the `blog/` directory with a descriptive slug (e.g., `my-project-name.html`)
2. Use the HTML template provided in PROCESS.md
3. Include TL;DR summary, proper heading hierarchy, and schema markup
4. Run the AI optimization checklist:
   ```bash
   ./update_content_for_ai.sh
   ```
5. Add a blog card entry to `blog/index.html`
6. Deploy using `./website-sync.sh`

#### Adding a New Project
1. Open `index.html` in the root directory
2. Locate the `<section id="projects" class="projects">` section
3. Copy an existing project card and update with your project details
4. Deploy changes using `./website-sync.sh`

## AI Optimization Features

The website implements several AI optimization techniques:

- **TL;DR Summaries:** Each blog post includes a 50-60 word summary at the top
- **Semantic HTML:** Proper heading hierarchy (H1 → H2 → H3) for content structure
- **Schema Markup:** BlogPosting schema for enhanced indexing
- **Structured Lists:** Bullet points and numbered lists for key information
- **External Citations:** Links to authoritative sources
- **Meta Descriptions:** Concise 150-160 character descriptions

## Deployment Process

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

### Manual Deployment
For manual deployment, copy files to the web server and push to GitHub separately.

## Development Conventions

- Clean, semantic HTML with proper heading hierarchy
- CSS custom properties for consistent theming
- Performance-first JavaScript with intersection observers and lazy loading
- Mobile-responsive design using CSS Grid and Flexbox
- Accessibility considerations with keyboard navigation and reduced motion support

## Special Scripts

- `website-sync.sh`: Automates synchronization between the web server and GitHub repository
- `update_content_for_ai.sh`: Provides a checklist for optimizing content for AI agents
- Various blog posts demonstrate technical implementations and best practices

## Contact Information

- **Website:** [josefresco.com](https://josefresco.com)
- **GitHub:** [@josefresco](https://github.com/josefresco)
- **Email:** josefresco@gmail.com