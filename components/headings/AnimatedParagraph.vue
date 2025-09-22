<template>
    <p v-in-viewport.once class="color-white"> <span class="bgFill"><span class="textClip color-white font-semibold">{{
        data.simpleWords }}</span></span> {{
                    data.animatedWords }}</p>
</template>

<script>
export default {
    name: 'AnimatedParagraph',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>