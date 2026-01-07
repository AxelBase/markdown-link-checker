<!-- blog/posts/post7/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Validating Relative Paths and Anchor Links | Markdown Link Checker Blog</title>
  <meta name="description" content="Learn how to use the virtual file tree to accurately validate relative links and in-page anchors within multi-file Markdown projects." />
  <meta property="og:title" content="Validating Relative Paths and Anchor Links | Markdown Link Checker Blog" />
  <meta property="og:description" content="Learn how to use the virtual file tree to accurately validate relative links and in-page anchors within multi-file Markdown projects." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout" style="padding-top: 80px;">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Validating Relative Paths and Anchor Links</p>
  </div>

  <article class="prose">
    <h1>Validating Relative Paths and Anchor Links</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>External HTTP links are straightforward to check, but relative paths and in-page anchors common in multi-file documentation projects require special handling. The Markdown Link Checker includes a virtual file tree feature that enables accurate validation of these internal references entirely in the browser.</p>
   
    <p>Relative links like ./images/logo.png or ../guide/install.md rely on project structure. Anchor links such as #installation point to headings within the same or linked documents. Without context, these appear broken during simple validation.</p>
   
    <h2>The Virtual File Tree</h2>
    <p>Available in the configuration panel, the virtual file tree accepts a simple text representation of your project directory. List files and folders using standard indentation or JSON-like syntax to mirror actual paths.</p>
   
    <p>Once defined, the tool resolves relative paths against this structure. Missing files or incorrect paths receive Broken status with clear indications, while valid ones mark as Valid.</p>
   
    <h2>Anchor Link Validation</h2>
    <p>In-page anchors are checked automatically against headings extracted from the current document. Links to #non-existent-section flag as broken, helping catch typos early.</p>
   
    <p>When combined with the virtual tree, cross-document anchors like other-file.md#setup resolve properly if the target file exists in the defined structure and contains the heading.</p>
   
    <h2>Setting Up the Tree</h2>
    <p>Start with a basic list of your main Markdown files and key folders. For small sites, a flat list suffices. Larger documentation benefits from nested representation showing subdirectories.</p>
   
    <p>The format is flexible and forgiving—focus on accurate relative paths from your entry file. Update the tree as your project grows or restructures.</p>
   
    <h2>Benefits for Projects</h2>
    <p>Static site generators like Jekyll, Hugo, or MkDocs produce complex relative link networks. Validating these locally before build catches issues early.</p>
   
    <p>Open-source repositories with extensive docs folders gain confidence that internal navigation works across branches. Technical writers working on book-style guides ensure chapter links remain intact.</p>
   
    <h2>Limitations and Tips</h2>
    <p>The virtual tree is client-side only and session-based—no data leaves your browser. For very large projects, include only relevant subsections to keep input manageable.</p>
   
    <p>Combine with ignore patterns for assets like images if you prefer to focus solely on Markdown navigation.</p>
   
    <p>Enabling full internal validation transforms the tool from external checker to complete project auditor.</p>
   
    <p>Accurate relative and anchor validation keeps complex documentation reliable and user-friendly.</p>
   
    <p class="italic-note">Build confidence in your internal links with the virtual file tree.</p>
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