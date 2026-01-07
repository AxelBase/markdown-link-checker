<!-- blog/posts/post4/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding Validation Results and Status Categories | Markdown Link Checker Blog</title>
  <meta name="description" content="Learn how to interpret Valid, Broken, Redirected, Skipped, and Ignored link statuses, including line numbers, final URLs, and actionable insights." />
  <meta property="og:title" content="Understanding Validation Results and Status Categories | Markdown Link Checker Blog" />
  <meta property="og:description" content="Learn how to interpret Valid, Broken, Redirected, Skipped, and Ignored link statuses, including line numbers, final URLs, and actionable insights." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout" style="padding-top: 80px;">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding Validation Results and Status Categories</p>
  </div>

  <article class="prose">
    <h1>Understanding Validation Results and Status Categories</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>After running a validation, the Markdown Link Checker presents results in a clear, interactive table. Understanding each status category and column helps you quickly assess document health and prioritize fixes.</p>
   
    <p>The table automatically groups entries by status while allowing flexible sorting, filtering, and searching. Color coding and detailed information make issues stand out immediately.</p>
   
    <h2>Status Categories Explained</h2>
    <p>Valid links return HTTP status codes in the 200–299 range and appear in green. These require no action and confirm working external resources or correctly resolved internal references.</p>
   
    <p>Broken links show red highlighting and include any response code 400 or higher, network errors, timeouts, or unreachable hosts. These definitely need attention as they will frustrate readers.</p>
   
    <p>Redirected entries appear in amber. The tool followed one or more redirects and reports both original and final URLs. While technically functional, updating to the canonical URL improves performance and clarity.</p>
   
    <p>Skipped status covers links the tool could not fully validate, often due to browser security restrictions like CORS on HEAD requests. These may still work when clicked by users.</p>
   
    <p>Ignored links match user-defined patterns and are excluded from active checking. They appear grayed out for reference but do not affect overall validation outcome.</p>
   
    <h2>Key Table Columns</h2>
    <p>The Text column shows visible link text exactly as written in your Markdown. URL displays the resolved address after redirect following when applicable. Line number pinpoints the exact location in source for quick navigation in your editor.</p>
   
    <p>Status Code shows the final HTTP response, helping diagnose issues like 404 Not Found, 403 Forbidden, or 500 Internal Server Error.</p>
   
    <h2>Using Filters and Search</h2>
    <p>Dropdown filters let you isolate specific categories instantly. The search bar matches across link text and URLs, perfect for finding references to a particular domain or phrase.</p>
   
    <p>Sorting by any column—especially line number—helps process issues sequentially through your document.</p>
   
    <h2>Taking Action</h2>
    <p>Focus first on Broken links, then review Redirected ones for updates. Export results when sharing findings with team members or tracking fixes over time.</p>
   
    <p>Regular interpretation of these categories turns validation from a one-off task into an effective quality gate for all Markdown content.</p>
   
    <p>Mastering the results display ensures you extract maximum value from every validation run.</p>
   
    <p class="italic-note">Clear results lead to confident content maintenance.</p>
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