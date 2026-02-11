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

    <!------------------------- Our Sustainability Software Development --------------------------------
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="mx-auto w-full lg:w-4/5">
          <div class="text-center">
            <h2>{{ SingleIndustrySolutionData.title }}</h2>
          </div>
          <div class="center-two-ele-in-grid mx-auto mt-8 lg:mt-16 gap-4">
            <template v-for="(card, i) in SingleIndustrySolutionData.list">
              <div :key="i" class="default-card card-utilities hvr-effect item">
                <img class="hvr-top" :src="`${require('~/assets/img/icons/industries/' + card.icon)}`"
                  :alt="card.alt" />
                <h4 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h4>
                <p class="text-card flex-grow-1">{{ card.description }}</p>

                <div v-scroll-to="card.btnURL" class="btn-text mt-8 inline-block cursor-pointer">
                  {{ card.btnText }}
                </div>
              </div>
            </template>
</div>
</div>
</div>
</section>-->
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
    <!---------------------------------------------------------------------------------------------------->

    <!---------------------------- Our Values ------------------------------------------------------------>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="mx-auto w-full lg:w-4/5">
          <div class="text-center">
            <h2>{{ Our_Values.title }}</h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4 mt-8 lg:mt-16">
            <template v-for="(card, i) in Our_Values.list">
              <div :key="i" class="default-card card-utilities hvr-effect">
                <img class="hvr-top" :src="`${require('~/assets/img/icons/industries/' + card.icon)}`"
                  :alt="card.alt" />
                <h4 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h4>
                <p class="text-card flex-grow-1">{{ card.description }}</p>

                <div v-scroll-to="card.btnURL" class="btn-text mt-8 inline-block cursor-pointer">
                  {{ card.btnText }}
                </div>
              </div>
            </template>
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

  data() {
    return {
      story: { content: {} },

      Our_Values: {
        title: "Our Values",
        animated_word: "",
        list: [
          {
            icon: "hand-metal.svg",
            alt: "hand-metal icon",
            title: "Keep it real",
            description: "We’re all about honesty, integrity, and transparency here. No fancy talk or hidden agendas, just straight-up truthfulness in everything we do. We believe in treating others as we would like to be treated ourselves, with respect and authenticity.",
            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "brain.svg",
            alt: "brain icon",
            title: "Embrace the new",
            description: "We’re always pushing boundaries, challenging ourselves, and exploring new ideas. We believe that innovation comes from curiosity and a willingness to learn, grow, and adapt. So, we never stop listening and learning, and we never stop striving to be better.",
            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "orbit.svg",
            alt: "orbit icon",
            title: "Tech enthusiasts at heart",
            description: "We’re passionate about technology, and we believe it has the power to change the world. We love nothing more than getting stuck into the latest trends, exploring new tools and techniques, and helping our clients stay ahead of the game.",
            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "users.svg",
            alt: "users icon",
            title: "Teamwork makes the dream work",
            description: "We’re a diverse and inclusive bunch, spread across departments, countries, and cultures. But no matter where we are or what we do, we’re united by a common goal: to support each other and work together to achieve great things.",
            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "smile-plus.svg",
            alt: "smile-plus icon",
            title: "Come together as a community",
            description: "We believe people are the backbone of any great community. We take our commitment to our communities very seriously, both inside and outside of our company, and we do whatever we can to support our communities.",
            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "heart-handshake.svg",
            alt: "heart-handshake icon",
            title: "Customers first, always",
            description: "We’re customer-focused to our core, and we believe the delivering quality work and building strong relationships is key to success. We never lose sight of our clients’ needs and priorities, and we’re always looking for ways to exceed their expectations and earn their trust.",
            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          }
        ]
      },
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
    // --- Our Values----
    FAQs() {
      return this.pageData.story.content.body.find(obj => obj.component === 'faqs-container');
    },
    getTestimonialsData() {
      return this.allTestimonials
    }
  }
}
</script>
