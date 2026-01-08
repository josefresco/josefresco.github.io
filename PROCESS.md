# Content Management Process

This document outlines the process for adding new blog posts and projects to the josefresco.github.io website.

## Adding a New Blog Post

To add a new blog post, follow these steps:

1.  **Create a new HTML file:** In the `blog/` directory, create a new HTML file for your blog post. The filename should be a slug of the blog post title (e.g., `my-new-blog-post.html`).

2.  **Add the HTML boilerplate:** Copy the following HTML boilerplate into the new file:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>YOUR BLOG POST TITLE</title>
        <meta name="description" content="YOUR BLOG POST DESCRIPTION">
        <link rel="stylesheet" href="../style.css">
    </head>
    <body>
        <header class="header">
            <!-- Add header content here -->
        </header>

        <main>
            <article class="blog-post">
                <header class="blog-post-header">
                    <h1 class="blog-post-title">YOUR BLOG POST TITLE</h1>
                    <p class="blog-post-meta">Published on <time datetime="YYYY-MM-DD">Month DD, YYYY</time></p>
                </header>

                <div class="blog-post-content">
                    <!-- Your blog post content goes here -->
                </div>
            </article>
        </main>

        <footer class="footer">
            <!-- Add footer content here -->
        </footer>
    </body>
    </html>
    ```

3.  **Update the content:**
    *   Replace `YOUR BLOG POST TITLE` with the actual title of your blog post.
    *   Replace `YOUR BLOG POST DESCRIPTION` with a meta description for your blog post.
    *   Update the `<time>` tag with the correct publication date.
    *   Add your blog post content to the `<div class="blog-post-content">` section.

4.  **AI Optimization:** Before publishing, run the `update_content_for_ai.sh` script and ensure your blog post meets all the criteria:

    ```bash
    ./update_content_for_ai.sh
    ```

    This will display a checklist of AI optimization tasks to complete for your blog post.

5.  **Add to the blog index:** Open `blog/index.html` and add a new blog card for your new post. Copy an existing `<article class="blog-card">` and update the content to link to your new blog post.

6.  **Deploy:** Once you are happy with your new blog post, use the `website-sync.sh` script to deploy the changes.

## Adding a New Project

To add a new project to the portfolio, follow these steps:

1.  **Open `index.html`:** Open the `index.html` file in the root of the repository.

2.  **Find the projects section:** Locate the `<section id="projects" class="projects">` section.

3.  **Add a new project card:** Copy an existing `<article class="project-card">` and update the content with the details of your new project. Make sure to update the following:
    *   `project-title`
    *   `project-description`
    *   `project-features`
    *   `project-tech`
    *   `project-links`

4.  **Deploy:** Once you are happy with the new project, use the `website-sync.sh` script to deploy the changes.
