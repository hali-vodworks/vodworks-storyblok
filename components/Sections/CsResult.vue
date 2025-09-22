<template>
  <section v-if="data" class="single-cs lg:py-32 py-14 bgColor-normal-grey">
    <div class="mx-auto container">
      <div class="md:max-w-4/5 mx-auto">
        <div class="text-center">
          <AnimatedHeading :data="{
            simpleWords: null,
            animatedWords: data.title,
            isBgDark: false
          }" />
        </div>
        <div v-html="$md.render(data.description)">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CsResult',
  props: {
    data: {
      type: Object,
      default: null
    },
  }
}
</script>