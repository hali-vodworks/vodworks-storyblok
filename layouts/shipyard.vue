<template>
  <div>
    <!-- NAV -->
    <nav class="nav">
      <NuxtLink to="/shipyard/" class="nav-logo">
        <span class="logo-dot"></span>Shipyard
      </NuxtLink>

      <ul class="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact" class="btn-nav">Book a call</a></li>
      </ul>
    </nav>

    <!-- PAGE CONTENT -->
    <nuxt />

    <!-- FOOTER -->
    <footer>
      <NuxtLink to="/shipyard/" class="nav-logo" style="color:white;">
        <span class="logo-dot"></span>Shipyard
      </NuxtLink>
      <p class="footer-note">
        A Vodworks product · Engineering support for AI-built projects ·
        <a href="https://vodworks.com/" target="_blank" rel="noopener">vodworks.com</a>
      </p>
    </footer>

  </div>
</template>
<script>

export default {
  name: 'ShipyardLayout',

  head() {
    return {
      bodyAttrs: {
        class: 'shipyard-page'
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&family=Syne:wght@400;600;700;800&display=swap'
        }
      ]
    }
  }

}
</script>