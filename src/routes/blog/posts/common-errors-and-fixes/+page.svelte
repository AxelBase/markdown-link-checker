<script>
  import { base } from '$app/paths';
</script>

<br/>

<svelte:head>
  <title>Common Errors and How to Fix Them | AxelBase</title>
  <meta name="description" content="List typical validation errors—404s, timeouts, malformed markdown—and learn effective strategies to troubleshoot them." />

  <meta property="og:title" content="Common Errors and How to Fix Them | AxelBase" />
  <meta property="og:description" content="List typical validation errors—404s, timeouts, malformed markdown—and learn effective strategies to troubleshoot them." />
  <meta property="og:url" content={base + '/blog/posts/common-errors-and-fixes'} />
  <meta property="og:type" content="article" />
  <!-- <meta property="og:image" content={base + '/og/common-errors-and-fixes.png'} /> -->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Common Errors and How to Fix Them | AxelBase" />
  <meta name="twitter:description" content="List typical validation errors—404s, timeouts, malformed markdown—and learn effective strategies to troubleshoot them." />
  <!-- <meta name="twitter:image" content={base + '/og/common-errors-and-fixes.png'} /> -->

</svelte:head>

<article class="w-full max-w-3xl mx-auto p-4 sm:p-8 prose prose-invert prose-headings:text-yellow-400 prose-a:text-yellow-400">
  <h1>Common Errors and How to Fix Them</h1>

  <p class="text-slate-300">Published: September 26, 2025 | Last Updated: September 26, 2025</p>

  <p>Not every link failure is a mystery. The <a href="{base}/" class="hover:underline">Markdown Link Checker</a> flags common issues with clarity—so you can fix them fast and publish with confidence. This post outlines typical errors, what they mean, and how to resolve them.</p>

  <h2>Typical Errors</h2>
  <ul class="list-disc pl-6 text-slate-300">
    <li><strong>404 Not Found:</strong> The URL points to a page that doesn’t exist</li>
    <li><strong>Timeout:</strong> The server didn’t respond within the configured time</li>
    <li><strong>Redirect Loop:</strong> The link keeps bouncing between endpoints</li>
    <li><strong>Malformed Markdown:</strong> Incorrect syntax prevents link parsing</li>
    <li><strong>Invalid Relative Path:</strong> The file or anchor target doesn’t exist</li>
  </ul>

  <h3>Fix Strategies</h3>
  <p>Use the line number and link text to locate the issue. Check for typos, outdated URLs, or missing anchors. Use ignore patterns for known exceptions. For redirects, consider updating to the final destination.</p>

  <h2>FAQ</h2>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">What does “Skipped” mean?</summary>
    <p class="text-slate-300 pl-4">The link type isn’t validated (e.g., mailto or localhost). You can override this in settings.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Why do some links time out?</summary>
    <p class="text-slate-300 pl-4">The server may be slow or unreachable. Increase the timeout or retry later.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Can I ignore certain errors?</summary>
    <p class="text-slate-300 pl-4">Yes. Use the ignore pattern field to exclude known problematic links from validation.</p>
  </details>

  <p class="text-slate-400 italic mt-8">This post will be updated with error case studies and resolution workflows.</p>
</article>
