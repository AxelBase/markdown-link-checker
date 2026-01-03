<script lang="ts">
  import '../app.css';
  import { onMount } from "svelte";
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  let dropdownOpen = false;

  function toggleDropdown(event?: Event) {
    event?.stopPropagation?.();
    dropdownOpen = !dropdownOpen;
  }

  function closeDropdown() {
    dropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }

  onMount(() => {
    // Cleanup handled by clickOutside action
  });
</script>

<svelte:head>
  <title>Markdown Link Checker</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="{base}/bootstrap.min.css" />
</svelte:head>

<!-- Page Wrapper -->
<div class="page-wrapper">

  <!-- Sticky Navbar -->
  <nav class="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="{base}/">AxelBase</a>

      <div class="coffee-dropdown position-relative ms-auto me-lg-4" use:clickOutside on:click_outside={closeDropdown}>
        <button 
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
          <span class="d-sm-none fw-semibold">Coffee</span>
        </button>

        {#if dropdownOpen}
          <div class="bmac-dropdown mt-2" transition:fly={{ y: -10, duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="{base}/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="{base}/#how-to">How to Use</a></li>
          <li class="nav-item"><a class="nav-link" href="{base}/#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="{base}/#faq">FAQ</a></li>
          <li class="nav-item"><a class="nav-link" href="{base}/blog">Blog</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="container py-4" style="padding-top: 80px; padding-bottom: 40px;">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="custom-footer">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
      <span class="footer-text">&copy; {new Date().getFullYear()} AxelBase – Markdown Link Checker</span>
      <div class="footer-links d-flex gap-3">
        <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
        <a href="{base}/terms" class="footer-link">Terms &amp; Conditions</a>
      </div>
    </div>
  </footer>

</div>

<style>
  .page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2030%2030%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20stroke%3D%22rgba(226%2C%20232%2C%20240%2C%200.9)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-miterlimit%3D%2210%22%20d%3D%22M4%207h22M4%2015h22M4%2023h22%22/%3E%3C/svg%3E");
  }

  /* Buy Me a Coffee Button & Dropdown – using File 1's exact styling, adapted to dark theme */
  .bmac-button {
    background: var(--brand-green, #008f39); /* fallback to original BMC green */
    font-size: 0.95rem;
    transition: all 0.3s ease;
  }
  .bmac-button:hover {
    background: var(--brand-green-hover, #00732c);
    transform: translateY(-1px);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: #1e293b; /* dark slate to match theme */
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(0, 143, 57, 0.25);
    overflow: hidden;
    border: 1px solid rgba(0, 143, 57, 0.2);
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: #e2e8f0;
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: rgba(99, 102, 241, 0.3); /* accent tint for hover */
    color: var(--accent);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--brand-green, #00d66a);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--accent);
    border-top: 1px solid #334155;
    justify-content: center !important;
  }

  /* Existing navbar/footer styles remain unchanged */
  .custom-navbar {
    background-color: var(--bg-light) !important;
    border-bottom: 1px solid var(--border-color);
  }

  .custom-navbar .navbar-brand {
    color: var(--accent);
    font-weight: 700;
    font-size: 1.25rem;
  }

  .custom-navbar .nav-link {
    color: var(--text-light) !important;
    font-weight: 500;
    margin-left: 1rem;
  }

  .custom-navbar .nav-link:hover {
    color: var(--accent) !important;
    transform: translateY(-2px);
  }

  .footer-links a {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
  }

  .footer-links a:hover {
    color: var(--accent);
    text-decoration: underline;
  }
</style>