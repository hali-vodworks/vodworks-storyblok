<template>
    <h3 v-in-viewport.once class="mb-4 inline-block capitalize"> <span class="bgFill"><span class="textClip"
              :class="data.isBgDark ? 'color-white' : ''">{{ data.title }}</span></span> </h3>
</template>

<script>
export default {
    name: 'AnimatedHeading3',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>