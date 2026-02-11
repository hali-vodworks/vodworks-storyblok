<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="default-card card-utilities hvr-effect">
        <img class="hvr-top" :src="data.icon.filename" :alt="data.icon.alt" />
        <h4 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ data.title }}</h4>
        <p class="text-card flex-grow-1">{{ data.description }}</p>
        <div v-scroll-to="data.cta_url" class="btn-text mt-8 inline-block cursor-pointer">
            {{ data.cta_text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndustryCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    }
}
</script>
  
  