<template>
  <section class="faq-section">
    <div class="container">

      <div class="faq-inner">
        <div>
          <p class="section-label" style="text-align:center">{{ content.eyebrow }}</p>
          <h2 class="section-title" style="text-align:center;max-width:none;margin-bottom:0.5rem;">
            {{ content.title }}
          </h2>
        </div>
        <div v-if="content.faqs?.length" class="faq-grid">
          <div v-for="(item, index) in content.faqs" :key="item._uid || index" class="faq-item" :class="{ open: openIndex === index }
            ">
            <button class="faq-q" @click="toggle(index)">
              <span class="faq-q-text">{{ item.question || '' }}</span>
              <span class="faq-chevron">+</span>
            </button>
            <div class="faq-a">
              <div class="faq-a-inner">{{ item.answer || '' }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  },
  data() {
    return {
      openIndex: null,
    }
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index
    },
  },
}
</script>
