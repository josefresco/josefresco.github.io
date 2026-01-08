# Deployment Guide

This document provides comprehensive instructions for deploying the josefresco.github.io website.

## Overview

This is a static HTML/CSS/JavaScript website that requires no build process. The site is deployed using a combination of:
- **GitHub Repository**: https://github.com/josefresco/josefresco.github.io
- **Web Server**: Files served from `/var/www/html/` on a web server
- **Sync Script**: Automated synchronization between web server and GitHub

## Prerequisites

### Local Development
- Git installed on your system
- Any HTTP server for local testing (Python, Node.js, etc.)

### Production Deployment
- Access to the web server at `/var/www/html/`
- Git configured with GitHub credentials
- Bash shell environment
- rsync utility installed

## Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/josefresco/josefresco.github.io.git
cd josefresco.github.io
```

### 2. Local Development Server

Start a local HTTP server to preview changes:

**Using Python 3:**
```bash
python -m http.server
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer
```

**Using Node.js (http-server):**
```bash
npx http-server
```

The website will be available at `http://localhost:8000` (or the port specified by your server).

## Deployment Process

### Method 1: Automated Deployment (Recommended)

The `website-sync.sh` script automates the deployment process by syncing files between the web server and GitHub.

#### How It Works

1. Syncs website files from `/var/www/html/` to the GitHub repository
2. Excludes the `admin/` directory (Pi-hole admin interface)
3. Detects changes and commits them automatically
4. Pushes changes to GitHub
5. Pulls any remote changes back to the local web server

#### Running the Sync Script

```bash
./website-sync.sh
```

The script will:
- Remove old website files from the repository
- Copy current files from `/var/www/html/` using rsync
- Check for changes using git diff
- Stage and commit changes with auto-generated message
- Push to GitHub master branch
- Pull any remote updates back to `/var/www/html/`

#### Automation with Cron

To automatically sync on a schedule, add to crontab:

```bash
# Edit crontab
crontab -e

# Add this line to sync every day at 5 PM
0 17 * * * /home/josefresco/github/josefresco.github.io/website-sync.sh >> /home/josefresco/github/josefresco.github.io/website-sync.log 2>&1
```

### Method 2: Manual Deployment

#### Deploy to Web Server

1. **Edit files locally** in your cloned repository
2. **Test changes** using a local HTTP server
3. **Copy files to web server:**

```bash
# Copy all website files to /var/www/html/
sudo rsync -av --exclude='.git' --exclude='*.md' --exclude='*.sh' --exclude='*.log' ./ /var/www/html/
```

#### Deploy to GitHub

1. **Stage changes:**
```bash
git add .
```

2. **Commit changes:**
```bash
git commit -m "Description of changes"
```

3. **Push to GitHub:**
```bash
git push origin master
```

## Deployment Targets

### Primary Target: Web Server
- **Location**: `/var/www/html/`
- **Purpose**: Production website hosting
- **Access**: Direct file system access required

### Secondary Target: GitHub Pages (Optional)
The repository is configured as a GitHub Pages site and can serve content directly from GitHub:
- **URL**: https://josefresco.github.io
- **Branch**: master
- **Configuration**: Enable GitHub Pages in repository settings

## File Structure

```
josefresco.github.io/
├── index.html              # Main landing page
├── style.css               # Global styles
├── script.js               # JavaScript functionality
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for SEO
├── blog/                   # Blog posts directory
│   ├── index.html          # Blog listing page
│   └── *.html              # Individual blog posts
├── css/                    # Additional CSS files
├── admin/                  # Pi-hole admin (excluded from sync)
├── website-sync.sh         # Automated deployment script
├── update_content_for_ai.sh # AI optimization checklist
├── README.md               # Project overview
├── PROCESS.md              # Content management guide
├── DEPLOYMENT.md           # This file
├── CONTRIBUTING.md         # Contribution guidelines
└── CHANGELOG.md            # Version history
```

## Content Management

### Adding New Blog Posts

1. Create a new HTML file in `blog/` directory
2. Use the template from PROCESS.md
3. Run AI optimization checklist:
```bash
./update_content_for_ai.sh
```
4. Add blog post to `blog/index.html`
5. Deploy using one of the methods above

See PROCESS.md for detailed instructions.

### Adding New Projects

1. Edit `index.html`
2. Add a new project card in the projects section
3. Deploy changes

See PROCESS.md for detailed instructions.

## Rollback Procedure

If a deployment causes issues:

### Rollback Web Server Files

```bash
# Find the commit to rollback to
git log --oneline

# Checkout the previous working version
git checkout <commit-hash>

# Copy to web server
sudo rsync -av --exclude='.git' ./ /var/www/html/

# Return to master
git checkout master
```

### Revert Git Commit

```bash
# Revert the last commit
git revert HEAD

# Push the revert
git push origin master
```

## Troubleshooting

### Sync Script Issues

**Problem**: Changes not detected
```bash
# Check git status manually
git status

# Check for uncommitted changes
git diff
```

**Problem**: Permission errors
```bash
# Ensure script is executable
chmod +x website-sync.sh

# Check rsync permissions
ls -la /var/www/html/
```

**Problem**: Push fails
```bash
# Check remote connection
git remote -v

# Pull latest changes first
git pull origin master

# Then push
git push origin master
```

### Local Development Issues

**Problem**: Port already in use
```bash
# Use a different port
python -m http.server 8080
```

**Problem**: Changes not reflecting
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Restart local server

## Security Considerations

1. **Sensitive Files**: Never commit sensitive files (.env, credentials, etc.)
2. **Admin Directory**: The `admin/` directory is excluded from sync to protect Pi-hole configuration
3. **File Permissions**: Ensure web server files have appropriate permissions (644 for files, 755 for directories)
4. **GitHub Credentials**: Use SSH keys or personal access tokens for authentication

## Related Documentation

- **README.md**: Project overview and features
- **PROCESS.md**: Content management workflows
- **CONTRIBUTING.md**: Contribution guidelines
- **AI_OPTIMIZATION_INSTRUCTIONS.md**: AI content optimization guide

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the logs in `website-sync.log`
3. Submit an issue on GitHub: https://github.com/josefresco/josefresco.github.io/issues
