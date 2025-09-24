<template>
    <h1 v-in-viewport.once class="w-full">{{ data.title }} <span class="bgFill"><span class="textClip color-white">{{
        data.animatedWords }}</span></span>
    </h1>
</template>

<script>
export default {
    name: 'AnimatedHeading1',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>