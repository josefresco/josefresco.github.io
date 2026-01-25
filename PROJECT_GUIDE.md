# josefresco.github.io - Project Guide

## Architecture Overview

This is a static website built with HTML, CSS, and vanilla JavaScript, designed to be fast, responsive, and AI-friendly. The site consists of a main landing page showcasing projects and an integrated blog platform.

### Technology Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling:** CSS Grid, Flexbox, CSS Custom Properties with gradient effects
- **Icons & Fonts:** Font Awesome, Inter font family
- **Deployment:** Automated sync script to web server
- **Version Control:** Git + GitHub
- **Hosting:** Self-hosted web server with optional GitHub Pages

### Core Components
- **index.html**: Main landing page with portfolio and navigation
- **style.css**: Global stylesheet with neural-inspired design
- **script.js**: JavaScript functionality with performance optimizations
- **blog/**: Directory containing blog posts and index
- **website-sync.sh**: Automated deployment script
- **update_content_for_ai.sh**: AI optimization checklist

## Site Structure

```
josefresco.github.io/
├── index.html              # Main landing page with portfolio
├── style.css               # Global stylesheet with neural-inspired design
├── script.js               # JavaScript functionality with performance optimizations
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for SEO
├── favicon.ico             # Website icon
├── blog/                   # Blog posts directory
│   ├── index.html          # Blog listing page
│   ├── images/             # Blog post images
│   └── *.html              # Individual blog post files
├── css/                    # Additional stylesheets
├── admin/                  # Pi-hole admin (excluded from sync)
├── website-sync.sh         # Automated deployment script
├── update_content_for_ai.sh # AI optimization checklist
├── README.md               # Project overview
├── PROCESS.md              # Content management guide
├── DEPLOYMENT.md           # Deployment documentation
├── CONTRIBUTING.md         # Contribution guidelines
├── AI_OPTIMIZATION_INSTRUCTIONS.md  # AI content guidelines
├── CHANGELOG.md            # Version history
├── QWEN.md                 # Project context for AI assistants
└── PROJECT_GUIDE.md        # This file
```

## Adding New Blog Posts

To add a new blog post to the site:

1. **Create the blog post file:**
   - Create a new HTML file in the `blog/` directory with a descriptive slug (e.g., `my-project-name.html`)
   - Use the existing blog posts as a template for structure and styling

2. **Structure your content properly:**
   - Include a TL;DR summary at the top in a div with class "tldr"
   - Use proper heading hierarchy (H1 → H2 → H3)
   - Include schema markup for SEO
   - Add structured lists where appropriate for key information
   - Include authoritative external citations when making technical claims

3. **Add metadata:**
   - Set appropriate title and meta description in the head section
   - Include relevant categories and tags
   - Add Open Graph and Twitter Card tags for social sharing
   - Include Schema.org structured data for rich snippets

4. **Add mobile menu:**
   - Include the mobile menu structure in the header:
     ```html
     <div class="nav-menu-toggle" id="mobile-menu-toggle">
         <span class="hamburger-line"></span>
         <span class="hamburger-line"></span>
         <span class="hamburger-line"></span>
     </div>
     <div class="nav-links" id="nav-links">
         <!-- Navigation links here -->
     </div>
     ```

5. **Optimize for AI:**
   - Run the AI optimization checklist:
     ```bash
     ./update_content_for_ai.sh
     ```

6. **Add to blog index:**
   - Add a blog card entry to `blog/index.html` following the existing pattern
   - Include title, excerpt, publication date, category, tags, and link to the post

7. **Add images (optional):**
   - Place any images in the `blog/images/` directory
   - Reference them appropriately in your blog post and index card
   - Consider using WebP format with PNG fallback for better performance

8. **Deploy:**
   - Deploy changes using `./website-sync.sh`

## Adding New Projects

To add a new project to the main page:

1. **Open `index.html`** in the root directory
2. **Locate the projects section:** Find the `<section id="projects" class="projects">` section
3. **Add a new project card:** Copy an existing project card and update with your project details:
   - Project icon (emoji)
   - Title and version
   - Description
   - Feature tags
   - Technology badges
   - Links to source code and/or live demo

4. **Deploy:** Deploy changes using `./website-sync.sh`

## Mobile Menu Implementation

The website includes a responsive mobile menu that appears on screens ≤ 768px:

- **Structure:** Hamburger menu with animated lines that transforms to a cross
- **Functionality:** Slides in from the right side of the screen
- **Features:**
  - Backdrop blur effect for visual separation
  - Smooth animations and transitions
  - Auto-close when clicking on navigation links
  - Auto-close when clicking outside the menu
- **Implementation:** Automatically applies to all pages that include the header structure
- **Styling:** Located in `style.css` under the "Mobile Hamburger Menu" section
- **JavaScript:** Handled by the `setupMobileMenu()` function in `script.js`

## Schema.org and Open Graph Tags

The website includes structured data and social sharing tags:

- **Schema.org:** Provides structured data for search engines (Person, Blog, BlogPosting, SoftwareApplication)
- **Open Graph:** Controls how content appears when shared on social media
- **Twitter Cards:** Optimizes content for Twitter sharing
- **Implementation:** Added to the `<head>` section of all pages
- **Benefits:** Improved SEO, rich snippets, and better social sharing previews

## Running a Local Preview

The site is a static website that can be served with any HTTP server. Here are several options:

### Using Python (Python 3)
```bash
# Navigate to the project directory
cd /path/to/josefresco.github.io

# Start a local server (Python 3)
python -m http.server 8000
```
The website will be available at `http://localhost:8000`

### Using Python (Python 2)
```bash
# Start a local server (Python 2)
python -m SimpleHTTPServer 8000
```

### Using Node.js
```bash
# Install and start http-server globally
npx http-server

# Or if you have it installed locally
npm install -g http-server
http-server
```

### Using PHP
```bash
# Start PHP built-in server
php -S localhost:8000
```

### Important Notes for Local Development
- The site uses relative paths, so ensure you're serving from the project root
- Some features may behave differently when accessed via `file://` protocol vs. HTTP server
- For accurate testing of all functionality, use an HTTP server rather than opening HTML files directly in browser
- The site is optimized for performance, so some features like lazy loading may behave differently in local environments

## AI Optimization Features

The website implements several AI optimization techniques:

- **TL;DR Summaries:** Each blog post includes a 50-60 word summary at the top
- **Semantic HTML:** Proper heading hierarchy (H1 → H2 → H3) for content structure
- **Schema Markup:** BlogPosting schema for enhanced indexing
- **Structured Lists:** Bullet points and numbered lists for key information
- **External Citations:** Links to authoritative sources
- **Meta Descriptions:** Concise 150-160 character descriptions

## Deployment

The site can be deployed using the automated sync script:

```bash
./website-sync.sh
```

This script synchronizes files between the web server and GitHub repository, commits and pushes changes automatically, and excludes the admin directory from sync.