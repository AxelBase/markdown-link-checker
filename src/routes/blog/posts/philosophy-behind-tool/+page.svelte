<script>
  import { base } from '$app/paths';
</script>

<br/>

<svelte:head>
  <title>The Philosophy Behind the Tool | AxelBase</title>
  <meta name="description" content="Share the origin story and design principles—why autonomy, transparency, and reproducibility are baked into every decision." />

  <meta property="og:title" content="The Philosophy Behind the Tool | AxelBase" />
  <meta property="og:description" content="Share the origin story and design principles—why autonomy, transparency, and reproducibility are baked into every decision." />
  <meta property="og:url" content={base + '/blog/posts/philosophy-behind-tool'} />
  <meta property="og:type" content="article" />
  <!-- <meta property="og:image" content={base + '/og/philosophy-behind-tool.png'} /> -->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="The Philosophy Behind the Tool | AxelBase" />
  <meta name="twitter:description" content="Share the origin story and design principles—why autonomy, transparency, and reproducibility are baked into every decision." />
  <!-- <meta name="twitter:image" content={base + '/og/philosophy-behind-tool.png'} /> -->

</svelte:head>

<article class="w-full max-w-3xl mx-auto p-4 sm:p-8 prose prose-invert prose-headings:text-yellow-400 prose-a:text-yellow-400">
  <h1>The Philosophy Behind the Tool</h1>

  <p class="text-slate-300">Published: September 26, 2025 | Last Updated: September 26, 2025</p>

  <p>This isn’t just a link checker—it’s a statement. The <a href="{base}/" class="hover:underline">Markdown Link Checker</a> was built for users who value autonomy, transparency, and reproducibility. It’s designed to serve writers, educators, and compliance professionals who distrust opaque systems and prefer tools that do one thing well—without compromise.</p>

  <h2>Design Principles</h2>
  <ul class="list-disc pl-6 text-slate-300">
    <li><strong>Privacy-first:</strong> No tracking, no uploads, no hidden analytics</li>
    <li><strong>Stateless:</strong> Everything runs in-browser, with no persistent storage</li>
    <li><strong>Modular:</strong> Each feature is independently testable and documented</li>
    <li><strong>Accessible:</strong> Built with semantic HTML, keyboard navigation, and high contrast</li>
    <li><strong>Transparent:</strong> Open-source and auditable by anyone</li>
  </ul>

  <h3>Why We Built It</h3>
  <p>Most link validators are cloud-bound, slow, or invasive. This tool was born out of frustration with those limitations—and a desire to empower users with something fast, local, and trustworthy. It’s part of a broader mission to create privacy-first utilities that respect user intent and minimize friction.</p>

  <h2>FAQ</h2>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Is this tool part of a larger suite?</summary>
    <p class="text-slate-300 pl-4">Yes. It’s one of several privacy-first tools under the AxelBase banner, designed for clarity and autonomy.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Can I contribute to the project?</summary>
    <p class="text-slate-300 pl-4">Absolutely. Visit our <a href="https://github.com/axelbase" class="hover:underline">GitHub repo</a> to fork, audit, or suggest improvements.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Why avoid AI-based link checkers?</summary>
    <p class="text-slate-300 pl-4">AI tools often rely on server-side inference and opaque models. We prefer rule-based clarity and local control.</p>
  </details>

  <p class="text-slate-400 italic mt-8">This post will be updated with community feedback and design evolution notes.</p>
</article>
