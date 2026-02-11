<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section v-if="data" class="lg:py-32 py-14" :class="data.isDarkMode ? 'bgColor-tertiary-black color-white' : ''">
        <div class="mx-auto container">
            <div class="text-center">
                <h2>{{ data.content.title }}</h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-8 mt-8 lg:mt-16">
                <template v-for="(card, i) in data.content.list">
                    <div :key="i" class="my-4 lg:my-4 text-center md:text-left">
                        <AnimatedHeading3 :data="{
                            title: card.title,
                            isBgDark: data.isDarkMode 
                        }" />
                        <p class="text-regular">{{ card.description }}</p>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FeaturedCards3sInRow',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>