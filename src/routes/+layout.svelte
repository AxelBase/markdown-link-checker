<script lang="ts">
  import '../app.css';
  import { onMount } from "svelte";
  import { base } from '$app/paths';

  const PAYPAL_ME_NAME = "AxelLab427"; // Replace with your PayPal.me username
  let dropdownOpen = false;
  let dropdownRef = null;
  let mouseLeaveTimeout = null;

  function pay(amount: number) {
    const url = `https://paypal.me/${encodeURIComponent(PAYPAL_ME_NAME)}/${amount}USD`;
    window.open(url, "_blank", "noopener");
    dropdownOpen = false;
  }

  function toggleDropdown(event?: Event) {
    event?.stopPropagation?.();
    dropdownOpen = !dropdownOpen;
    if (dropdownOpen && mouseLeaveTimeout) {
      clearTimeout(mouseLeaveTimeout);
    }
  }

  function closeDropdown() {
    mouseLeaveTimeout = setTimeout(() => {
      dropdownOpen = false;
    }, 200);
  }

  function handleMenuMouseEnter() {
    if (mouseLeaveTimeout) {
      clearTimeout(mouseLeaveTimeout);
    }
  }

  function handleDocumentClick(e: MouseEvent) {
    if (dropdownRef && !dropdownRef.contains(e.target)) {
      dropdownOpen = false;
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("click", handleDocumentClick);
      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    }
  });
</script>

<svelte:head>
  <title>Markdown Link Checker</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/bootstrap.min.css" />
</svelte:head>

<!-- Page Wrapper -->
<div class="page-wrapper">

  <!-- Sticky Navbar -->
  <nav class="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="{base}/">AxelBase</a>

      <div class="coffee-dropdown" bind:this={dropdownRef} on:mouseleave={closeDropdown} role="group">
        <button class="coffee-button" aria-haspopup="true" aria-expanded={dropdownOpen} on:click={toggleDropdown}>
          <span class="coffee-icon">☕</span>
          <span class="button-text">Buy me a Coffee</span>
        </button>

        {#if dropdownOpen}
          <div class="coffee-menu" role="menu" aria-label="Buy me a coffee" on:mouseenter={handleMenuMouseEnter} tabindex="-1">
            <button role="menuitem" on:click={() => pay(1)}>$1</button>
            <button role="menuitem" on:click={() => pay(3)}>$3</button>
            <button role="menuitem" on:click={() => pay(5)}>$5</button>
            <button role="menuitem" on:click={() => pay(10)}>$10</button>
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
          <li class="nav-item"><a class="nav-link" href="{base}./#how-to">How to Use</a></li>
          <li class="nav-item"><a class="nav-link" href="{base}./#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="{base}./#faq">FAQ</a></li>
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

  .custom-footer {
    background-color: var(--bg-light);
    border-top: 1px solid var(--border-color);
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2030%2030%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20stroke%3D%22rgba(226%2C%20232%2C%20240%2C%200.9)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-miterlimit%3D%2210%22%20d%3D%22M4%207h22M4%2015h22M4%2023h22%22/%3E%3C/svg%3E");
  }

  .coffee-dropdown {
    position: relative;
    display: inline-block;
  }

  .coffee-button {
    background-color: var(--color-indigo-600);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background-color 0.2s var(--transition-ease), transform 0.2s var(--transition-ease);
  }

  .coffee-button:hover {
    background-color: var(--color-indigo-800);
    transform: scale(1.05);
  }

  .coffee-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #2d3748;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    z-index: 10;
    min-width: 100px;
    margin-top: 0;
  }

  .coffee-menu button {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    color: #e2e8f0;
    text-align: left;
    cursor: pointer;
    font-size: 0.875rem;
  }

  .coffee-menu button:hover {
    background-color: var(--color-indigo-600);
  }

  .footer-links a {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }
</style>
