<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <section class="hero-wrap">
    <div class="container">
      <div class="hero">

        <!-- LEFT: Copy -->
        <div class="hero-copy">
          <div class="hero-eyebrow">{{ content.eyebrow }}</div>
          <h1 v-if="content.title" class="hero-headline" v-html="content.title"></h1>
          <p class="hero-sub">{{ content.description }}</p>
          <div v-if="content.cta_group?.length" class="hero-cta-group">
            <a v-for="(cta, index) in content.cta_group" :key="cta._uid || index" :href="cta.cta_url || '#'"
              :class="cta.cta_class">
              {{ cta.cta_text }}</a>
          </div>
          <p class="hero-trust">{{ content.trust_line }}</p>
        </div>

        <!-- RIGHT: Stage cards -->
        <div v-if="content.stages?.length" class="hero-visual">

          <div v-for="(stage, i) in content.stages" :key="stage._uid || i" class="stage-group">

            <div class="stage-card">
              <span class="stage-num">{{ stage.num }}</span>
              <div class="stage-icon" :class="stage.icon_class">
                {{ stage.icon }}
              </div>
              <div class="stage-text">
                <strong>{{ stage.title }}</strong>
                <span>{{ stage.subtitle }}</span>
              </div>
              <span v-if="stage.badge" class="badge-live">
                {{ stage.badge }}
              </span>
            </div>
            <!-- Connector -->
            <div v-if="i < content.stages?.length - 1" class="connector"></div>

          </div>

        </div>
      </div>
    </div>

    <!-- TRUST BAR -->
    <div v-if="content.trust_items?.length" class="trust-bar">
      <span v-for="(item, index) in content.trust_items" :key="index" class="trust-item">{{ item }}</span>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  }
}
</script>
