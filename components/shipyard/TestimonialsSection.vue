<template>
  <section class="testimonials">
    <div class="container">
      <div class="test-inner">
        <div class="test-header">
          <p class="section-label">{{ content.eyebrow }}</p>
          <h2 class="section-title">{{ content.title }}</h2>
        </div>
        <div v-if="content.quotes_cards?.length" class="quotes-grid">
          <div v-for="(quote, index) in content.quotes_cards" :key="quote._uid || quote.name || index" class="quote-card">
            <div class="quote-stars">★★★★★</div>
            <p class="quote-text">"{{ quote.quote_text }}"</p>
            <div class="quote-author">
              <div class="avatar">{{ quote.initials }}</div>
              <div>
                <p class="quote-name">{{ quote.review_by }}</p>
                <p class="quote-role">{{ quote.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  }

}
</script>
