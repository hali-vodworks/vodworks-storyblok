<template>
  <section class="personas-section">
    <div class="container">
      <div class="personas-inner">
        <p class="personas-label">{{ content.eyebrow }}</p>
        <h2 class="personas-title">{{ content.title }}</h2>
        <p class="personas-intro">
          {{ content.description }}
        </p>
        <div v-if="content.cards?.length" class="personas-grid">
          <div v-for="(persona,index) in content.cards" :key="persona._uid || persona.title || index" class="persona-card">
            <p class="persona-title">{{ persona.title }}</p>
            <p class="persona-body">{{ persona.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PersonasSection',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  }
}
</script>
