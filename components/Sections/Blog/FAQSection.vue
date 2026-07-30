<template>
  <section class="lg:py-32 py-14 bgColor-normal-grey">
    <div class="mx-auto container">
      <div class="mx-auto w-full lg:w-3/5">
        <div class="text-center">
          <AnimatedHeading :data="{ simpleWords: 'Frequently Asked', animatedWords: 'Questions', isBgDark: false }" />
        </div>
        <div class="mt-8 lg:mt-16">
          <AccordionNew :payload="faqs" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQSection',
  props: { faqs: { type: Array, default: () => [] } }
}
</script>