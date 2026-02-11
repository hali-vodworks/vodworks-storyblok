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
      gridlayout: 'three-cols'
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!-------------------------------- Our Success Stories----------------------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Case Studies',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!-------------------------------------------------------------------------------------------------->

    <!------------------------------------Featured CTA Version-1 --------------------------------------->
    <div v-if="featuredCTAVersion1" class="bgColor-normal-grey">
      <FeaturedCTA :data="{
        title: featuredCTAVersion1.title,
        btnText: featuredCTAVersion1.btn_text,
        btnURL: featuredCTAVersion1.btn_url,
        imgSrc: featuredCTAVersion1.expert_image.filename,
        col_1: 'md:col-span-7',
        col_2: 'md:col-span-4',
      }" />
    </div>
    <!------------------------------------------------------------------------------------------------->

    <!----------------------------------------- Blog -------------------------------------------------->
    <div class="bgColor-normal-grey">
      <ArticlesSections :data="{
        title: 'Vodworks Related Blog ',
        animated_word: 'Insights',
        getBlogData,
        isDarkMode: false
      }" />
    </div>
    <!---------------------------------------------------------------------------------------------------->

    <!---------------Why Vodworks as your Gaming Development Partner? ------------------------------------>
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2 class="color-white">Why Vodworks as your Gaming Development Partner?</h2>
        </div>
        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16">
          <div>
            <p class="mb-4 lg:mb-6 text-big color-white">Our comprehensive set of software solutions for gaming,
              combined
              with our commitment to driving innovation and delivering value to our clients, makes Vodworks your
              ultimate
              gaming development partner.
            </p>
            <p class="text-big color-white">
              Our comprehensive set of software solutions for gaming, combined with our commitment to driving innovation
              and delivering value to our clients, makes Vodworks your ultimate gaming development partner.
            </p>
          </div>
          <div>
            <div class="zoom-in overflow-hidden">
              <img class="w-full" src="~/assets/img/IMG_9662_2.jpg" alt="Development Partner" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->

    <!--------------------------------------FAQs---------------------------------------------------------->
    <div class="bgColor-normal-grey">
      <FAQs :payload="FAQs" />
    </div>
    <!---------------------------------------------------------------------------------------------------->

    <!----------------------------- What Our Clients Say ------------------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!--------------------------------------------------------------------------------------------------->

    <!----------------------------- Get in Touch with us------------------------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!-------------------------------------------------------------------------------------------------->

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
          resolve_relations: 'industries-container.industries,faqs-container.list_of_faqs'
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
      title: 'Gaming Software Development  | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Vodworks pioneers Gaming Software Development, shaping immersive experiences. Join us to redefine interactive entertainment TODAY!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'gaming industry, gaming software, entertainment software, gaming development software, gaming software development, mobile gaming development software, software for entertainment, gaming software development, entertaining software, game software development, game entertainment management, entertainment softwares, gaming software developers'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Gaming Software Development  | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Vodworks pioneers Gaming Software Development, shaping immersive experiences. Join us to redefine interactive entertainment TODAY!',
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
    getBlogData() {
      return this.allArticles
    },

    // Why Vodworks as your Gaming Development Partner

    FAQs() {
      return this.pageData.story.content.body.find(obj => obj.component === 'faqs-container');
    },
    getTestimonialsData() {
      return this.allTestimonials
    }
  },

}
</script>