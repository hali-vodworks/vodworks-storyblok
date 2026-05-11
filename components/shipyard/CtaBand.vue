<template>
  <section>
    <div class="container">
      <div class="cta-band">
        <div>
          <h2 v-if="content.title" v-html="content.title"></h2>
          <p class="cta-stat">{{ content.stat_1 }}</p>
          <p class="cta-stat">{{ content.stat_2 }}</p>
        </div>
        <div class="cta-right">
          <a :href="content.cta_url || '#'" class="btn-primary">{{ content.cta_text }}</a>
          <span style="font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--mid);">
            {{ content.subtext }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaBand',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  }
}
</script>