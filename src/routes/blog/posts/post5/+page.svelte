<!-- blog/posts/post5/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Configuring Timeout and Concurrency Settings | Markdown Link Checker Blog</title>
  <meta name="description" content="Learn how to optimize validation speed and reliability by adjusting timeout thresholds and concurrent request limits for different network conditions and document sizes." />
  <meta property="og:title" content="Configuring Timeout and Concurrency Settings | Markdown Link Checker Blog" />
  <meta property="og:description" content="Learn how to optimize validation speed and reliability by adjusting timeout thresholds and concurrent request limits for different network conditions and document sizes." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout" style="padding-top: 80px;">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Configuring Timeout and Concurrency Settings</p>
  </div>

  <article class="prose">
    <h1>Configuring Timeout and Concurrency Settings</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>Performance and reliability during link validation depend heavily on network conditions and document size. The Markdown Link Checker provides two key configuration options—timeout and concurrency—to help you balance speed, accuracy, and browser resource usage.</p>
   
    <p>These settings appear in the configuration panel and update dynamically without page reloads.</p>
   
    <h2>Understanding Timeout</h2>
    <p>The timeout value specifies how long each link check waits for a server response before giving up. Measured in milliseconds, the default sits at a reasonable middle ground, but you may need adjustment based on your environment.</p>
   
    <p>Slow or distant servers benefit from higher timeouts to avoid false positives. Fast local networks or strict workflows prefer lower values to fail unresponsive links quickly. Extremely high settings risk long hangs if many links are dead.</p>
   
    <h2>Concurrency Limit</h2>
    <p>Concurrency controls how many link checks run simultaneously. The default of five parallel requests works well for most users, delivering quick results without overwhelming browser or network resources.</p>
   
    <p>Increasing concurrency speeds up validation for documents with hundreds of links, especially on powerful machines with good bandwidth. However, too many simultaneous requests can trigger rate limiting from servers, exhaust memory, or slow down other browser tabs.</p>
   
    <p>Lower values prove useful on slower connections, mobile devices, or when checking many links to the same domain that might impose rate limits.</p>
   
    <h2>Finding the Right Balance</h2>
    <p>Start with defaults for typical use. For large documentation sets on fast connections, try raising concurrency to ten or fifteen. When dealing with flaky networks, extend timeout to ten seconds and reduce concurrency to three.</p>
   
    <p>The real-time progress indicator helps you observe how changes affect overall validation time. Experiment freely—settings persist only for the current session and never affect privacy.</p>
   
    <h2>Practical Scenarios</h2>
    <p>Checking internal documentation behind corporate firewalls often requires longer timeouts. Validating public open-source projects with many external references benefits from higher concurrency. Pre-publish checks on laptops favor conservative settings to avoid browser strain.</p>
   
    <p>These controls put you in charge of the validation experience, adapting the tool to your specific workflow and constraints.</p>
   
    <p>Tuning timeout and concurrency transforms good results into optimal ones tailored to your needs.</p>
   
    <p class="italic-note">Fine-tune settings for faster, more reliable link checks every time.</p>
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