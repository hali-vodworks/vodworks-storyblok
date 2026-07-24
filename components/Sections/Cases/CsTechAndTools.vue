<template>
    <section v-if="data" class="lg:py-32 py-14 single-cs bgColor-tertiary-black">
        <div class="outcome mx-auto container">
            <div class="md:max-w-4/5 mx-auto color-white">
                <div class="text-center">
                    <h3>{{ data.title }}</h3>
                </div>

                <div v-if="data.description" v-html="$md.render(data.description)" class="mt-8"  />

                <div v-if="data.cards && data.cards.length" class="grid md:grid-cols-2 gap-4">
                    <div v-for="(card, i) in data.cards" :key="card._uid || i"
                        v-html="$md.render(card.description)">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CsTechAndTools',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>