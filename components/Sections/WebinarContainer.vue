<template>
  <div class="lg:px-60 px-5 lg:py-24 py-20 overflow-hidden">
    <!-- title -->
    <div class="lg:text-center pb-10 px-2 lg:px-0">
      <h1 class="font-arial-black text-4xl lg:text-5xl">Webinars</h1>
      <p class="text-h-gray mt-4">
        Join our experts as they discuss various topics that are key to their
        success within the industry.
      </p>
      <template v-for="webinar in blok.webinars">
        <recent-posts :key="webinar.id" :details="webinar"></recent-posts>
      </template>
    </div>
    <NuxtLink
      to="/webinars"
      class="text-x-gray inline-block mt-8 underline uppercase tracking-wider text-base"
    >
      View All Webinars >
    </NuxtLink>
  </div>
</template>

<script>
import RecentPosts from '~/components/Sections/RecentPosts'

export default {
  name: 'WebinarContainer',
  components: {
    RecentPosts,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
