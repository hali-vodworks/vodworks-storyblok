<!-- eslint-disable vue/no-v-html -->
<template>
    <section v-if="data" class="lg:py-32 py-14 single-cs bgColor-tertiary-black">
        <div class="mx-auto container color-white md:max-w-4/5">
            <div class="text-center md:max-w-3/5 mx-auto">
                <h3 v-if="data.title">{{ data.title }}</h3>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-2 items-center gap-8 md:gap-16 mt-8 lg:mt-24">
                <div>
                    <div v-html="$storyapi.richTextResolver.render(data.description)"></div>
                    <NuxtLink :to="data.cta_url" class="btn-primary btn-lg mt-16 inline-block">{{ data.cta_text }}
                    </NuxtLink>
                </div>
                <div v-if="data.embedded_src" class="video-container">
                    <iframe :src="data.embedded_src"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CsFeaturedSectionWithEmbeddedVideo',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>