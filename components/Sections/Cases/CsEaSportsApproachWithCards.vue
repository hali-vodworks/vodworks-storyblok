<template>
    <section v-if="data" class="single-cs lg:py-32 py-14 bgColor-normal-grey">
        <div class="mx-auto container">
            <div class="row md:max-w-4/5 mx-auto">
                <div class="text-center">
                    <AnimatedHeading :data="{
                        simpleWords: null,
                        animatedWords: data.title,
                        isBgDark: false
                    }" />
                </div>
                <div class="mt-8 lg:mt-16 text-left" v-html="$md.render(data.description)"> </div>

                <div :style="resolveBackground('/img/border-design.svg')"
                    class="bg-no-repeat approach grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto mt-12 lg:mt-24">
                    <template v-for="card, i in data.cards">
                        <div :key="i" class="approach-card">
                            <img :src="card.icon.filename" alt="icon" />
                            <h3 class="my-4">{{ card.title }}</h3>
                            <div class="my-auto" v-html="$md.render(card.description)"></div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'CsApproachWithCards',
    props: {
        data: {
            type: Object,
            default: null
        },
    },
    methods: {
        resolveBackground(path) {
            return {
                backgroundImage: `url(${require('~/assets' + path)})`
            }
        }
    }
}
</script>