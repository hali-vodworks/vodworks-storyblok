<template>
  <section id="how" class="how-section">
    <div class="container">
      <p class="section-label">{{ content.eyebrow }}</p>
      <h2 class="section-title">{{ content.title }}</h2>
      <p class="section-intro">
        {{ content.description }}
      </p>
      <div v-if="content.cards?.length" class="steps-grid">
        <div v-for="(step,index) in content.cards" :key="step._uid || step.number || index" class="step">
          <div class="step-n">{{ step.number }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  }
}
</script>
