<template>
  <div :class="['flex author-summary items-center', extraClass]">
    <div class="w-12 h-12 rounded-full mr-4 overflow-hidden">
      <img :src="avatar" alt="Author Avatar" loading="lazy" />
    </div>
    <div>
      <p class="font-bold color-white">
        <NuxtLink :to="link"><span>{{ name }}</span></NuxtLink>
      </p>
      <p v-if="role" class="mt-0 text-small color-main-grey">{{ role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorCard',
  props: {
    avatar: { type: String, required: true },
    name: { type: String, required: true },
    link: { type: String, required: true },
    role: { type: String, default: '' },
    extraClass: { type: String, default: '' }
  }
}
</script>