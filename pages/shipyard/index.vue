<template>
  <main>
    <HeroSection :content="sectionByComponent['sy_hero_section']" />
    <ToolsStripSection :content="sectionByComponent['sy_tools_strip_section']" />
    <PersonasSection :content="sectionByComponent['sy_personas_section']" />
    <SecuritySection :content="sectionByComponent['sy_security_section']" />
    <HowItWorks :content="sectionByComponent['sy_how_it_works_section']" />
    <PricingSection :content="sectionByComponent['sy_pricing_section']" />
    <TestimonialsSection :content="sectionByComponent['sy_testimonials_section']" />
    <VodworksSection :content="sectionByComponent['sy_vodworks_section']" />
    <CtaBandSection :content="sectionByComponent['sy_cta_band_section']" />
    <FaqSection :content="sectionByComponent['sy_faqs_section']" />
    <LeadFormSection :content="sectionByComponent['sy_lead_form_section']" />
  </main>
</template>

<script>
import ogImage from '~/static/shipyerd-og-image.png';

import HeroSection from '~/components/shipyard/HeroSection.vue'
import ToolsStripSection from '~/components/shipyard/ToolsStripSection.vue'
import HowItWorks from '~/components/shipyard/HowItWorks.vue'
import SecuritySection from '~/components/shipyard/SecuritySection.vue'
import PersonasSection from '~/components/shipyard/PersonasSection.vue'
import PricingSection from '~/components/shipyard/PricingSection.vue'
import TestimonialsSection from '~/components/shipyard/TestimonialsSection.vue'
import VodworksSection from '~/components/shipyard/VodworksSection.vue'
import CtaBandSection from '~/components/shipyard/CtaBand.vue'
import FaqSection from '~/components/shipyard/FaqSection.vue'
import LeadFormSection from '~/components/shipyard/LeadForm.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    ToolsStripSection,
    SecuritySection,
    HowItWorks,
    PersonasSection,
    PricingSection,
    TestimonialsSection,
    VodworksSection,
    CtaBandSection,
    FaqSection,
    LeadFormSection,
  },
  layout: 'shipyard',

  async asyncData(context) {
    try {
      const path = context.route.path === '/' ? 'home' : context.route.path.replace(/^\/+/, '')
      const res = await context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: context.isDev ? 'draft' : 'published',
        resolve_relations: 'social-projects-container.social_projects'
      })
      return { pageData: res.data }
    } catch (err) {
      console.error(err.response?.data || err)
      return { pageData: null }
    }
  },

  head() {
    return {
      title: 'Shipyard | Engineering Support for AI-Built Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Shipyard helps founders turn AI-built prototypes and stuck projects into live, secure, and maintainable products with support from senior engineers.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'ai app deployment, ai app security, lovable supabase auth, v0 auth, rls lovable, supabase rls, vibecoding security, how to deploy a lovable app, how to deploy a v0 app, how to deploy a replit app, how to deploy a bolt app, how to deploy on vercel, vercel deploy'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Shipyard | Engineering Support for AI-Built Projects',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Shipyard helps founders turn AI-built prototypes and stuck projects into live, secure, and maintainable products with support from senior engineers.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImage,
        }
      ],
    };
  },

  computed: {
    sectionByComponent() {
      const body = this.pageData?.story?.content?.body || []
      return body.reduce((acc, block) => ({ ...acc, [block.component]: block }), {})
    }
  }
}
</script>