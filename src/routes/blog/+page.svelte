<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Introducing the Markdown Link Checker', description: 'An overview of this privacy-focused, client-side tool for validating links in Markdown documents without sending data to any server.' },
    { href: '/blog/posts/post2', title: 'How Link Validation Works in the Browser', description: 'A deep dive into client-side HTTP requests, HEAD vs. fetch, handling redirects, and classifying link status codes.' },
    { href: '/blog/posts/post3', title: 'Getting Started: Your First Link Check', description: 'Step-by-step guide to uploading Markdown files, pasting content, and running your initial validation.' },
    { href: '/blog/posts/post4', title: 'Understanding Validation Results and Status Categories', description: 'Explaining Valid, Broken, Redirected, Skipped, and Ignored links, including line numbers and final URLs.' },
    { href: '/blog/posts/post5', title: 'Configuring Timeout and Concurrency Settings', description: 'How to adjust request timeouts and parallel checks for optimal performance on large documents.' },
    { href: '/blog/posts/post6', title: 'Ignoring Domains and Using Ignore Patterns', description: 'Best practices for skipping localhost, staging environments, or specific patterns during validation.' },
    { href: '/blog/posts/post7', title: 'Validating Relative Paths and Anchor Links', description: 'Using the virtual file tree feature to check internal project links and in-page anchors accurately.' },
    { href: '/blog/posts/post8', title: 'Exporting Reports: TXT, JSON, and Clipboard Options', description: 'How to save detailed validation reports for documentation, audits, or team sharing.' },
    { href: '/blog/posts/post9', title: 'Filtering, Sorting, and Searching Results', description: 'Mastering the results table to quickly identify and focus on broken or redirected links.' },
    { href: '/blog/posts/post10', title: 'Best Practices for Maintaining Healthy Markdown Links', description: 'Tips for preventing broken links in documentation, static sites, and open-source projects over time.' },
  ];
</script>

<svelte:head>
  <title>Blog | Markdown Link Checker Insights</title>
  <meta name="description" content="Explore tutorials, guides, and best practices for using the client-side Markdown Link Checker tool." />
</svelte:head>

<div class="container fade-in blog-index" style="padding-top: 80px;">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Markdown Link Checker Insights</h1>
    <p class="subtitle">
      In-depth articles, tutorials, and tips on validating Markdown links with privacy and performance in mind. 
      Discover how to keep your documentation reliable using this fully client-side utility. 
      Check out the <a href="https://github.com/axelbase/markdown-link-checker" target="_blank" rel="noopener noreferrer">GitHub repository</a> for source and contributions.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-light); /* Brighter for better readability */
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--text-light); /* Much brighter primary text */
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-light); /* Brighter instead of secondary dim color */
    opacity: 0.95; /* Slight opacity for softness without being too dark */
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }

  /* Optional: make links in subtitle brighter too */
  .subtitle a {
    color: var(--accent);
  }

  .subtitle a:hover {
    text-decoration: underline;
  }
</style>