<template>
  <section class="vodworks-section">
    <div class="container">
      <div class="vodworks-inner">
        <div class="vodworks-left">
          <div style="margin-bottom: 0.6rem;">
            <!-- Vodworks SVG logo -->
            <img style="width: 170px;" :src="content.logo?.filename" :alt="content.logo.alt || 'logo'" />
          </div>
          <p class="vodworks-since">{{ content.vw_since }}</p>
          <div v-if="content.cards?.length" class="vodworks-stats">
            <div v-for="(stat, index) in content.cards" :key="stat._uid || stat.label || index" class="vstat">
              <div class="vstat-num">{{ stat.number }}</div>
              <div class="vstat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div class="vodworks-copy">
          <p class="section-label">{{ content.eyebrow }}</p>
          <p v-if="content.description" v-html="content.description"></p>
          <a :href="content.cta_url || '#'" target="_blank" rel="noopener" class="vodworks-link">{{ content.cta_text }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VodworksSection',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  }
}
</script>
