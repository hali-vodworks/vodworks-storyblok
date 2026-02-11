<template>
  <div v-if="!pageData">
    <div class="text-center py-20">
      <h2 class="text-2xl font-bold">Oops! Page not found</h2>
      <p class="mt-8">The requested content is not available.</p>
    </div>
  </div>
  <div v-else>
    <!-- 
    <IndustriesHeroSection :industries="getIndustriesData" :page="getPageDetails" :button="{
      btnURL: true
    }" />
     -->

    <!----------------- Hero section with Industries cards  ------------------------------------>
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">{{ getPageDetails.title }}</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">{{ getPageDetails.description }}</p>
          <NuxtLink to="/services/" class="btn-primary btn-lg  inline-block">
            Explore our services
          </NuxtLink>
        </div>
        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
          <!--grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6-->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-2 md:gap-4 lg:gap-6">
            <template v-for="(card, i) in getIndustriesData.industries">
              <IndustryCtaCard :key="i" :data="card" />
            </template>
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!----------------------------- Tools and Technologies we use ------------------------------>
    <ToolsAndTechs :data="{
      isDarkMode: false
    }" />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------ Why Choose Vodworks?--------------------------------------->
    <BenefitsOfChoosingVodworks :data="{
      isDarkMode: true
    }" />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------------Featured CTA Version-1 ------------------------------->
    <FeaturedCTA :data="{
      title: featuredCTAVersion1.title,
      btnText: featuredCTAVersion1.btn_text,
      btnURL: featuredCTAVersion1.btn_url,
      imgSrc: featuredCTAVersion1.expert_image.filename,
      col_1: 'md:col-span-5',
      col_2: 'md:col-span-7',
    }" />
    <!------------------------------------------------------------------------------------------>

    <!----------------------------- What Our Clients Say --------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->

    <!--------------------------------Our Success Stories-------------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Success',
      animated_word: 'Stories',
      description: '',
      getCasesData,
      isDarkMode: false,
    }" />
    <!---------------------------------------------------------------------------------------->

    <!---------------------------------  Meet our Vodworks team ------------------------------>
    <OverviewAboutVodworksTeam />
    <!---------------------------------------------------------------------------------------->

    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!----------------------------------------------------------------------------------->

  </div>
</template>

<script>
import ogImage from '~/static/preview-industries.jpg';
export default {
  async asyncData(context) {
    try {
      const path =
        context.route.path === '/'
          ? 'home'
          : context.route.path.replace(/^\/+/, '')

      const [pageDataRes, allCasesRes, allTestimonialsRes] = await Promise.all([
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
          starts_with: 'testimonials/',
          resolve_relations: 'testimonial-container.testimonials_list',
        }),
      ])
      return {
        pageData: pageDataRes.data,
        allCases: allCasesRes.data,
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
      pageData: {},
    }
  },

  head() {
    return {
      title: 'Vodworks | Software Development by Industry',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Experience innovation and excellence with Vodworks in the software development industry. Elevate your digital solutions today!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development industry, software development industries, software development financial industry, development of software industry, software development healthcare industry, research and development in software industry, software industry development, software development industry growth'
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Vodworks | Software Development by Industry',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Experience innovation and excellence with Vodworks in the software development industry. Elevate your digital solutions today!',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImage,
        },
        {
          hid: 't-type',
          name: 'twitter:card',
          content: ogImage,
        },
      ],
    }
  },

  computed: {
    getPageDetails() {
      return this.pageData.story.content
    },
    getIndustriesData() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'industries-container';
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
    getTestimonialsData() {
      return this.allTestimonials
    },
  }

}
</script>
