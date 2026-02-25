<template>
  <div v-if="!pageData || !pageData.story">
    <div class="text-center py-20">
      <h2 class="text-2xl font-bold">Oops! Page not found</h2>
      <p class="mt-8">The requested content is not available.</p>
    </div>
  </div>
  
  <div v-else>
    <!--------------------------------- HERO -------------------------------------------->
    <PageHeroWithAnimatedTitle v-if="heroContent.title" :data="{
      title: heroContent.title,
      animated_word: heroContent.animated_word,
      description: heroContent.description
    }" />
    <!----------------------------------------------------------------------------------->

    <!-------------------- Privacy Policy Content -------------------->
    <section v-if="privacyPolicyContent" id="single-blog-post" class="lg:py-16 py-10 blog-description">
      <div id="text" ref="PolicyContent" class="lg:w-3/5 w-4/5 container mx-auto"
        v-html="$md.render(privacyPolicyContent.Privacy_Policy_Content)">
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!------------------------------- Get in Touch with us------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Discuss Your Social Project With Us!',
      isDarkSectionAtTop: false
    }" />
    <!----------------------------------------------------------------------------------->
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    try {
      const path =
        context.route.path === '/'
          ? 'home'
          : context.route.path.replace(/^\/+/, '')
      const pageDataRes = await context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'social-projects-container.social_projects'
      })
      return {
        pageData: pageDataRes.data,
      }
    }
    catch (err) {
      // eslint-disable-next-line no-console
      console.error("404 happened on route:", context.route.path)
      // eslint-disable-next-line no-console
      console.error(err.response?.data || err)
      return { pageData: null }
    }
  },

  head() {
    return {
      title: 'Privacy Policy - Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Privacy Policy governs the manner in which Vodworks (Vodwork PS Ltd.)  collects, uses, maintains, and discloses information collected from users",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Privacy Policy - Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Privacy Policy governs the manner in which Vodworks (Vodwork PS Ltd.)  collects, uses, maintains, and discloses information collected from users",
        },
      ],
    }
  },

  computed: {
    heroContent() {
      // Guard against pageData not loaded yet
      const body = this.pageData?.story?.content?.body || []
      // Find the hero section
      const hero = body.find(obj => obj.component === 'simple_hero_section')
      // Return empty object if not found to avoid runtime errors
      return hero || {}
    },

    privacyPolicyContent() {
      const body = this.pageData?.story?.content?.body || []
      const legalContent = body.find(obj => obj.component === 'privacy-policy')
      return legalContent || { legalContent: [] }
    }
  },

  mounted() {
    // ✅ Safely add target="_blank" to all links in the content
    const privacyEl = this.$refs.PolicyContent
    if (privacyEl) {
      const collections = privacyEl.querySelectorAll('a')
      collections.forEach((anchor) => {
        anchor.target = "_blank"
      })
    }
  }
}
</script>