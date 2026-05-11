<template>
  <section id="pricing" class="pricing-section">
    <div class="container">
      <p class="section-label">{{ content.eyebrow }}</p>
      <h2 class="pricing-title">{{ content.title }}</h2>
      <p class="pricing-subtitle">{{ content.description }}</p>

      <div v-if="content.plans?.length" class="pricing-stack">
        <div v-for="(plan, index) in content.plans" :key="plan._uid || plan.id || index" class="plan-tile"
          :class="plan.tile_class">
          <!-- ── LEFT ── -->
          <div class="tile-left">

            <!-- Eyebrow badges -->
            <div v-if="plan.badges?.length" class="tile-eyebrow-row">
              <span v-for="(badge, bi) in plan.badges" :key="badge._uid || bi" class="tile-eyebrow"
                :class="badge.class">
                {{ badge.label }}</span>
            </div>

            <p class="tile-name">{{ plan.plan_name }}</p>
            <!-- v-html lets us keep <strong> in descriptions -->
            <p v-if="plan.description" class="tile-desc" v-html="plan.description"></p>

            <!-- Two-column bullet lists -->


            <ul v-if="plan.bullet_points?.length" class="tile-bullets">
              <li v-for="(item, ci) in plan.bullet_points" :key="item._uid || ci">
                {{ item.label }}
              </li>
            </ul>


            <!-- "Includes Guard" callout — only rendered when plan.includes is set -->
            <div v-if="plan.includes?.length" class="tile-includes">
              <p class="tile-includes-head">{{ plan.includes[0]?.heading }}</p>
              <p class="tile-includes-body" v-html="plan.includes[0]?.description"></p>
            </div>

          </div>

          <!-- ── RIGHT ── -->
          <div class="tile-right">
            <div class="tile-price-block">
              <!-- v-html keeps the <sub>/mo</sub> tag in the Crew price -->
              <p v-if="plan.price" class="tile-price" v-html="plan.price"></p>
              <p class="tile-price-label">{{ plan.price_label }}</p>
            </div>
            <a :href="plan.cta_url || '#'" class="btn-plan">{{ plan.cta_text }}</a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingSection',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  },

  // data() {
  //   return {
  //     plans: [
  //       // ─────────────── RESCUE ───────────────
  //       {
  //         id:'rescue',
  //         tileClass: 'is-emergency',
  //         badges: [
  //           { label: 'URGENT', class: 'is-orange' },
  //         { label: 'One-time · Fast turnaround',  class: 'is-orange' }
  //         ],
  //         name: 'Rescue',
  //         desc: 'Something is broken right now and you need it fixed fast. We pick it up immediately and work through it as quickly as possible.',
  //         bulletCols: [
  //           [
  //             'Priority response',
  //             'Fix-loop rescue and diagnosis',
  //             'Broken production fix'
  //           ],
  //           [
  //             'API key exposure triage',
  //             'Clear fix and handover notes'
  //           ]
  //         ],
  //         includes:   null,
  //         price:      'From $397',
  //         priceLabel: 'One-time',
  //         cta:        'FIX MY ISSUE FAST!'
  //       },

  //       // ─────────────── GUARD ───────────────
  //       {
  //         id:        'guard',
  //         tileClass: '',
  //         badges: [
  //           { label: 'One-time · 3 to 5 days', class: '' }
  //         ],
  //         name: 'Guard',
  //         desc: 'Already live but not confident your app is actually secure. A deep security audit with a written remediation report.',
  //         bulletCols: [
  //           [
  //             'Full Supabase RLS audit',
  //             'API key and secrets review',
  //             'CORS and rate limit config'
  //           ],
  //           [
  //             'Auth flow security check',
  //             'Payment integration review',
  //             'Written remediation report'
  //           ]
  //         ],
  //         includes:   null,
  //         price:      'From $497',
  //         priceLabel: 'One-time',
  //         cta:        'Audit my security'
  //       },

  //       // ─────────────── LAUNCH ───────────────
  //       {
  //         id:        'launch',
  //         tileClass: 'is-featured',
  //         badges: [
  //           { label: 'Most popular',       class: 'is-popular' },
  //           { label: 'One-time · ~7 days', class: 'is-blue' },
  //           { label: 'Includes Guard',     class: 'is-blue' }
  //         ],
  //         name: 'Launch',
  //         desc: 'Your build is ready. Get it properly live, connected, and secure — <strong>with a full security audit and the fixes implemented</strong>, not just a report.',
  //         bulletCols: [
  //           [
  //             'Database setup and migration',
  //             'Auth and RLS configuration',
  //             'Environment secrets and DNS'
  //           ],
  //           [
  //             'Third-party integrations',
  //             'Production deployment',
  //             'Handover documentation'
  //           ]
  //         ],
  //         includes: {
  //           heading: 'Includes everything in Guard',
  //           body:    'Full security audit <strong>and the fixes implemented</strong> — API keys, CORS, rate limits, RLS policies, secret rotation. Not a PDF you have to act on later.'
  //         },
  //         price:      'From $997',
  //         priceLabel: 'One-time',
  //         cta:        'Get my project live'
  //       },

  //       // ─────────────── CREW ───────────────
  //       {
  //         id:        'crew',
  //         tileClass: '',
  //         badges: [
  //           { label: 'Monthly retainer · Cancel anytime', class: '' }
  //         ],
  //         name: 'Crew',
  //         desc: 'A fractional Shipyard engineer on retainer every month. Your own tech team without the overhead.',
  //         bulletCols: [
  //           [
  //             '10 engineering hours per month',
  //             'Bug fixes and performance',
  //             'Feature development'
  //           ],
  //           [
  //             '48 hour response SLA',
  //             'Monthly review call',
  //             'Cancel anytime'
  //           ]
  //         ],
  //         includes:   null,
  //         price:      'From $1,400<sub>/mo</sub>',
  //         priceLabel: 'Monthly retainer',
  //         cta:        'Get ongoing support'
  //       }
  //     ]
  //   }
  // }

}
</script>
