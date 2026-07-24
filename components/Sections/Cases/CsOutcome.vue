<template>
    <section v-if="data" class="lg:py-32 py-14 single-cs bgColor-tertiary-black">
        <div class="outcome mx-auto container">
            <div class="md:max-w-4/5 mx-auto">
                <div class="text-center">
                    <AnimatedHeading :data="{
                        simpleWords: null,
                        animatedWords: data.title,
                        isBgDark: true
                    }" />
                </div>
                <div v-if="data.description" class="color-white" v-html="$md.render(data.description)"></div>
                <ul v-if="data.cards && data.cards.length" class=" lg:pt-16 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-4">
                    <template v-for="card, i in data.cards">
                        <li :key="i">
                            <h4 class="color-primary-red">{{ card.title }}</h4>
                            <div class="color-white" v-html="$md.render(card.description)"> </div>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CsOutcome',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>