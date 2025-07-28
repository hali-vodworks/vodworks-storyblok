<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <!-----------  Hero section -------------------------------------------------------->
    <CsHero :data="{
      content: getSingleCsHero,
      hasMorePadding: true,
      imageHeightFull: false,
    }" />
    <!---------------------------------------------------------------------------------->

    <!-------------- Brief -------------------------------------------------------------->
    <CsBrief :data="Brief" />
    <!----------------------------------------------------------------------------------->

    <!-------------- Featured Image 1---------------------------------------------------->
    <CsFeaturedImage :data="getSingleCsFeaturedImage1" />
    <!----------------------------------------------------------------------------------->

    <!--------------- The Scope  -------------------------------------------------------->
    <CsScope :data="Scope" />
    <!----------------------------------------------------------------------------------->

    <!---------------  Review ----------------------------------------------------------->
    <CsReview :data="Review" />
    <!----------------------------------------------------------------------------------->

    <!--------------- The clients VidScape Helped  -------------------------------------->
    <section v-if="Approach" class="single-cs lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="">
          <div class="text-center md:max-w-4/5 mx-auto">
            <h2 v-in-viewport.once><span class="bgFill"><span class="textClip">{{ Approach.title }}</span></span>
            </h2>
            <div class="mt-8 lg:mt-16 text-left" v-html="$md.render(Approach.description)"> </div>

          </div>

          <div class="myTvMovies-cs-cards">
            
            <NuxtLink to="/cases/vidscape/"><img class="default-card card-utilities card" src="~/assets/img/cases/mytvmovies/VS-wv.png" alt="image" /></NuxtLink>
            <img class="operator" src="~/assets/img/cases/mytvmovies/plus.svg" alt="image" />
            <img class="default-card card-utilities card" src="~/assets/img/cases/mytvmovies/roe-r1.png" alt="image" />
            <img class="operator" src="~/assets/img/cases/mytvmovies/arrow-right.svg" alt="image" />
            <img class="default-card card-utilities card" src="~/assets/img/cases/mytvmovies/mytvmovies-com.png" alt="image" />
          </div>

        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!-------------- Featured Image 2---------------------------------------------------->
    <CsFeaturedImage :data="getSingleCsFeaturedImage2" />
    <!----------------------------------------------------------------------------------->

    <!---------------  Technical Stack -------------------------------------------------->
    <CsTechStack :data="{
      content: TechnicalStack,
      layout: 'cols-4 vidscape',
    }" />
    <!----------------------------------------------------------------------------------->

    <!----------------------------------Team--------------------------------------------->
    <CsTeam :data="{
      content: Team,
      layout: 'center-two-ele-in-grid'
    }" />
    <!----------------------------------------------------------------------------------->

    <!--------------- The Result -------------------------------------------------------->
    <CsResult :data="Result" />
    <!----------------------------------------------------------------------------------->

    <!---------------------------FAQs----------------------------------------------------->
    <FAQs :payload="FAQs" />
    <!------------------------------------------------------------------------------------>

    <!------------------------------- Get in Touch with us-------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!------------------------------------------------------------------------------------->

  </div>
</template>

<script>

const loadData = function ({
  api,
  cacheVersion,
  errorCallback,
  version,
  path,
}) {
  return api
    .get(`cdn/stories${path}`, {
      version,
      resolve_links: 'story,url',
      resolve_relations: 'case-studies-container.case_studies,case_studies.case-study,case-studies-container.case-study,faqs-container.list_of_faqs',
      cv: cacheVersion,
    })
    .then((res) => {
      return res.data
    })
    .catch((res) => {
      if (!res.response) {
        errorCallback({
          statusCode: 404,
          message: 'Failed to receive content form api',
        })
      } else {
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data,
        })
      }
    })
}

export default {

  asyncData(context) {
    // Check if we are in the editing mode
    let editMode = true
    if (
      context.query._storyblok ||
      context.isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'))
    ) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1')
        if (window.location === window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode')
        }
      }
      editMode = true
    }
    const version = editMode ? 'draft' : 'published'
    const path = context.route.path === '/' ? '/home' : context.route.path
    // Load the JSON from the API
    return loadData({
      version,
      api: context.app.$storyapi,
      errorCallback: context.error,
      path,
    })
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
      ],
      script: [
        {
          type: 'application/ld+json',
          json: this.generateFaqSchema(),
        },
      ],
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
    Review() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-review';
      })
    },
    getSingleCsFeaturedImage1() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-featured-image-1';
      })
    },
    Approach() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-approach_with_cards';
      })
    },
    getSingleCsFeaturedImage2() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-featured-image-2';
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
  },

  methods: {
    generateFaqSchema() {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": this.FAQs.list_of_faqs.map(faq => ({
          "@type": "Question",
          "name": faq.content.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.content.answer
          }
        }))
      };
    }
  }

}

</script>