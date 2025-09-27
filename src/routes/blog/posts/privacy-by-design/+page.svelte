<script>
  import { base } from '$app/paths';
</script>

<br/>

<svelte:head>
  <title>Privacy by Design: What We Collect (and What We Don’t) | AxelBase</title>
  <meta name="description" content="Break down our privacy policy in plain language—what data is processed, what’s ignored, and what’s never stored." />

  <meta property="og:title" content="Privacy by Design: What We Collect (and What We Don’t) | AxelBase" />
  <meta property="og:description" content="Break down our privacy policy in plain language—what data is processed, what’s ignored, and what’s never stored." />
  <meta property="og:url" content={base + '/blog/posts/privacy-by-design'} />
  <meta property="og:type" content="article" />
  <!-- <meta property="og:image" content={base + '/og/privacy-by-design.png'} /> -->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Privacy by Design: What We Collect (and What We Don’t) | AxelBase" />
  <meta name="twitter:description" content="Break down our privacy policy in plain language—what data is processed, what’s ignored, and what’s never stored." />
  <!-- <meta name="twitter:image" content={base + '/og/privacy-by-design.png'} /> -->

</svelte:head>

<article class="w-full max-w-3xl mx-auto p-4 sm:p-8 prose prose-invert prose-headings:text-yellow-400 prose-a:text-yellow-400">
  <h1>Privacy by Design: What We Collect (and What We Don’t)</h1>

  <p class="text-slate-300">Published: September 26, 2025 | Last Updated: September 26, 2025</p>

  <p>Privacy isn’t a feature—it’s a foundation. The <a href="{base}/" class="hover:underline">Markdown Link Checker</a> was built from the ground up to respect user autonomy, minimize data exposure, and eliminate hidden behavior. This post outlines exactly what the tool does and doesn’t collect, and why that matters for compliance-conscious users.</p>

  <h2>What We Collect</h2>
  <p>The tool processes only what’s necessary to validate links:</p>
  <ul class="list-disc pl-6 text-slate-300">
    <li>Markdown content you paste or upload</li>
    <li>URLs extracted from that content</li>
    <li>File names (for display and export)</li>
    <li>Basic technical data (e.g., browser type) for performance monitoring</li>
  </ul>
  <p>No personal identifiers are required or requested. You can use the tool anonymously and offline.</p>

  <h2>What We Don’t Collect</h2>
  <ul class="list-disc pl-6 text-slate-300">
    <li>No names, emails, or login credentials</li>
    <li>No behavioral tracking or analytics</li>
    <li>No server-side storage of your content</li>
    <li>No cookies beyond essential session handling (if any)</li>
  </ul>
  <p>Everything runs client-side. Your data stays in your browser and disappears when you close the tab.</p>

  <h3>Why It Matters</h3>
  <p>Many link validators rely on cloud infrastructure, logging your content and behavior for analytics or monetization. This tool takes the opposite approach: <em>stateless, transparent, and respectful of your boundaries</em>. It’s ideal for teams working under GDPR, CCPA, POPIA, or internal privacy policies.</p>

  <h2>FAQ</h2>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Is my content uploaded anywhere?</summary>
    <p class="text-slate-300 pl-4">No. All processing happens locally in your browser. Nothing is sent to a server.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Do you use cookies?</summary>
    <p class="text-slate-300 pl-4">Only if essential for session handling. No tracking or profiling cookies are used.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Can I request data deletion?</summary>
    <p class="text-slate-300 pl-4">There’s nothing to delete—your data is never stored.</p>
  </details>

  <p class="text-slate-400 italic mt-8">This post will be updated with compliance updates and community feedback on privacy features.</p>
</article>
