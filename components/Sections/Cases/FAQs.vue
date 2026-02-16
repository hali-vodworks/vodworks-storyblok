<template>
  <section class="lg:py-32 py-14">
    <div class="mx-auto container">
      <div class="mx-auto w-full lg:w-3/5">
        <div class="text-center">
          <AnimatedHeading :data="{
            simpleWords: data.title,
            animatedWords: data.animated_word,
            isBgDark: false
          }" />
        </div>

        <div class="mt-8 lg:mt-16">
          <div v-for="(faq, i) in faqs" :key="i" class="faq py-4">
            <div class="flex items-center justify-between gap-8 cursor-pointer"
                 @click="toggleAnswer(faq.id)">
              <div class="question">
                <h4 class="font-medium">{{ faq.content.question }}</h4>
              </div>
              <div :class="['faq-icon', { open: faq.isOpen }]">
                <img src="~/assets/img/icons/faq-arrow.svg" alt="arrow" />
              </div>
            </div>

            <div :class="['answer', { open: faq.isOpen }]">
              <div class="mt-4" v-html="$md.render(faq.content.answer)"></div>
              <NuxtLink v-if="faq.content.btn_url"
                        :to="faq.content.btn_url"
                        class="btn-text mt-4 lg:mt-6 inline-block cursor-pointer">
                {{ faq.content.btn_txt }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQs',
  props: {
    data: {
      type: Object,
      default: null
    },
  },

  data() {
    return {
      faqs: [] // reactive copy of FAQ list
    }
  },

  watch: {
    // populate faqs when prop changes
    'data.list_of_faqs': {
      immediate: true,
      handler(list) {
        if (list) {
          this.faqs = list.map(faq => ({ ...faq, isOpen: false }))
        }
      }
    }
  },

  methods: {
    toggleAnswer(currentClickedId) {
      this.faqs = this.faqs.map(faq => {
        // toggle clicked FAQ
        if (faq.id === currentClickedId) {
          return { ...faq, isOpen: !faq.isOpen }
        }
        // close all others
        return { ...faq, isOpen: false }
      })
    }
  }
}
</script>