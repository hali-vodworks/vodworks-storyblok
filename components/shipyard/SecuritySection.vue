<template>
  <section class="security-section">
    <div class="container">

      <div class="security-inner">
        <div class="security-left">
          <p class="security-eyebrow">{{ content.eyebrow }}</p>
          <h2 v-if="content.title" class="security-title" v-html="content.title"></h2>
          <p v-if="content.description" class="security-body" v-html="content.description"></p>
          <p class="security-stat">{{ content.stat }}</p>
        </div>

        <div class="security-right">

          <div v-if="content.security_pills?.length" class="security-pills">
            <span v-for="(pill,index) in content.security_pills" :key="pill._uid || pill.label || index" class="sec-pill" :class="pill.type">{{
              pill.label
            }}</span>
          </div>
          <a :href="content.cta_url || '#'" class="btn-primary">{{ content.cta_text }}</a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'SecuritySection',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  }
}
</script>