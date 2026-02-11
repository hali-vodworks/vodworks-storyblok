<template>

  <div v-if="!pageData">
    <div class="text-center py-20">
      <h2 class="text-2xl font-bold">Oops! Page not found</h2>
      <p class="mt-8">The requested content is not available.</p>
    </div>
  </div>

  <div v-else>
    <!------------------------------ Hero --------------------------------------------------------------->
    <IndustriesHeroSection :data="industryHeroSection" />
    <!---------------------------------------------------------------------------------------------------->

    <!---------------------------------------------------------------------------------------------------->
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

    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: featuredCTAVersion1.title,
      btnText: featuredCTAVersion1.btn_text,
      btnURL: featuredCTAVersion1.btn_url,
      imgSrc: featuredCTAVersion1.expert_image.filename,
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-4',
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!------------------- Why Choose Vodworks? ----------------------------------------------------------->
    <div class="bgColor-normal-grey">
      <FeaturedCards3sInRow :data="{
        content: whyChooseVodWorksSection,
        isDarkMode: false
      }" />
    </div>
    <!--------------------------------------------------------------------------------------------------->

    <!----------------------------------------- Blog ----------------------------------------------------->
    <ArticlesSections :data="{
      title: 'Our Articles',
      animated_word: '',
      getBlogData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------------->

    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
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

      const [pageDataRes, allCasesRes, allArticlesRes, allTestimonialsRes] = await Promise.all([
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
        context.app.$storyapi.get('cdn/stories/', {
          version: 'published',
          starts_with: 'testimonials/',
          resolve_relations: 'testimonial-container.testimonials_list',
        }),
      ])
      return {
        pageData: pageDataRes.data,
        allCases: allCasesRes.data,
        allArticles: allArticlesRes.data,
        allTestimonials: allTestimonialsRes.data,
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
  data() {
    return {
      story: { content: {} },
    }
  },

  head() {
    return {
      title: 'Media and Entertainment Software Development',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Elevate media experiences with Vodworks' software development industry. Revolutionize content delivery and engagement. Explore our services now!"
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'media and entertainment industry, entertainment and media industry, media software development, media and entertainment software development, media & entertainment software development, social media software development, media company software development, media and entertainment software development services'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Media and Entertainment Software Development',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Elevate media experiences with Vodworks' software development industry. Revolutionize content delivery and engagement. Explore our services now!"
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
    featuredCTAVersion1() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'featured_CTA_version_1';
      })
    },
    whyChooseVodWorksSection() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'why_choose_vodworks';
      })
    },
    getBlogData() {
      return this.allArticles
    },
    getTestimonialsData() {
      return this.allTestimonials
    },
  }
}
</script>
