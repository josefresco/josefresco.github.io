#!/bin/bash

# Website GitHub Sync Script
# Syncs website files from /var/www/html to GitHub, excluding Pi-hole admin
# Created by Claude Code

cd /home/josefresco/github/josefresco.github.io

echo "$(date): Starting website sync..."

# Remove existing website files (but preserve non-website files)
rm -f *.html *.css *.js *.txt *.xml
rm -rf blog/

# Copy website files, excluding admin (Pi-hole)
rsync -av --exclude='admin/' /var/www/html/ . --exclude='.*' --exclude='README.md' --exclude='.gitignore' --exclude='website-sync.sh'

# Check if there are any changes to website files
if git diff --quiet HEAD -- *.html *.css *.js *.txt *.xml blog/ 2>/dev/null; then
    echo "$(date): No changes detected, skipping sync"
    exit 0
fi

# Add changes to git
git add *.html *.css *.js *.txt *.xml blog/ 2>/dev/null

# Check if there are staged changes
if git diff --cached --quiet; then
    echo "$(date): No staged changes, skipping commit"
    exit 0
fi

# Commit changes
git commit -m "Auto-sync website updates $(date '+%Y-%m-%d %H:%M:%S')

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub
if git push origin master; then
    echo "$(date): Website successfully synced to GitHub"
else
    echo "$(date): Error pushing to GitHub"
    exit 1
fi

# Optional: Pull any remote changes (if you edit files on GitHub)
echo "$(date): Checking for remote updates..."
git fetch origin
if ! git diff --quiet HEAD origin/master; then
    echo "$(date): Remote changes detected, pulling updates..."
    git pull origin master --no-rebase
    
    # Update local website files with any changes from GitHub
    echo "$(date): Updating local website files..."
    rsync -av *.html *.css *.js *.txt *.xml /var/www/html/ 2>/dev/null || true
    rsync -av blog/ /var/www/html/blog/ 2>/dev/null || true
    echo "$(date): Local website updated from GitHub"
else
    echo "$(date): No remote changes detected"
fi

echo "$(date): Sync complete"