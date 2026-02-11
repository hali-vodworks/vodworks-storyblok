<template>
  <div v-if="!pageData">
    <div class="text-center py-20">
      <h2 class="text-2xl font-bold">Oops! Page not found</h2>
      <p class="mt-8">The requested content is not available.</p>
    </div>
  </div>

  <div v-else>
    <!-------------------------------- Hero --------------------------------------------------------------->
    <IndustriesHeroSection :data="industryHeroSection" />
    <!---------------------------------------------------------------------------------------------------->

    <!------------------- Fintech and Compliance Industry Solutions ----------------------------------------->
    <IndustriesSolutionCardsSection :data="{
      industrySolutionSection,
      gridlayout: 'four-cols'
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!--------------------------------Our Success Stories------------------------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Case Studies',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!------------------- Why Choose Vodworks? ----------------------------------------------------------->
    <FeaturedCards3sInRow :data="{
      content: whyChooseVodWorksSection,
      isDarkMode: false
    }" />
    <!--------------------------------------------------------------------------------------------------->

    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <div v-if="featuredCTAVersion1" class="bgColor-normal-grey">
      <FeaturedCTA :data="{
        title: featuredCTAVersion1.title,
        btnText: featuredCTAVersion1.btn_text,
        btnURL: featuredCTAVersion1.btn_url,
        imgSrc: featuredCTAVersion1.expert_image.filename,
        col_1: 'md:col-span-7',
        col_2: 'md:col-span-5',
      }" />
    </div>
    <!---------------------------------------------------------------------------------------------------->

    <!----------------------------------------- Blog ----------------------------------------------------->
    <ArticlesSections :data="{
      title: 'Vodworks Related Blog ',
      animated_word: 'Insights',
      getBlogData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!----------------------------- Get in Touch with us-------------------------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!--------------------------------------------------------------------------------------------------->

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
      const [pageDataRes, allCasesRes, allArticlesRes] = await Promise.all([
        context.app.$storyapi.get(`cdn/stories/${path}`, {
          version: 'published',
          resolve_relations: 'industries-container.industries'
        }),
        context.app.$storyapi.get('cdn/stories/', {
          version: 'published',
          starts_with: 'cases/',
          per_page: 3,
          sort_by: 'first_published_at:desc',
          resolve_relations: 'case-studies-container.case_studies',
        }),
        context.app.$storyapi.get('cdn/stories/', {
          version: 'published',
          starts_with: 'blogs/',
          per_page: 4,
          sort_by: 'first_published_at:desc',
          resolve_relations: 'blog-container.blog',
        }),
      ])
      return {
        pageData: pageDataRes.data,
        allCases: allCasesRes.data,
        allArticles: allArticlesRes.data,
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("404 happened on route:", context.route.path)
      // eslint-disable-next-line no-console
      console.error(err.response?.data || err)
      return { pageData: null }
    }
  },

  data() {
    return {
      story: { content: {} },
    }
  },

  head() {
    return {
      title: 'Financial Software Development & Compliance Solutions | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Financial software development and compliance solutions by Vodworks: streamlining operations, compliance workflows, and risk controls.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Financial Software Development, Compliance Solutions'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Financial Software Development & Compliance Solutions | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Financial software development and compliance solutions by Vodworks: streamlining operations, compliance workflows, and risk controls.',
        },
      ],
    }
  },

  computed: {
    industryHeroSection() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'industries_hero_section';
      })
    },
    industrySolutionSection() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'industries_solution_section';
      })
    },
    getCasesData() {
      return this.allCases
    },
    whyChooseVodWorksSection() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'why_choose_vodworks';
      })
    },
    featuredCTAVersion1() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'featured_CTA_version_1';
      })
    },
    getBlogData() {
      return this.allArticles
    },
  }
}
</script>