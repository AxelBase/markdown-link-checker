<script>
  import { base } from '$app/paths';
</script>

<br/>

<svelte:head>
  <title>From Paste to Precision: How Link Validation Works | AxelBase</title>
  <meta name="description" content="Walk through the validation process step-by-step, showing how raw Markdown becomes a clean, actionable report in-browser." />

  <meta property="og:title" content="From Paste to Precision: How Link Validation Works | AxelBase" />
  <meta property="og:description" content="Walk through the validation process step-by-step, showing how raw Markdown becomes a clean, actionable report in-browser." />
  <meta property="og:url" content={base + '/blog/posts/how-link-validation-works'} />
  <meta property="og:type" content="article" />
  <!-- <meta property="og:image" content={base + '/og/how-link-validation-works.png'} /> -->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="From Paste to Precision: How Link Validation Works | AxelBase" />
  <meta name="twitter:description" content="Walk through the validation process step-by-step, showing how raw Markdown becomes a clean, actionable report in-browser." />
  <!-- <meta name="twitter:image" content={base + '/og/how-link-validation-works.png'} /> -->

</svelte:head>

<article class="w-full max-w-3xl mx-auto p-4 sm:p-8 prose prose-invert prose-headings:text-yellow-400 prose-a:text-yellow-400">
  <h1>What Counts as a Valid Link?</h1>
  
  <p class="text-slate-300">Published: September 26, 2025 | Last Updated: September 26, 2025</p>
  
  <p>Not all links are created equal. Our <a href="{base}/" class="hover:underline">Markdown Link Checker</a> uses clear rules to determine validity—so you can trust the results and fix what matters.</p>
  
  <h2>Link Types We Check</h2>
  <ul class="list-disc pl-6 text-slate-300">
    <li>HTTP/HTTPS URLs</li>
    <li>Relative paths</li>
    <li>Anchor links (e.g., <code>#section</code>)</li>
    <li>Reference-style links</li>
  </ul>
  
  <h3>Skipped or Ignored Links</h3>
  <p>Mailto links, localhost references, and custom schemes are skipped by default. You can override this with configuration settings.</p>
  
  <h2>FAQ</h2>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Are redirects considered valid?</summary>
    <p class="text-slate-300 pl-4">Yes, but they’re flagged separately so you can decide whether to update them.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Can I ignore certain domains?</summary>
    <p class="text-slate-300 pl-4">Yes. Use the ignore pattern field to exclude domains or paths.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">What about anchor links?</summary>
    <p class="text-slate-300 pl-4">We check anchor syntax but can’t verify target existence unless a virtual tree is defined.</p>
  </details>
  
  <p class="text-slate-400 italic mt-8">This post will be updated with edge case handling and link type expansions.</p>
</article>
