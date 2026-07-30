<template>
  <a target="_blank" :href="url" class="flex items-center gap-2">
    <img :src="`~/assets/img/icons/${icon}`" :alt="label + '-icon'" /> {{ label }}
  </a>
</template>

<script>
export default {
  name: 'ChatButton',
  props: {
    url: { type: String, required: true },
    icon: { type: String, required: true },
    label: { type: String, required: true }
  }
}
</script>