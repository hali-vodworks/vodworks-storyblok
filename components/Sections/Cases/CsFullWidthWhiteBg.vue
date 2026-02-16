<template>
    <section v-if="data" class="lg:py-32 py-14 single-cs">
        <div class="mx-auto container">
            <div class="row md:max-w-4/5 mx-auto">
                <div class="text-center">
                    <h3> {{ data.title }}</h3>
                </div>
                <div class="mt-8" v-html="$md.render(data.description)"></div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'FullWidthWhiteBgSection',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>