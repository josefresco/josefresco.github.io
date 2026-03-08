#!/bin/bash

# Image Optimization Script for josefresco.com
# Converts PNG images to WebP format for better compression

echo "🚀 Starting image optimization..."

# Navigate to blog images directory
cd "$(dirname "$0")/blog/images"

# Counter for statistics
converted=0
skipped=0

# Convert PNG files to WebP
for png in *.png; do
    if [ -f "$png" ]; then
        webp="${png%.png}.webp"
        
        # Skip if WebP already exists
        if [ -f "$webp" ]; then
            echo "⏭️  Skipping: $webp already exists"
            ((skipped++))
            continue
        fi
        
        # Convert with cwebp if available
        if command -v cwebp &> /dev/null; then
            cwebp -q 80 "$png" -o "$webp"
            echo "✅ Converted: $png → $webp"
            ((converted++))
        else
            echo "⚠️  cwebp not found. Install with: sudo apt install webp"
            echo "   Manual conversion: cwebp -q 80 image.png -o image.webp"
            break
        fi
    fi
done

echo ""
echo "📊 Summary:"
echo "   Converted: $converted images"
echo "   Skipped: $skipped images"
echo ""
echo "💡 Tip: Add lazy loading to images:"
echo '   <img src="image.webp" loading="lazy" alt="Description">'
