<template>
    <section class="lg:py-32 py-14">
        <div class="mx-auto container">
            <div class="mx-auto w-full lg:w-3/5">
                <div class="text-center">
                    <AnimatedHeading :data="{
                        simpleWords: payload.title,
                        animatedWords: payload.animated_word,
                        isBgDark: false
                    }" />
                </div>
                <div class="mt-8 lg:mt-16">
                    <AccordionNew :payload="payload.list_of_faqs" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: 'FAQs',
    props: {
        payload: {
            type: Object,
            default: null
        },
    }
}
</script>