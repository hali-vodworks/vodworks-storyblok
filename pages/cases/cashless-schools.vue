<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <!-----------  Hero section -------------------------------------------------------->
    <CsHero :data="{
      content: getSingleCsHero,
      hasMorePadding: true,
      imageHeightFull: false,
    }" />
    <!----------------------------------------------------------------------------------->

    <!-------------- About the Client --------------------------------------------------->
    <CsBrief :data="Brief" />
    <!----------------------------------------------------------------------------------->

    <!--------------- The Scope  -------------------------------------------------------->
    <CsScope :data="Scope" />
    <!----------------------------------------------------------------------------------->

    <!-------------- Featured Image 1---------------------------------------------------->
    <CsFeaturedImage :data="getSingleCsFeaturedImage1" />
    <!----------------------------------------------------------------------------------->

    <!--------------- Why Cashless Schools Chose Vodworks ------------------------------>
    <section v-if="FullWidthGreyBgSection" class="lg:py-32 py-14 bgColor-normal-grey single-cs ">
      <div class="mx-auto container">
        <div class="row md:max-w-4/5 mx-auto">
          <div class="text-center">
            <h3> {{ FullWidthGreyBgSection.title }}</h3>
          </div>
          <div class="mt-8" v-html="$md.render(FullWidthGreyBgSection.description)"></div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!---------------  Review ----------------------------------------------------------->
    <CsReview :data="Review" />
    <!----------------------------------------------------------------------------------->

    <!--------------- How Vodworks Helped ----------------------->
    <section v-if="FullWidthWhiteBgSection" class="lg:py-32 py-14 single-cs">
      <div class="mx-auto container">
        <div class="row md:max-w-4/5 mx-auto">
          <div class="text-center">
            <AnimatedHeading :data="{
              simpleWords: null,
              animatedWords: FullWidthWhiteBgSection.title,
              isBgDark: false
            }" />
          </div>
          <div class="mt-8" v-html="$md.render(FullWidthWhiteBgSection.description)"></div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!---------------  Technical Stack -------------------------------------------------->
    <CsTechStack :data="{
      content: TechnicalStack,
      layout: 'cols-3',
    }" />
    <!----------------------------------------------------------------------------------->

    <!------------------------ The Team ------------------------------------------------->
    <CsTeam :data="{
      content: Team,
      layout: 'md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'
    }" />
    <!----------------------------------------------------------------------------------->

    <!--------------- The Result -------------------------------------------------------->
    <CsResult :data="Result" />
    <!----------------------------------------------------------------------------------->

    <!-------------------------------------------FAQs------------------------------------>
    <FAQs :payload="FAQs" />
    <!----------------------------------------------------------------------------------->

    <!------------------------------- Get in Touch with us------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!------------------------------------------------------------------------------------------>

  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let version = context.$config.storyblokVersion

    // If preview mode is active → force draft
    if (context.query._storyblok) {
      version = 'draft'
    }

    const path = context.route.path === '/' ? '/home' : context.route.path

    try {
      const { data } = await context.app.$storyapi.get(`cdn/stories${path}`, {
        version,
        resolve_links: 'story,url',
        resolve_relations:
          'case-studies-container.case_studies,case_studies.case-study,case-studies-container.case-study,faqs-container.list_of_faqs',
        cv: context.$config.storyblokCacheVersion || Date.now(),
      })

      if (!data.story) {
        context.error({ statusCode: 404, message: 'Page not found' })
      }

      return data
    } catch (err) {
      context.error({
        statusCode: err.response?.status || 500,
        message: err.response?.data || 'Failed to load content from Storyblok',
      })
    }
  },
  head() {
    return {
      title: `${this.story.content.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.story.content.description}`,
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.story.content.title}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${this.story.content.description}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.story.content.thumbnail.filename}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `/${this.story.full_slug}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.story.content.thumbnail.filename}`,
        },
      ]
    }
  },

  computed: {
    getSingleCsHero() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-hero';
      })
    },
    Brief() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-fw-brief';
      })
    },
    Scope() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-scope';
      })
    },
    getSingleCsFeaturedImage1() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-featured-image-1';
      })
    },
    Review() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-review';
      })
    },
    FullWidthGreyBgSection() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-full-width-grey-bg';
      })
    },
    FullWidthWhiteBgSection() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-full-width-white-bg';
      })
    },
    TechnicalStack() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-technical-stack';
      })
    },
    Team() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs_team';
      })
    },
    Result() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-result';
      })
    },
    FAQs() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'faqs-container';
      })
    },

  },

  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  }

}
</script>