<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <!-------------------------- Hero Section ------------------------------------------->
    <PageHeroWithAnimatedTitle :data="{
      title: 'Case',
      animated_word: 'Studies',
      description: `From exploration and consultation to development of scalable software solutions, we provide comprehensive technical services that align with our clients' unique business needs and industry trends.`,
    }" />
    <!----------------------------------------------------------------------------------->

    <!-------------------------- Case Studies Listing------------------------------------>
    <div class="lg:pb-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="filters w-full mx-auto lg:w-4/5">
          <div class="select-wrapper">
            <select v-model="filters.industry">
              <option value="">All Industries</option>
              <option v-for="industry in industries" :key="industry.value" :value="industry.value">
                {{ industry.label }}
              </option>
            </select>
          </div>

          <div class="select-wrapper">
            <select v-model="filters.expertise">
              <option value="">All Expertise</option>
              <option v-for="item in expertises" :key="item.value" :value="item.value">
                {{ item.label }}
              </option>
            </select>
          </div>

          <div class="select-wrapper">
            <select v-model="filters.solutionType">
              <option value="">All Solution Types</option>
              <option v-for="item in solutionTypes" :key="item.value" :value="item.value">
                {{ item.label }}
              </option>
            </select>
          </div>

          <div class="select-wrapper">
            <select v-model="filters.engagement">
              <option value="">All Engagement Types</option>
              <option v-for="item in engagementTypes" :key="item.value" :value="item.value">
                {{ item.label }}
              </option>
            </select>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-8 w-full mx-auto lg:w-4/5">
          <template v-if="filteredCases.length">
            <article v-for="caseStudy in filteredCases" :key="caseStudy.uuid"
              class="zoom-in overflow-hidden cursor-pointer mb-8">
              <NuxtLink :to="`/cases/${caseStudy.slug}/`">
                <div v-if="getFeaturedImage(caseStudy)" class="blog-thumbnail-wrapper">
                  <img :src="getFeaturedImage(caseStudy).filename" class="scaleable-img"
                    :alt="getFeaturedImage(caseStudy).alt" />
                </div>
                <div class="article-content">
                  <h4 class="line-clamp-2 mt-4">
                    {{ caseStudy.content.title }}
                  </h4>
                  <p class="line-clamp-3">
                    {{ caseStudy.content.description }}
                  </p>
                  <p class="btn-text mt-4 inline-block">
                    Read More
                  </p>
                </div>
              </NuxtLink>
            </article>
          </template>
          <div v-else class="col-span-full text-center py-16">
            <h3 class="text-2xl font-semibold">
              No case studies found
            </h3>
            <p class="mt-3 text-gray-500">
              Try changing or clearing one or more filters to see more results.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!----------------------------------------------------------------------------------->

    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: false
    }
      " />
    <!----------------------------------------------------------------------------------->

  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const version = context.$config.storyblokVersion
    const [allCasesRes, allTestimonialsRes] = await Promise.all([
      context.app.$storyapi.get('cdn/stories/', {
        version,
        starts_with: 'cases/',
        sort_by: 'first_published_at:desc',
        resolve_relations: 'case-studies-container.case_studies',
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version,
        starts_with: 'testimonials/',
        resolve_relations: 'testimonial-container.testimonials_list',
      }),
    ])
    return {
      allCases: allCasesRes.data,
      allTestimonials: allTestimonialsRes.data,
    }
  },
  data() {
    return {
      story: { content: {} },

      filters: {
        industry: '',
        expertise: '',
        solutionType: '',
        engagement: ''
      },
      industries: [
        { label: 'Media & Entertainment', value: 'media-and-entertainment' },
        { label: 'Telecommunications', value: 'telecommunications' },
        { label: 'Cybersecurity', value: 'cybersecurity' },
        { label: 'Education & EdTech', value: 'education-and-edtech' },
        { label: 'Fintech & Compliance', value: 'fintech-and-compliance' },
        { label: 'Ecommerce & Retail', value: 'ecommerce-and-retail' },
        { label: 'Gaming', value: 'gaming' },
        { label: 'Healthcare', value: 'healthcare' },
        { label: 'Real Estate & PropTech', value: 'real-estate-and-proptech' },
        { label: 'AI & Data', value: 'ai-and-data' },
        { label: 'Mobility & Navigation', value: 'mobility-and-navigation' }
      ],

      expertises: [
        { label: 'Web & Mobile Applications', value: 'web-and-mobile-applications' },
        { label: 'Cybersecurity & Digital Forensics', value: 'cybersecurity-and-digital-forensics' },
        { label: 'Media & Streaming Technology', value: 'media-and-streaming-technology' },
        { label: 'Data Engineering & Analytics', value: 'data-engineering-and-analytics' },
        { label: 'AI & Automation', value: 'ai-and-automation' },
        { label: 'Enterprise Platforms & Integrations', value: 'enterprise-platforms-and-integrations' },
        { label: 'Fintech & Compliance', value: 'fintech-and-compliance' }
      ],

      solutionTypes: [
        { label: 'Customer-facing Platform', value: 'customer-facing-platform' },
        { label: 'B2B Platform', value: 'b2b-platform' },
        { label: 'Internal Enterprise System', value: 'internal-enterprise-system' }
      ],

      engagementTypes: [
        { label: 'Product Delivery', value: 'product-delivery' },
        { label: 'Embedded Teams', value: 'embedded-teams' },
        { label: 'Product Transformation', value: 'product-transformation' },
        { label: 'Specialist Assessment & Investigation', value: 'specialist-assessment-and-investigation' }
      ]
    }
  },
  head() {
    return {
      title: 'Software Development Case Studies | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Explore Vodworks case studies in various industries from Media & Entertainment and Telecommunications to Web3 and FinTech.",
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
          content: 'Software Development Case Studies | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Explore Vodworks case studies in various industries from Media & Entertainment and Telecommunications to Web3 and FinTech.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.allCases.stories[0].content.thumbnail.filename}`,
        },
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.allCases.stories[0].content.thumbnail.filename}`,
        },
      ],
    }
  },
  computed: {
    getCasesData() {
      return this.allCases
    },
    getTestimonialsData() {
      return this.allTestimonials
    },

    filteredCases() {
      return this.allCases.stories.filter(story => {

        const industry =
          !this.filters.industry ||
          (story.content.industry || []).includes(this.filters.industry)

        const expertise =
          !this.filters.expertise ||
          (story.content.expertise || []).includes(this.filters.expertise)

        const solution =
          !this.filters.solutionType ||
          (story.content.solution_type || []).includes(this.filters.solutionType)

        const engagement =
          !this.filters.engagement ||
          (story.content.type_of_engagement || []).includes(this.filters.engagement)

        return industry && expertise && solution && engagement
      })
    }

  },
  methods: {
    getFeaturedImage(caseStudy) {
      return caseStudy.content.thumbnail
    },
  }
}
</script>