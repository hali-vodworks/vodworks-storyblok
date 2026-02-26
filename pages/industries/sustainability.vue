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

    <!------------------------- Our Sustainability Software Development ---------------------------------->
    <!--<IndustriesSolutionCardsSection :data="{
        industrySolutionSection,
        gridlayout: 'three-cols'
      }" />-->

    <section v-if="industrySolutionSection" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="mx-auto w-full lg:w-4/5">
          <div class="text-center">
            <AnimatedHeading :data="{
              simpleWords: industrySolutionSection.title,
              animatedWords: industrySolutionSection.animated_word,
              isBgDark: false
            }" />
          </div>

          <div class="center-two-ele-in-grid mx-auto mt-8 lg:mt-16 gap-4">
            <div v-for="card in industrySolutionSection.cards" :key="card.id || card.title"
              class="default-card card-utilities hvr-effect item">
              <img class="hvr-top" :src="card.icon.filename" :alt="card.icon.alt" loading="lazy" />
              <h4 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h4>
              <p class="text-card flex-grow-1">{{ card.description }}</p>
              <div v-scroll-to="card.cta_url" class="btn-text mt-8 inline-block cursor-pointer">
                {{ card.cta_text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <div v-if="featuredCTAVersion1">
      <FeaturedCTA :data="{
        title: featuredCTAVersion1.title,
        btnText: featuredCTAVersion1.btn_text,
        btnURL: featuredCTAVersion1.btn_url,
        imgSrc: featuredCTAVersion1.expert_image.filename,
        col_1: 'md:col-span-7',
        col_2: 'md:col-span-4',
      }" />
    </div>
    <!---------------------------------------------------------------------------------------------------->

    <!---------------------------- Our Values ------------------------------------------------------------>
    <section v-if="industriesCards" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="mx-auto w-full lg:w-4/5">
          <div class="text-center">
            <h2>{{ industriesCards.title }}</h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4 mt-8 lg:mt-16">
            <div v-for="(card, i) in industriesCards.cards" :key="i" >
              <div class="default-card card-utilities hvr-effect">
                <img class="hvr-top" :src="card.icon.filename"
                  :alt="card.icon.alt" laoding="lazy" />
                <h4 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h4>
                <p class="text-card flex-grow-1">{{ card.description }}</p>

                <div v-scroll-to="card.cta_url" class="btn-text mt-8 inline-block cursor-pointer">
                  {{ card.cta_text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->

    <!--------------------------------------FAQs---------------------------------------------------------->
    <FAQs :payload="FAQs" />
    <!---------------------------------------------------------------------------------------------------->

    <!----------------------------- What Our Clients Say ------------------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!--------------------------------------------------------------------------------------------------->

    <!----------------------------- Get in Touch with us------------------------------------------------>
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: false
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

      const [pageDataRes, allCasesRes, allTestimonialsRes] = await Promise.all([
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

  head() {
    return {
      title: 'Sustainability Software Development Solutions | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Crafting Tomorrow's Solutions: Vodworks - Your Partner for Sustainable Software Development. Let's start your sustainability development project right NOW!"
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'sustainability solutions, sustainability software, sustainability reporting software, sustainability management software, software sustainability, sustainable software development, supply chain sustainability software, sustainability software engineering, sustainability software companies, enterprise sustainability software, software engineering sustainability, product sustainability software, sustainability software solutions, IT solutions for sustainability'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Sustainability Software Development Solutions | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Crafting Tomorrow's Solutions: Vodworks - Your Partner for Sustainable Software Development. Let's start your sustainability development project right NOW!"
        },
      ]
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
    industriesCards() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'industries_cards_section';
      })
    },
    FAQs() {
      return this.pageData.story.content.body.find(obj => obj.component === 'faqs-container');
    },
    getTestimonialsData() {
      return this.allTestimonials
    }
  }
}
</script>
