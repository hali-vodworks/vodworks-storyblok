<template>
    <h1 v-in-viewport.once :class="data.isBgDark ? 'color-white' : ''">{{ data.simpleWords }} <span class="bgFill"><span
                class="textClip" :class="data.isBgDark ? 'color-white' : ''"> {{ data.animatedWords }}</span></span>
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