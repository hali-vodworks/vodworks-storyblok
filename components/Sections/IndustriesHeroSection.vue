<template>
    <section v-if="data" class="lg:py-32 py-14 bgColor-tertiary-black">
        <div class="mx-auto container">
            <div class="text-center mx-auto md:max-w-3/5">
                <h1 class="color-white">{{ data.title }}</h1>
                <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">{{ data.description }}</p>
                <div v-if="data.has_btn_url === true">
                    <NuxtLink :to="data.cta_url" class="btn-primary btn-lg  inline-block">
                        {{ data.cta_text }}
                    </NuxtLink>
                </div>
                <div v-if="data.has_btn_url === false">
                    <div v-scroll-to="data.cta_url" class="btn-primary btn-lg inline-block cursor-pointer">
                        {{ data.cta_text }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IndustriesHeroSection',
    props: {
        data: {
            type: Object,
            default: null
        }
    }
}
</script>