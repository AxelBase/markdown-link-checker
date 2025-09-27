<script>
  import { base } from '$app/paths';
</script>

<br/>

<div class="w-full flex flex-col items-center gap-8 p-4 sm:p-8 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#2a3550]">
  <h1 class="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-6 animate-fade-in">
    Blog: Markdown Link Checker Insights
  </h1>
  
  <p class="text-slate-300 text-lg mb-8 text-left max-w-2xl leading-relaxed">
    Dive into cornerstone articles on privacy-first Markdown link validation—built for writers, educators, and compliance-focused developers. Explore rule-based workflows, reproducible strategies, and connections to our <a href="{base}/" class="text-yellow-400 hover:text-yellow-300 underline transition-colors">readability checker</a> and <a href="https://github.com/axelbase/markdown-link-checker" class="text-yellow-400 hover:text-yellow-300 underline transition-colors">GitHub repo</a>.
  </p>

  <div class="w-full max-w-2xl flex flex-col gap-6">
    <a href="{base}/blog/posts/broken-links-break-trust" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">Why Broken Links Break Trust</h2>
      <p class="text-slate-400 line-clamp-2">Explore how broken markdown links undermine credibility, accessibility, and user experience—and how this tool helps prevent it.</p>
    </a>

    <a href="{base}/blog/posts/client-side-validation" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">Client-Side Validation: Why It Matters</h2>
      <p class="text-slate-400 line-clamp-2">A deep dive into the privacy-first architecture behind the Markdown Link Checker and why stateless, in-browser tools are the future.</p>
    </a>

    <a href="{base}/blog/posts/how-link-validation-works" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">From Paste to Precision: How Link Validation Works</h2>
      <p class="text-slate-400 line-clamp-2">Walk through the validation process step-by-step, showing how raw markdown becomes a clean, actionable report.</p>
    </a>

    <a href="{base}/blog/posts/optimizing-large-markdown" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">Optimizing for Large Markdown Projects</h2>
      <p class="text-slate-400 line-clamp-2">Tips on using concurrency limits, virtual file trees, and timeout settings to handle complex documentation workflows.</p>
    </a>

    <a href="{base}/blog/posts/what-counts-as-valid-link" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">What Counts as a Valid Link?</h2>
      <p class="text-slate-400 line-clamp-2">Clarify how the tool interprets redirects, skips anchors, and handles edge cases like mailto links or localhost references.</p>
    </a>

    <a href="{base}/blog/posts/markdown-vs-online-validators" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">Markdown Link Checker vs. Online Validators</h2>
      <p class="text-slate-400 line-clamp-2">Compare this utility’s privacy-first, client-side approach with traditional cloud-based validators—no tracking, no uploads.</p>
    </a>

    <a href="{base}/blog/posts/exporting-results-txt-json" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">Exporting Results: TXT vs JSON</h2>
      <p class="text-slate-400 line-clamp-2">Explain the difference between export formats, use cases for each, and how to integrate them into your workflow.</p>
    </a>

    <a href="{base}/blog/posts/privacy-by-design" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">Privacy by Design: What We Collect (and What We Don’t)</h2>
      <p class="text-slate-400 line-clamp-2">Break down the privacy policy in plain language, emphasizing what data is processed, what’s ignored, and what’s never stored.</p>
    </a>

    <a href="{base}/blog/posts/common-errors-and-fixes" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">Common Errors and How to Fix Them</h2>
      <p class="text-slate-400 line-clamp-2">List typical validation errors (e.g., malformed markdown, unreachable URLs) and how to troubleshoot them effectively.</p>
    </a>

    <a href="{base}/blog/posts/philosophy-behind-tool" class="block card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">The Philosophy Behind the Tool</h2>
      <p class="text-slate-400 line-clamp-2">Share the origin story and design principles—why autonomy, transparency, and reproducibility are baked into every decision.</p>
    </a>
  </div>
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 1s var(--transition-ease);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .bg-gradient-to-b {
    background: var(--color-bg);
  }

  .card {
    background-color: #1e293b;
    border: 1px solid #334155;
    border-radius: var(--radius-md);
    padding: 1.5rem;
    color: var(--color-text-primary);
    text-decoration: none;
    transition: all 0.3s var(--transition-ease);
    box-shadow: var(--shadow-md);
  }

  .card:hover {
    background-color: #1e293b;
    border-color: #facc15;
    box-shadow: var(--shadow-lg);
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 640px) {
    h1 {
      text-align: center;
      font-size: 2xl;
    }
    .card {
      padding: 1rem;
    }
    .max-w-2xl {
      max-width: 100%;
    }
  }

  :root {
    --color-bg: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    --color-text-primary: #f1f5f9;
    --color-text-secondary: #94a3b8;
    --color-indigo-600: #6366f1;
    --color-indigo-700: #4f46e5;
    --color-indigo-800: #4338ca;
    --color-gray-200: #1e293b;
    --color-gray-300: #334155;
    --color-gray-700: #64748b;
    --color-accent: #facc15;
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -2px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.4);
    --radius-md: 0.5rem;
    --radius-lg: 1rem;
    --transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>