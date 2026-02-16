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

                <div class="myTvMovies-cs-cards">
                    <NuxtLink to="/cases/vidscape/"><img class="default-card card-utilities card"
                            src="~/assets/img/cases/mytvmovies/VS-wv.png" alt="image" /></NuxtLink>
                    <img class="operator" src="~/assets/img/cases/mytvmovies/plus.svg" alt="image" />
                    <img class="default-card card-utilities card" src="~/assets/img/cases/mytvmovies/roe-r1.png"
                        alt="image" />
                    <img class="operator" src="~/assets/img/cases/mytvmovies/arrow-right.svg" alt="image" />
                    <img class="default-card card-utilities card" src="~/assets/img/cases/mytvmovies/mytvmovies-com.png"
                        alt="image" />
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
