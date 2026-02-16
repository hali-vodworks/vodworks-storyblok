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
            </div>

            <!-- CARDs -->
            <div class="row">
                <div class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-8 mt-8 lg:mt-16">
                    <template v-for="(card, index) in data.cards">
                        <div :key="index" class="default-card card-utilities text-left">
                            <h4> {{ card.title }}</h4>
                            <p class="flex-grow-1" v-html="$md.render(card.description)"></p>
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
    }
}
</script>