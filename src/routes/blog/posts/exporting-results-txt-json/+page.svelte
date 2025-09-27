<script>
  import { base } from '$app/paths';
</script>

<br/>

<svelte:head>
  <title>Exporting Results: TXT vs JSON | AxelBase</title>
  <meta name="description" content="Explain the difference between TXT and JSON exports—use cases, integration into CI, and frictionless local workflows." />

  <meta property="og:title" content="Exporting Results: TXT vs JSON | AxelBase" />
  <meta property="og:description" content="Explain the difference between TXT and JSON exports—use cases, integration into CI, and frictionless local workflows." />
  <meta property="og:url" content={base + '/blog/posts/exporting-results-txt-json'} />
  <meta property="og:type" content="article" />
  <!-- <meta property="og:image" content={base + '/og/exporting-results-txt-json.png'} /> -->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Exporting Results: TXT vs JSON | AxelBase" />
  <meta name="twitter:description" content="Explain the difference between TXT and JSON exports—use cases, integration into CI, and frictionless local workflows." />
  <!-- <meta name="twitter:image" content={base + '/og/exporting-results-txt-json.png'} /> -->

</svelte:head>

<article class="w-full max-w-3xl mx-auto p-4 sm:p-8 prose prose-invert prose-headings:text-yellow-400 prose-a:text-yellow-400">
  <h1>Exporting Results: TXT vs JSON</h1>
  
  <p class="text-slate-300">Published: September 26, 2025 | Last Updated: September 26, 2025</p>
  
  <p>Once your Markdown links are validated, you’ll want to act on the results. Our <a href="{base}/" class="hover:underline">Markdown Link Checker</a> lets you export findings in two formats—TXT and JSON—each suited to different workflows. Whether you're collaborating with editors or integrating into a CI pipeline, the export options are designed to be flexible and frictionless.</p>
  
  <h2>TXT Format</h2>
  <p>TXT exports are simple and human-readable. Each line includes the link text, URL, status, and optional notes. This format is ideal for manual review, editorial checklists, or quick sharing in chat threads and bug reports.</p>
  
  <h2>JSON Format</h2>
  <p>JSON exports are structured and machine-readable. They include full metadata for each link—text, URL, line number, status, and category. This format is perfect for automation, audits, or integration into static site generators and CI workflows.</p>
  
  <h3>Use Cases</h3>
  <ul class="list-disc pl-6 text-slate-300">
    <li><strong>TXT:</strong> Editorial review, manual fixes, team feedback</li>
    <li><strong>JSON:</strong> Programmatic ingestion, dashboards, automated reporting</li>
    <li><strong>Clipboard:</strong> Quick copy-paste into GitHub issues or Slack threads</li>
  </ul>
  
  <h2>Export Workflow</h2>
  <p>After validation, use the export buttons to download your results. You can also copy them to your clipboard with a single click. No data is stored or transmitted—everything is generated locally in your browser.</p>
  
  <h2>FAQ</h2>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Can I export both formats?</summary>
    <p class="text-slate-300 pl-4">Yes. You can download TXT and JSON independently, depending on your workflow.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Is the export stored anywhere?</summary>
    <p class="text-slate-300 pl-4">No. All exports are generated client-side and never sent to a server.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Can I customize the export?</summary>
    <p class="text-slate-300 pl-4">Not yet—but future versions may support column selection, filtering, or custom formatting.</p>
  </details>
  
  <p class="text-slate-400 italic mt-8">This post will be updated with export automation tips and integration examples.</p>
</article>
