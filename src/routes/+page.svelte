<script lang="ts">
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import type { Link, ValidationResult } from '../lib/parser';
  import { extractLinks } from '../lib/parser';
  import { validateLinks } from '../lib/validator';
  import { renderResults, filterResults } from '../lib/renderer';
  import { config } from '../lib/config';
  import { exportReport, copyToClipboard } from '../lib/exporter';
  import { base } from '$app/paths';

  const markdownContent = writable<string>('');
  const error = writable<string>('');
  const links = writable<Link[]>([]);
  const results = writable<ValidationResult[]>([]);
  const filterStatus = writable<string>('');
  const searchTerm = writable<string>('');
  const filteredResults = writable<ValidationResult[]>([]);
  const processing = writable<boolean>(false);
  const fileName = writable<string>('');
  const sortBy = writable<string>('line');
  const sortOrder = writable<'asc' | 'desc'>('asc');
  const virtualFileTree = writable<string[]>(['./docs/file.md']);
  const showCopiedMessage = writable<boolean>(false);

  $: config.update(c => ({ ...c, virtualFileTree: $virtualFileTree }));

  async function handleUpload(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!file.name.endsWith('.md')) {
        error.set('Only .md files are supported.');
        return;
      }
      fileName.set(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (!isMarkdown(content) && content.length > 0) {
          error.set('File does not appear to be valid Markdown. Please check the content.');
          return;
        }
        markdownContent.set(content);
        error.set('');
      };
      reader.readAsText(file);
    }
  }

  function handlePaste(event: Event) {
    const content = (event.target as HTMLTextAreaElement).value;
     if (!isMarkdown(content) && content.length > 0) {
      error.set('Pasted text does not appear to be valid Markdown.');
    } else {
      error.set('');
    }
    markdownContent.set(content);
    if(content.length > 0) fileName.set('Pasted Content');
  }

  function isMarkdown(content: string): boolean {
    const markdownRegex = /(^#+\s.*)|(^\s*[-*+]\s.*)|(\[.+\]\(.+\))/m;
    return markdownRegex.test(content.trim());
  }

  async function runValidation() {
    processing.set(true);
    error.set('');
    results.set([]);
    try {
      const extracted = extractLinks($markdownContent);
      const validated = await validateLinks(extracted, { ...$config, fullMarkdownContent: $markdownContent });
      results.set(validated);
      filteredResults.set(filterResults(validated, $filterStatus, $searchTerm));
    } catch (err) {
      error.set(`Validation failed: ${(err as Error).message}. Please check your internet connection and try again.`);
    } finally {
      processing.set(false);
    }
  }

  $: filteredResults.set(filterResults($results, $filterStatus, $searchTerm));

  function downloadTxt() { exportReport($results, 'txt'); }
  function downloadJson() { exportReport($results, 'json'); }
  
  async function copyResults() {
    try {
      await copyToClipboard($results);
      showCopiedMessage.set(true);
      setTimeout(() => showCopiedMessage.set(false), 2000);
    } catch (err) {
      error.set(`Failed to copy: ${(err as Error).message}. Please try again.`);
    }
  }

  function toggleSort(column: string) {
    if ($sortBy === column) {
        sortOrder.update(o => o === 'asc' ? 'desc' : 'asc');
    } else {
        sortBy.set(column);
        sortOrder.set('asc');
    }
  }

  onMount(() => {
    setTimeout(() => {
        document.querySelector('#pasteArea')?.focus();
    }, 100);
  });
</script>

<br/>
<br/>

<div class="row">
  <div class="col-md-12">
    <h1 class="mb-4 text-center display-4">Markdown Link Checker</h1>
    
    <div class="card mb-4" style="animation-delay: 0.1s;">
      <div class="card-header">1. Provide Markdown</div>
      <div class="card-body">
        <div class="mb-3">
          <label for="fileUpload" class="form-label">Upload a .md File</label>
          <input type="file" class="form-control" id="fileUpload" accept=".md" on:change={handleUpload} aria-describedby="fileHelp" />
          <div id="fileHelp" class="form-text mt-1">Select a local Markdown file from your device.</div>
        </div>
        <div class="mb-3">
          <label for="pasteArea" class="form-label">Or Paste Content</label>
          <textarea class="form-control" id="pasteArea" rows="10" placeholder="Paste your Markdown content here..." bind:value={$markdownContent} on:input={handlePaste} aria-describedby="pasteHelp"></textarea>
        </div>
        {#if $error}
          <div class="alert alert-danger mt-3" role="alert">{$error}</div>
        {/if}
      </div>
    </div>

    <div class="card mb-4" style="animation-delay: 0.2s;">
      <div class="card-header">2. Configure (Optional)</div>
      <div class="card-body row">
        <!-- same config fields as before -->
        <div class="col-md-6 mb-3">
          <label for="timeout" class="form-label">Timeout (ms)</label>
          <input type="number" class="form-control" id="timeout" bind:value={$config.timeout} on:input={(e) => config.update(c => ({ ...c, timeout: +(e.target as HTMLInputElement).value }))} min="1000" />
        </div>
        <div class="col-md-6 mb-3">
            <label for="concurrency" class="form-label">Concurrency Limit</label>
            <input type="number" class="form-control" id="concurrency" bind:value={$config.concurrency} on:input={(e) => config.update(c => ({ ...c, concurrency: +(e.target as HTMLInputElement).value }))} min="1" max="10" />
        </div>
        <div class="col-12 mb-3">
          <label for="ignorePatterns" class="form-label">Ignore Patterns</label>
          <input type="text" class="form-control" id="ignorePatterns" placeholder="e.g. localhost, google.com" bind:value={$config.ignorePatterns} on:input={(e) => config.update(c => ({ ...c, ignorePatterns: (e.target as HTMLInputElement).value.split(',').map(s => s.trim()) }))} />
        </div>
        <div class="col-12 mb-3">
            <label for="virtualFileTree" class="form-label">Virtual File Tree</label>
            <input type="text" class="form-control" id="virtualFileTree" bind:value={$virtualFileTree} on:input={(e) => virtualFileTree.set((e.target as HTMLInputElement).value.split(',').map(s => s.trim()))} />
        </div>
        <div class="col-12">
            <div class="form-check form-switch fs-5">
                <input type="checkbox" class="form-check-input" id="externalOnly" role="switch" bind:checked={$config.externalOnly} on:change={(e) => config.update(c => ({ ...c, externalOnly: (e.target as HTMLInputElement).checked }))} />
                <label class="form-check-label" for="externalOnly">Validate External Links Only</label>
            </div>
        </div>
      </div>
    </div>
    
    <div class="text-center mb-3">
        <button class="btn btn-primary btn-lg" on:click={runValidation} disabled={$processing || !$markdownContent}>
            {#if $processing}
                <span class="spinner"></span> Processing...
            {:else}
                Validate Links
            {/if}
        </button>
        <div class="form-text mt-2">Results will appear here</div>
    </div>

    {#if $results.length > 0}
      <!-- results card here (same as before) -->
      <div class="card mb-4">
        <div class="card-header d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <span class="fw-bold fs-5">Validation Results for {$fileName}</span>
          <div class="d-flex gap-2 w-100 w-md-auto">
            <select class="form-select form-select-sm" bind:value={$filterStatus}>
              <option value="">All Statuses</option>
              <option value="Valid">Valid</option>
              <option value="Broken">Broken</option>
              <option value="Redirected">Redirected</option>
              <option value="Skipped">Skipped</option>
              <option value="Ignored">Ignored</option>
            </select>
            <input type="search" class="form-control form-control-sm" placeholder="Search URL or text..." bind:value={$searchTerm} />
          </div>
        </div>
        <div class="table-responsive">
            {@html renderResults($filteredResults, $sortBy, $sortOrder)}
        </div>
        <div class="card-footer">
          <span class="me-3 text-dark">Sort by:</span>
          <button class="btn btn-link" on:click={() => toggleSort('text')}>Text</button>
          <button class="btn btn-link" on:click={() => toggleSort('url')}>URL</button>
          <button class="btn btn-link" on:click={() => toggleSort('line')}>Line</button>
          <button class="btn btn-link" on:click={() => toggleSort('status')}>Status</button>
        </div>
      </div>

      <div class="d-flex justify-content-center gap-2 mb-4">
        <button class="btn btn-secondary" on:click={downloadTxt}>Download .txt</button>
        <button class="btn btn-secondary" on:click={downloadJson}>Download .json</button>
        <button class="btn btn-secondary" on:click={copyResults}>
            {#if $showCopiedMessage}
                Copied! ✓
            {:else}
                Copy to Clipboard
            {/if}
        </button>
      </div>
    {/if}

    <!-- ===== How to Use Section ===== -->
    <section id="how-to" class="my-5">
      <h2 class="mb-3">How to Use</h2>

      <p>
        <strong>Welcome to the Markdown Link Checker</strong>, a powerful tool designed to validate and analyze links within your Markdown files with <em>precision and ease</em>.
        Ideal for developers, content creators, and teams managing documentation, this guide will walk you through its core features to ensure seamless link validation and workflow integration.
      </p>

      <p>
        <strong>Step 1: Input Your Markdown Content</strong><br>
        Start by uploading a <code>.md</code> file or pasting raw Markdown text into the provided input area.
        Located within a clean, card-based interface, the upload option supports multiple files, while the resizable textarea accommodates pasted content.
        The tool instantly checks for valid Markdown syntax, displaying an error message if the format is incorrect,
        ensuring you begin with a <em>reliable dataset</em>. This step prepares your content for efficient processing.
      </p>

      <p>
        <strong>Step 2: Configure Your Validation</strong><br>
        Customize the tool’s behavior using the configuration settings.
        Adjust the <em>timeout</em> (in milliseconds), define <em>ignore patterns</em> with comma-separated values, toggle <em>external-only validation</em>,
        set <em>concurrency limits</em>, and specify a <em>virtual file tree</em>.
        These options, updated dynamically through intuitive form fields, allow you to tailor the validation process to your project’s requirements,
        optimizing both <em>speed and accuracy</em>.
      </p>

      <p>
        <strong>Step 3: Validate and Analyze</strong><br>
        Initiate the validation by clicking the <strong>“Validate Links”</strong> button.
        The tool processes your content—showing a <em>“Processing…”</em> state—and extracts links to check their status.
        Once complete, a results card displays the findings, featuring <em>sortable columns</em> (text, URL, line, status) and <em>filterable categories</em> (Valid, Broken, Redirected, etc.).
        Use the search function to locate specific URLs or text, enabling <em>detailed analysis and quick issue resolution</em>.
      </p>

      <p>
        <strong>Step 4: Export and Share</strong><br>
        Export your results as <strong>TXT</strong> or <strong>JSON</strong> files using the dedicated buttons,
        or copy them to your clipboard with a single click.
        This functionality streamlines data handling, allowing you to integrate findings into your workflow effortlessly.
        The interface provides <em>clear feedback</em>, ensuring you can act on the results with confidence.
      </p>
    </section>

    <!-- ===== About Section ===== -->
    <section id="about" class="my-5">
      <h2 class="mb-3">About</h2>
        <p>
        <strong>This utility was created to solve a precise and persistent challenge:</strong>
        ensuring that markdown links are valid, reachable, and trustworthy—without compromising user privacy.
        Whether you're maintaining documentation, publishing technical content, or auditing compliance-sensitive materials,
        <em>broken or misdirected links can erode trust and disrupt workflows</em>.
        This tool offers a streamlined, client-side solution that empowers users to catch and correct link issues before they reach production.
      </p>
      <p>
        <strong>Designed for writers, editors, educators, and compliance professionals</strong>,
        the utility runs entirely in-browser—<em>no data is sent to external servers</em>, and <em>no tracking is performed</em>.
        It parses markdown files locally, extracts all link references, and checks their validity using lightweight, asynchronous requests.
        The results are presented in a clear, actionable format, highlighting broken links, redirects, and unreachable endpoints.
        This ensures your content remains reliable, accessible, and professionally maintained.
      </p>
      <p>
        <strong>Modular by design</strong>, the tool emphasizes reproducibility and onboarding clarity.
        Users can drop in a markdown file, review results instantly, and export or copy findings as needed.
        <em>No setup. No login. No hidden behavior.</em> Just a transparent tool that does one thing well.
        It's ideal for teams in regulated environments, open-source contributors maintaining documentation,
        or solo creators who value precision and autonomy.
      </p>
      <p>
        Every aspect—from its stateless architecture to its Bootstrap-based interface—was crafted to minimize friction and maximize trust.
        <strong>It’s not just a validator; it’s a safeguard against broken user experiences</strong> and
        <em>a quiet ally in your publishing workflow</em>.
      </p>
    </section>

    <!-- ===== FAQ Section ===== -->
    <section id="faq" class="my-5">
      <h2 class="mb-3">FAQ</h2>

      <p>
        <strong>1. What types of files can I check with the Markdown Link Checker?</strong><br>
        You can upload <code>.md</code> files or paste raw Markdown text into the input area.
        The tool supports <em>single or multiple file uploads</em>, but only Markdown files are processed.
      </p>

      <p>
        <strong>2. How does the validation process work?</strong><br>
        The tool extracts links from your Markdown content, checks their status (<em>Valid, Broken, Redirected</em>),
        and provides results. You can configure settings like <em>timeout</em> and <em>ignore patterns</em> to customize the process.
      </p>

      <p>
        <strong>3. Can I filter or sort the validation results?</strong><br>
        Yes, results are displayed in a card with <em>sortable columns</em> (text, URL, line, status) and
        <em>filterable categories</em> (Valid, Broken, Redirected, Skipped, Ignored).
        Use the <strong>search bar</strong> to find specific links.
      </p>

      <p>
        <strong>4. What export options are available?</strong><br>
        You can export results as <strong>TXT</strong> or <strong>JSON</strong> files using the provided buttons,
        or copy them to your clipboard with a single click for <em>easy sharing or integration</em>.
      </p>

      <p>
        <strong>5. How do I handle large Markdown files?</strong><br>
        Adjust the <em>concurrency limit</em> and <em>timeout</em> in the configuration settings to optimize performance for large files.
        The <em>virtual file tree</em> option helps manage complex project structures.
      </p>

      <p>
        <strong>6. What should I do if I get an error message?</strong><br>
        An error message indicates <em>invalid Markdown syntax</em> or a validation failure (e.g., network issues).
        Check your input for correct formatting or retry with a stable connection, then adjust settings if needed.
      </p>
    </section>
  </div>
</div>
