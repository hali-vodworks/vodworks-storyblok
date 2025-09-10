<template>
    <h2 v-in-viewport.once :class="data.isBgDark ? 'color-white' : ''">{{ data.simpleWords }} <span class="bgFill"><span
                class="textClip" :class="data.isBgDark ? 'color-white' : ''"> {{ data.animatedWords }}</span></span>
    </h2>
</template>

<script>
export default {
    name: 'AnimatedHeading',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>