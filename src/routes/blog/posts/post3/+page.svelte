<!-- blog/posts/post3/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Getting Started: Your First Link Check | Markdown Link Checker Blog</title>
  <meta name="description" content="A beginner-friendly step-by-step guide to uploading Markdown files, pasting content, configuring options, and running your first validation with the Markdown Link Checker." />
  <meta property="og:title" content="Getting Started: Your First Link Check | Markdown Link Checker Blog" />
  <meta property="og:description" content="A beginner-friendly step-by-step guide to uploading Markdown files, pasting content, configuring options, and running your first validation with the Markdown Link Checker." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout" style="padding-top: 80px;">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Getting Started: Your First Link Check</p>
  </div>

  <article class="prose">
    <h1>Getting Started: Your First Link Check</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>Running your first link validation with the Markdown Link Checker takes only minutes. This guide walks you through every step from input to results, helping you become productive immediately.</p>
   
    <p>Begin by opening the tool in your browser. The clean interface features a prominent input area, configuration panel, and action buttons—no login or setup required.</p>
   
    <h2>Step 1: Provide Your Markdown Content</h2>
    <p>You have two easy options. Click the upload button to select one or multiple .md files from your device. Alternatively, paste raw Markdown text directly into the large textarea. The tool supports documents up to 1 MB and instantly verifies basic Markdown formatting, showing clear error messages if needed.</p>
   
    <h2>Step 2: Adjust Configuration (Optional)</h2>
    <p>Most users can proceed with defaults, but customization is available. Set request timeout in milliseconds to handle slow servers. Adjust concurrency limit for faster processing on powerful machines or lower values on slower connections. Add ignore patterns for domains like localhost or staging URLs you want to skip.</p>
   
    <p>Toggle external-only validation if you only care about HTTP links, or enable full checking for relative paths and anchors using the virtual file tree feature.</p>
   
    <h2>Step 3: Start Validation</h2>
    <p>Click the prominent Validate Links button. A processing indicator appears while the tool extracts links and begins checks. Progress updates in real time, showing completed versus total requests.</p>
   
    <p>For documents with many links, concurrent requests ensure quick completion without freezing your browser.</p>
   
    <h2>Step 4: Review Results</h2>
    <p>Once finished, results display in an interactive table grouped by status category. Columns include link text, URL, source line number, and status code. Sort any column by clicking headers, filter by status dropdowns, or search across text and URLs.</p>
   
    <p>Broken links appear in red for immediate attention. Redirected entries show both original and final URLs. Hover effects and clear color coding make scanning effortless.</p>
   
    <h2>Step 5: Export or Copy Findings</h2>
    <p>When ready, export the full report as structured JSON for programmatic use or plain TXT for readability. A dedicated clipboard button copies everything instantly for pasting into issues, emails, or notes.</p>
   
    <p>This complete workflow—from input to actionable output—requires no installation and works identically across modern browsers.</p>
   
    <p>After your first check, you will quickly spot patterns and incorporate validation into regular writing or review routines.</p>
   
    <p class="italic-note">Start validating today and experience frictionless link checking.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }
  .prose {
    line-height: 1.8;
  }
  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }
  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }
  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }
  .prose p {
    color: var(--text-primary);
  }
  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>