<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="!story" class="text-center py-20">
    <h2 class="text-2xl font-bold">Oops! Page not found</h2>
    <p class="mt-8">The requested content is not available.</p>
  </div>
  <div v-else>
    <div v-for="(section, index) in allSections" :key="index">
      <component :is="componentMap[section.component]" v-if="componentMap[section.component]" :data="section" />
      <div v-else class="text-center py-12 lg:py-24">
        <p>No component found for {{ section.component }}</p>
      </div>
    </div>


    <!------------------------------- Get in Touch with us------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!---------------------------------------------------------------------------------->
  </div>
</template>

<script>
import CsHero from '~/components/Sections/Cases/CsHero.vue'
import CsBrief from '~/components/Sections/Cases/CsBrief.vue'
import CsScope from '~/components/Sections/Cases/CsScope.vue'
import CsFeaturedImage from '~/components/Sections/Cases/CsFeaturedImage.vue'
import CsApproachWithCards from '~/components/Sections/Cases/CsApproachWithCards.vue'
import CsTechStack from '~/components/Sections/Cases/CsTechStack.vue'
import CsResult from '~/components/Sections/Cases/CsResult.vue'
import CsOutcome from '~/components/Sections/Cases/CsOutcome.vue'
import CsFAQs from '~/components/Sections/Cases/FAQs.vue'

export default {
  async asyncData({ app, route }) {
    try {
      const slug =
        route.path === '/' ? 'home' : route.path.replace(/^\/+/, '')
      const res = await app.$storyapi.get(`cdn/stories/${slug}`, {
        version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
        resolve_links: 'story',
        resolve_relations:
          'case-studies-container.case_studies,case_studies.case-study,case-studies-container.case-study,faqs-container.list_of_faqs',
      })
      return {
        story: res.data.story || null,
      }
    } catch (err) {
      console.warn('Storyblok error:', err?.response?.status)
      return { story: null }
    }
  },
  head() {
    if (!this.story) return { title: 'Page not found' }
    return {
      title: this.story.content.title || 'Case Study',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.story.content.description}`,
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.story.content.title}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${this.story.content.description}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.story.content.thumbnail.filename}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `/${this.story.full_slug}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.story.content.thumbnail.filename}`,
        },
      ]
    }
  },
  computed: {
    allSections() {
      return this.story?.content?.cs_full_details || []
    },
    componentMap() {
      return {
        'single-cs-hero': CsHero,
        'cs-fw-brief': CsBrief,
        'cs-scope': CsScope,
        'cs-fw-featured-image': CsFeaturedImage,
        'cs-approach_with_cards': CsApproachWithCards,
        'cs-technical-stack': CsTechStack,
        'cs-result': CsResult,
        'cs-outcome': CsOutcome,
        'faqs-container': CsFAQs,
      }
    }
  }
}
</script>
