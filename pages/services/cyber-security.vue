<template>
  <div>
    <!------------------------------------- Services/Engineering Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Cybersecurity Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">Vodworks helps organisations identify, validate and
            reduce cyber risk across applications, APIs, infrastructure and cloud environments. Our services cover
            security assessment, penetration testing, remediation support and security implementation, delivered under a
            clearly agreed scope and rules of engagement.
          </p>
          <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
            Discuss your project
          </div>
        </div>
        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">
            <ServiceCtaCard v-for="card in getCybersecurityServiceData.service_cybersecurity_details" :key="card._uid"
              :data="card" />
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!---------------------------- Services/Engineering details Cards (larg Cards) ------------------------>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">
          <AnimatedHeading :data="{
            simpleWords: getCybersecurityServiceData.title,
            animatedWords: getCybersecurityServiceData.animated_word,
            isBgDark: false
          }" />
          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">
            <ServiceLargeCard v-for="card in getCybersecurityServiceData.service_cybersecurity_details" :data="card"
              :button="{ text: `Start a conversation`, btnURL: 'isStatic' }" :key="card._uid" />
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!----------------------------General CTA (Dark)---------------------------------------->
    <GeneralCTA :data="{
      title: 'Bring your ideas and innovations to life!',
      btnText: 'Get in touch with us',
      btnURL: '/contact/',
      isNavigatingToContactPage: true,
      darkMode: true,
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-5',
    }" />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------------------------------------------------------------->
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
    <!------------------------------------------------------------------------------------->

    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our ',
      animated_word: 'Success Stories',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->

    <!---------------------------------------------------------------------------------------------------->
    <Web3ExpertsSection :data="{
      title: 'Meet Our',
      animated_word: 'Cybersecurity Expert',
      description: '',
      getDataExpertsData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->

    <!----------------------------We Work Across Industries---------------------------------------->
    <IndustriesListingSection :data="{
      title: 'We Work Across Industries',
      description: `At Vodworks, we pride ourselves on our versatile approach, supporting clients across a spectrum of industries. Our team's extensive experience and commitment to understanding the unique nuances of your industry and company guarantee the success of your project, no matter the sector you operate in.`,
      getIndustriesData,
    }" />
    <!---------------------------------------------------------------------------------------------->

    <!-------------------------------------- About Vodworks ---------------------------------------->
    <AboutVodworks :data="{
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------->

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: false
    }" />
    <!------------------------------------------------------------------------------------------>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allCasesRes, dataTeamRes] = await Promise.all([

      context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'service_cybersecurity_details_container.service_cybersecurity_details,industries-container.industries'
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
    ])
    return {
      pageData: pageDataRes.data,
      allCases: allCasesRes.data,
      dataTeam: dataTeamRes.data
    }
  },

  data() {
    return {
      story: { content: {} },
      why_use_our_data_services: {

        title: "Why Use Our Cybersecurity Services",
        list: [
          {
            title: "Business-Focused Risk Prioritisation",
            description: "We connect technical findings to operational and commercial impact, helping you focus resources on the risks that matter most.",
          },
          {
            title: "Clearly Defined Engagements",
            description: "Every engagement follows a clearly defined scope and rules, giving you greater clarity, control and accountability throughout.",
          },
          {
            title: "End-to-End Security Support",
            description: "We support the security lifecycle from initial assessment and security testing to remediation, implementation and improvement.",
          },
          {
            title: "Regulatory Expertise",
            description: "Vodworks specialists identify and address gaps against ISO 27001, SOC 2, GDPR, HIPAA and PCI DSS requirements and regulations.",
          },
          {
            title: "End-to-End Security",
            description: "We safeguard applications, APIs, data, identities, networks and endpoints across on-premises, cloud and hybrid infrastructure.",
          }
        ]
      }
    }
  },

  head() {
    return {
      title: 'Cybersecurity Services & Solutions | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Protect your apps, data and infrastructure with cybersecurity assessments, penetration testing, implementation and managed security from Vodworks.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'cybersecurity services, cybersecurity assessment, penetration testing, application security, API security, cloud security, network security, managed security, SOC services, security compliance'
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
          content: 'Cybersecurity Services & Solutions | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Protect your apps, data and infrastructure with cybersecurity assessments, penetration testing, implementation and managed security from Vodworks.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.getCybersecurityServiceData.service_cybersecurity_details[0].content.thumbnail.filename}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.getCybersecurityServiceData.service_cybersecurity_details[0].content.thumbnail.filename}`,
        }
      ]
    }
  },

  computed: {
    getCybersecurityServiceData() {
      return this.pageData.story.content.Services_Detailed_Content.find(function (obj) {
        return obj.component === 'service_cybersecurity_details_container';
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
    }
  }
}
</script>
