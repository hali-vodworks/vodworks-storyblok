<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <!------------------------------------- Services/AI Readiness Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">AI Readiness Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">Lay the groundwork for successful AI adoption with
            expert-led guidance and core infrastructure setup. We help companies assess and prioritize high-impact AI
            opportunities, build the data foundations needed to support future AI initiatives, and ensure data quality,
            compliance, and privacy standards are met.
          </p>

          <iframe class="mb-8 lg:mb-12 youtube-iframe" width="100%" height="400"
            src="https://www.youtube.com/embed/_QWnZa8e7ho?si=KvrCMZespZgRFib6" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
            Talk with our experts
          </div>
        </div>
        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">
            <ServiceCtaCard v-for="card in getAIReadinessServiceData.service_ai_readiness_details" :key="card._uid"
              :data="card" />
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------------------->

    <!---------------------------- Services/AI Readiness details Cards (larg Cards) ------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">
          <AnimatedHeading :data="{
            simpleWords: getAIReadinessServiceData.title,
            animatedWords: getAIReadinessServiceData.animated_word,
            isBgDark: false
          }" />
          <div class="mx-auto md:max-w-4/5 mt-4 lg:mt-12">
            <ServiceLargeCard v-for="card in getAIReadinessServiceData.service_ai_readiness_details" :key="card._uid"
              :data="card" :button="{ text: 'Get in touch', btnURL: 'isStatic' }" />
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------------------>

    <!--------------------------------Our Success Stories--------------------------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Success ',
      animated_word: 'Stories',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!----------------------------------------------------------------------------------------------------->

    <!----------------------------------------------------------------------------------------------------->
    <section v-if="why_use_our_data_services" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">
          <h2>{{ why_use_our_data_services.title }}</h2>
        </div>
        <div class="mt-4 lg:mt-12 center-two-ele-in-grid">
          <div v-for="card in why_use_our_data_services.list" :key="card._uid"
            class="my-4 lg:my-4 text-center md:text-left item">
            <AnimatedHeading3 :data="{
              title: card.title,
              isBgDark: false
            }" />
            <p class="text-regular">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------------------------->

    <!----------------------------We Work Across Industries------------------------------------------------>
    <IndustriesListingSection :data="{
      title: 'We Work Across Industries',
      description: `At Vodworks, we pride ourselves on our versatile approach, supporting clients across a spectrum of industries. Our team's extensive experience and commitment to understanding the unique nuances of your industry and company guarantee the success of your project, no matter the sector you operate in.`,
      getIndustriesData,
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!---------------------------------------------------------------------------------------------------->
    <Web3ExpertsSection :data="{
      title: 'Meet Our',
      animated_word: 'AI Expert',
      description: '',
      getDataExpertsData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!------------------------- Is Your Data AI Ready ----------------------------------------------------->
    <FeaturedDetailedCtaSection :data=benefits />
    <!----------------------------------------------------------------------------------------------------->

    <!----------------------------------------- Blog ----------------------------------------------------->
    <ArticlesSections :data="{
      title: 'Be Ready for AI with our Insights',
      animated_word: '',
      getBlogData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!------------------------------- Get in Touch with us------------------------------------------------>
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: false
    }" />
    <!--------------------------------------------------------------------------------------------------->
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allCasesRes, dataTeamRes, allArticlesRes] = await Promise.all([

      context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'service_ai_readiness_details_container.service_ai_readiness_details,industries-container.industries'
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'cases/',
        per_page: 3,
        sort_by: 'first_published_at:desc',
        resolve_relations: 'case-studies-container.case_studies',
      }),
      // Core:       24d738a4-ad30-45f7-9ec6-3584eb0ddbe0
      // Data:       87a4dfac-ca7d-4605-92d1-b95a7bee0a85
      // Consulting: 6e27734f-2f09-4108-9292-b27bd8a17870
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'team/',
        resolve_relations: 'teams-container.teams',
        'filter_query[teams_categories][exists]': '87a4dfac-ca7d-4605-92d1-b95a7bee0a85'
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'blogs/',
        per_page: 10,
        resolve_relations: 'blog-container.blog',
      }),
    ])
    return {
      pageData: pageDataRes.data,
      allCases: allCasesRes.data,
      dataTeam: dataTeamRes.data,
      allArticles: allArticlesRes.data,
    }
  },

  data() {
    return {
      story: { content: {} },
      why_use_our_data_services: {

        title: "Why Use Our Data Services",
        list: [
          {
            title: "Secure by Design",
            description: "We follow industry best practices and compliance standards like GDPR to keep your data secure at every stage—from storage to AI model deployment.",
          },
          {
            title: "Infrastructure that  Scales with your needs",
            description: "Our solutions are built to scale alongside your AI ambitions. We make sure your data infrastructure can scale in step with your business objectives.",
          },
          {
            title: "Modern Data Stack Expertise",
            description: "Our team works with leading tools like Snowflake, BigQuery, Kafka, dbt, and more to support your AI use cases—no matter the size or complexity.",
          },
          {
            title: "ETL and ELT Mastery",
            description: "We build clean, reliable data pipelines and automate your AI workflows with MLOps to streamline training, deployment, and monitoring.",
          },
          {
            title: "Dedicated AI Experts",
            description: "Our AI engineers and data experts support you through every step—from strategy and setup to hands-on implementation and troubleshooting.",
          },
        ]
      },
      benefits: {
        title: "Is your data AI-ready?",

        btnText: "Take our Questionnaire",
        btnURL: "/contact/",
        target: "_self",

        list: [
          {
            intial_title: 'Benchmark your data estate',
            remaning_title: "to reveal where you sit on the data-to-AI curve"
          },
          {
            intial_title: 'Receive a clear action plan',
            remaning_title: "on the main data pillars"
          },
        ]
      }
    }
  },

  head() {
    return {
      title: 'AI Readiness | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Prepare your organisation to adopt AI with confidence. We help you pinpoint high-impact opportunities, evaluate data, infrastructure, and skills, and establish the foundations.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'AI readiness, AI readiness assessment, AI readiness consulting, AI readiness services, AI readiness strategy, AI readiness evaluation, AI readiness solutions'
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
          content: 'AI Readiness | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Prepare your organisation to adopt AI with confidence. We help you pinpoint high-impact opportunities, evaluate data, infrastructure, and skills, and establish the foundations.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.getAIReadinessServiceData.service_ai_readiness_details[0].content.thumbnail.filename}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.getAIReadinessServiceData.service_ai_readiness_details[0].content.thumbnail.filename}`,
        }
      ]
    }
  },
  computed: {
    getAIReadinessServiceData() {
      return this.pageData.story.content.Services_Detailed_Content.find(function (obj) {
        return obj.component === 'service_ai_readiness_details_container';
      })
    },
    getCasesData() {
      return this.allCases
    },
    getIndustriesData() {
      return this.pageData.story.content.Services_Detailed_Content.find(function (obj) {
        return obj.component === 'industries-container';
      })
    },
    getDataExpertsData() {
      return this.dataTeam
    },
    getBlogData() {
      return this.allArticles
    }
  }
}
</script>
