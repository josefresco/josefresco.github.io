# Content Management Guide for josefresco.com

**Last Updated:** March 15, 2026

---

## Quick Reference

| Task | File(s) to Update | Priority |
|------|-------------------|----------|
| Add new blog post | Create new file in `/blog/` + update `/blog/index.html` + update `index.html` + update `sitemap.xml` | High |
| Add new project | Create new file in `/projects/` + update `/projects/index.html` + update `sitemap.xml` | High |
| Update homepage blog | Update `index.html` featured blog section | High |
| Update sitemap | Update `sitemap.xml` | **High (SEO critical)** |
| Update service worker | Update `sw.js` | Medium |

---

## Adding a New Blog Post

### Step 1: Create the Blog Post File

1. Create new file in `/blog/` with descriptive slug:
   ```
   blog/your-post-name.html
   ```

2. Use this template (copy from existing post):
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Post Title - Jose Fresco</title>
       <meta name="description" content="Post description for SEO">
       <!-- Include all meta tags, Open Graph, Twitter Cards, Schema.org -->
   </head>
   <body>
       <!-- Include header with mobile menu -->
       <!-- Include main content with TLDR -->
       <!-- Include footer -->
   </body>
   </html>
   ```

3. Required elements:
   - ✅ TLDR summary (50-60 words)
   - ✅ Proper heading hierarchy (H1 → H2 → H3)
   - ✅ **Schema.org BlogPosting markup** (see Step 6 below)
   - ✅ Open Graph tags
   - ✅ Twitter Card tags
   - ✅ Mobile menu structure in header
   - ✅ Skip link for accessibility

### Step 2: Add Blog Post Image (Optional but Recommended)

1. Create SVG image in `/blog/images/`:
   ```
   blog/images/your-post-name.svg
   ```

2. Add image after TLDR in blog post:
   ```html
   <div class="blog-post-image">
       <picture>
           <source srcset="images/your-post-name.svg" type="image/svg+xml">
           <img src="images/your-post-name.svg" alt="Description" class="blog-hero-image">
       </picture>
   </div>
   ```

### Step 3: Update Blog Index (`/blog/index.html`)

1. Add new blog card at **top** of blog grid (after opening `<div class="blog-grid">`):
   ```html
   <article class="blog-card featured">
       <div class="blog-card-header">
           <div class="blog-meta">
               <span class="blog-category">Category</span>
               <span class="blog-date">Month Year</span>
           </div>
           <h2 class="blog-title">
               <a href="/blog/your-post-name.html">Post Title</a>
           </h2>
       </div>
       <div class="blog-card-image">
           <picture>
               <source srcset="images/your-post-name.svg" type="image/svg+xml">
               <img src="images/your-post-name.svg" alt="Description" class="blog-preview-image">
           </picture>
       </div>
       <p class="blog-excerpt">
           Brief excerpt from the post (2-3 sentences).
       </p>
       <div class="blog-tags">
           <span class="blog-tag">Tag 1</span>
           <span class="blog-tag">Tag 2</span>
       </div>
       <a href="/blog/your-post-name.html" class="blog-read-more">Read More →</a>
   </article>
   ```

### Step 4: Update Homepage (`/index.html`) ⚠️ CRITICAL

**This step is often forgotten!** The homepage has a "Latest Blog Post" section that must be manually updated.

1. Open `/index.html`

2. Find the "Latest Blog Post" section:
   ```html
   <section class="featured-blog">
   ```

3. Replace the existing blog card with the new post:
   ```html
   <article class="blog-card">
       <div class="blog-card-header">
           <div class="blog-meta">
               <span class="blog-category">Category</span>
               <span class="blog-date">Month Year</span>
           </div>
           <h3 class="blog-title">
               <a href="/blog/your-post-name.html">Post Title</a>
           </h3>
       </div>
       <p class="blog-excerpt">
           Brief excerpt (1-2 sentences).
       </p>
       <div class="blog-tags">
           <span class="blog-tag">Tag 1</span>
           <span class="blog-tag">Tag 2</span>
       </div>
       <a href="/blog/your-post-name.html" class="blog-read-more">Read More →</a>
   </article>
   ```

**Note:** The homepage shows only ONE blog post (the latest). Replace the entire card.

### Step 5: Update Sitemap ⚠️ CRITICAL FOR SEO

**This step is often forgotten!** Without sitemap updates, search engines may not discover your new post.

1. Open `/sitemap.xml`

2. Add new entry **before the closing `</urlset>` tag**:
   ```xml
   <url>
       <loc>https://josefresco.com/blog/your-post-name.html</loc>
       <lastmod>YYYY-MM-DD</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
   </url>
   ```

3. Example from Watch List post:
   ```xml
   <url>
       <loc>https://josefresco.com/blog/watch-list-pwa.html</loc>
       <lastmod>2026-03-15</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
   </url>
   ```

**Note:** Use the date you published the post for `<lastmod>`.

### Step 6: Verify Schema.org Tags ⚠️ CRITICAL FOR SEO

**Schema.org markup is required** for rich snippets in search results.

1. Open your new blog post file

2. Verify Schema.org JSON-LD exists in `<head>` section:
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "BlogPosting",
     "mainEntityOfPage": {
       "@type": "WebPage",
       "@id": "https://josefresco.com/blog/your-post-name.html"
     },
     "headline": "Your Post Title",
     "description": "Post description",
     "image": "https://josefresco.com/blog/images/your-post-name.svg",
     "author": {
       "@type": "Person",
       "name": "Jose Fresco",
       "url": "https://josefresco.com/"
     },
     "publisher": {
       "@type": "Person",
       "name": "Jose Fresco",
       "url": "https://josefresco.com/",
       "logo": {
         "@type": "ImageObject",
         "url": "https://josefresco.com/favicon.ico"
       }
     },
     "datePublished": "2026-03-15T00:00:00+00:00",
     "dateModified": "2026-03-15T00:00:00+00:00",
     "keywords": "Keyword1, Keyword2, Keyword3"
   }
   </script>
   ```

3. **Required fields:**
   - ✅ `@type`: Must be "BlogPosting"
   - ✅ `headline`: Your post title
   - ✅ `datePublished`: ISO 8601 format
   - ✅ `image`: URL to post image

4. **Test your schema:**
   - Google Rich Results Test: https://search.google.com/test/rich-results
   - Schema Validator: https://validator.schema.org/

### Step 7: Update Service Worker (Optional)

1. Open `/sw.js`

2. Add to `ASSETS_TO_CACHE` array:
   ```javascript
   '/blog/your-post-name.html'
   ```

### Step 8: Commit and Deploy

```bash
git add -A
git commit -m "Add new blog post: Your Post Title"
git push origin
```

---

## Adding a New Project

### Step 1: Create Project Landing Page

1. Create new file in `/projects/`:
   ```
   projects/your-project-name.html
   ```

2. Use existing project page as template (e.g., `projects/jf-notify.html`)

### Step 2: Update Projects Index (`/projects/index.html`)

1. Add new project card in appropriate position

2. Update schema.org structured data if needed

### Step 3: Update Sitemap

Add project page to `/sitemap.xml`

### Step 4: Commit and Deploy

---

## Updating the Homepage Featured Project

To change which project is featured on the homepage:

1. Open `/index.html`

2. Find "Featured Project" section:
   ```html
   <section class="featured-project">
   ```

3. Replace the project card with the desired project

---

## Common Mistakes to Avoid

### ❌ Forgetting to Update Homepage

**Problem:** New blog post published but homepage still shows old post

**Solution:** Always update `/index.html` featured blog section (Step 4 above)

---

### ❌ Missing Sitemap Entry

**Problem:** Search engines don't discover new post, poor SEO

**Solution:** Always add entry to `/sitemap.xml` (Step 5 above):
```xml
<url>
    <loc>https://josefresco.com/blog/your-post-name.html</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

---

### ❌ Missing Schema.org Tags

**Problem:** No rich snippets in search results, reduced click-through rate

**Solution:** Every blog post must have JSON-LD structured data:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Your Post Title",
  "datePublished": "2026-03-15T00:00:00+00:00",
  "image": "https://josefresco.com/blog/images/your-post-name.svg"
}
</script>
```

**Test with:** Google Rich Results Test

---

### ❌ Missing Skip Link

**Problem:** Accessibility issue - no skip navigation

**Solution:** Every page must have:
```html
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    ...
</body>
```

---

### ❌ Missing Main Content ID

**Problem:** Skip link doesn't work

**Solution:** Every page must have:
```html
<main id="main-content">
```

---

### ❌ No LinkedIn Link

**Problem:** User doesn't have LinkedIn account

**Solution:** Never add LinkedIn links. Only GitHub and email.

---

### ❌ Inconsistent Footer Links

**Problem:** Different pages have different footer links

**Solution:** All pages should have:
```html
<div class="footer-links">
    <a href="https://github.com/josefresco" target="_blank" rel="noopener">GitHub</a>
    <a href="/contact">Contact</a>
    <a href="/feed.xml">RSS Feed</a>
</div>
```

---

## Checklist for New Blog Posts

### Content
- [ ] Blog post file created with proper template
- [ ] TLDR summary included (50-60 words)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Mobile menu in header
- [ ] Skip link added
- [ ] Main content ID added

### SEO & Metadata
- [ ] **Schema.org BlogPosting markup** (JSON-LD in `<head>`)
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] **Sitemap.xml updated** ⚠️ **CRITICAL**

### Images (Optional)
- [ ] Blog post image created
- [ ] Blog image added to post

### Site Updates
- [ ] Blog index updated (`/blog/index.html`)
- [ ] **Homepage updated (`/index.html`)** ⚠️ **CRITICAL**
- [ ] Service worker updated (optional)

### Deployment
- [ ] Committed and pushed
- [ ] Verified live on site
- [ ] Tested schema with Google Rich Results Test

---

## Checklist for New Projects

### Content
- [ ] Project landing page created
- [ ] Projects index updated
- [ ] Schema.org markup updated

### SEO
- [ ] **Sitemap.xml updated** ⚠️ **CRITICAL**

### Deployment
- [ ] Service worker updated (optional)
- [ ] Committed and pushed

---

## File Structure Reference

```
josefresco.github.io/
├── index.html                    # Homepage - UPDATE when new blog post
├── blog/
│   ├── index.html                # Blog index - UPDATE when new post
│   └── your-post-name.html       # New post - CREATE
│   └── images/
│       └── your-post-name.svg    # Post image - CREATE (optional)
├── projects/
│   ├── index.html                # Projects index - UPDATE when new project
│   └── your-project-name.html    # New project - CREATE
├── sitemap.xml                   # UPDATE when new page
├── sw.js                         # UPDATE when new page (optional)
└── ...
```

---

## Testing After Deployment

After pushing changes, verify:

1. ✅ New blog post loads correctly
2. ✅ Homepage shows new blog post
3. ✅ Blog index shows new post at top
4. ✅ Skip link works on new page
5. ✅ Mobile menu works on new page
6. ✅ All links work (no 404s)
7. ✅ RSS feed includes new post (`/feed.xml`)

---

## Contact

For questions about content management:
- Email: josefresco@gmail.com
- GitHub: https://github.com/josefresco

---

**Last Updated:** March 15, 2026
