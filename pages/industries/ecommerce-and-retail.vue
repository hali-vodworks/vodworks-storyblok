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

    <!---------------------------------------------------------------------------------------------------->
    <IndustriesSolutionCardsSection :data="{
      industrySolutionSection,
      gridlayout: 'three-cols'
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
    <!-------------------------------------------------------------------------------------------------->

    <!------------------------------ Why Choose Vodworks?----------------------------------------------->
    <FeaturedCards3sInRow :data="{
      content: whyChooseVodWorksSection,
      isDarkMode: false
    }" />
    <!-------------------------------------------------------------------------------------------------->

    <!-------------------------------------------------------------------------------------------------->
    <FeaturedDetailedCtaSection :data="benefits" />
    <!-------------------------------------------------------------------------------------------------->

    <!----------------------------------------- Blog --------------------------------------------------->
    <div class="bgColor-normal-grey">
      <ArticlesSections :data="{
        title: 'Ecommerce & Retail Insights',
        animated_word: '',
        getBlogData,
        isDarkMode: false
      }" />
    </div>
    <!---------------------------------------------------------------------------------------------------->

    <!--------------------------------------FAQs---------------------------------------------------------->
    <FAQs :payload="FAQs" />
    <!---------------------------------------------------------------------------------------------------->

    <!----------------------------- What Our Clients Say ------------------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Customers ',
      animated_word: 'Have to Say',
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!-------------------------------------------------------------------------------------------------->

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
      benefits: {
        title: "Get in Touch with Our Team",
        btnText: "Get in touch with us",
        btnURL: "/contact/",
        target: "_self",

        list: [
          {
            intial_title: 'Stay competitive',
            remaning_title: "by leveraging our specialised knowledge"
          },
          {
            intial_title: 'Reduce development time and cost',
            remaning_title: "by avoiding the hiring overhead "
          },
          {
            intial_title: 'Build scalable, adaptable software',
            remaning_title: "that meets your evolving business needs"
          },
        ]
      }
    }
  },

  head() {
    return {
      title: 'Ecommerce Software Development & Retail Solutions | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Seamless Commerce Transformation: Vodworks - Pioneering Ecommerce Software Development and Retail Solutions for Success. Get in touch with us right now!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'ecommerce software, retail solutions, ecommerce development services, retail development, retail software solutions, ecommerce software companies, ecommerce software development, retail software development, retail app development, ecommerce software solutions, ecommerce software company, online retail solutions, retail application development, retail ecommerce solutions, retail app development company, retail software development companies'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Ecommerce Software Development & Retail Solutions | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Seamless Commerce Transformation: Vodworks - Pioneering Ecommerce Software Development and Retail Solutions for Success. Get in touch with us right now!',
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
    whyChooseVodWorksSection() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'why_choose_vodworks';
      })
    },
    getBlogData() {
      return this.allArticles
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