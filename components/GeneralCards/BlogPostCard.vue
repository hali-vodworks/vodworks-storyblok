<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <NuxtLink :to="`/blogs/${data.blog_post.slug}` + '/'">
        <div v-if="getFeaturedImage(data.blog_post)" class="blog-thumbnail-wrapper">
            <img :src="getFeaturedImage(data.blog_post).filename" class="scaleable-img"
                :alt="getFeaturedImage(data.blog_post).alt" />
        </div>
        <div class="article-content">

            <div class="card-summary flex items-center gap-2 justify-between">

                <div>
                    <!-- If this card is being rendered for co-author filter -->
                    <div v-if="data.co_author === true && data.blog_post.content.co_author && data.blog_post.content.co_author !== ''"
                        class="flex items-center gap-2">
                        <div class="author rounded-full bgColor-grey">
                            <img class="rounded-full"
                                :src="data.blog_post.content.co_author.content?.short_img.filename"
                                alt="Co-Author Avatar" />
                        </div>
                        <p class="text-sm color-dark-grey">{{ data.blog_post.content.co_author.content?.Name }}</p>
                    </div>

                    <!-- Else If we have main author -->
                    <div v-else-if="data.blog_post.content.author && data.blog_post.content.author !== ''"
                        class="flex items-center gap-2">
                        <div class="author rounded-full bgColor-grey">
                            <img class="rounded-full" :src="data.blog_post.content.author.content?.short_img.filename"
                                alt="Author Avatar" />
                        </div>
                        <p class="text-sm color-dark-grey">{{ data.blog_post.content.author.content?.Name }}</p>
                    </div>

                    <!-- Fallback: No author or co-author -->
                    <div v-else class="flex items-center gap-2">
                        <div class="author rounded-full bgColor-grey">
                            <img class="rounded-full" src="~/assets/img/vw-icon.png" alt="Author Avatar" />
                        </div>
                        <p class="text-sm color-dark-grey">Vodworks</p>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <img class="clock-icon" src="~/assets/img/icons/clock-icon.svg" alt="clock-icon" />
                    <p class="text-sm color-dark-grey">{{ data.blog_post.content.read_time }} min read</p>
                </div>
            </div>

            <p class="text-sm color-intense-grey font-medium mb-2 ctas_wrapper">
                <template v-for="(cat, catIndex) in data.blog_post.content.categories">
                    <span :key="catIndex">{{ cat.content.name }}<span>, </span></span>
                </template>
            </p>
            <h4 class="line-clamp-3">
                {{ data.blog_post.content.title }}
            </h4>

            <p class="btn-text mt-4 inline-block">Read More</p>

        </div>
    </NuxtLink>
</template>

<script>


export default {
    name: 'BlogPostCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    },

    methods: {
        getFeaturedImage(blog) {
            return blog.content.featured_image
        },
    }

}
</script>