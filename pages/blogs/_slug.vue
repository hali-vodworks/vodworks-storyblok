<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <component :is="pageData.story.content.component" v-if="pageData.story.content.component"
      :key="pageData.story.content._uid" :blok="pageData.story.content" :getBlogData="relatedPosts" />
  </div>
</template>
<script>

export default {
    async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path

    // 1️⃣ Fetch main blog post
    const pageDataRes = await context.app.$storyapi.get(`cdn/stories/${path}`, {
      version: 'published',
      resolve_relations: 'blog-container.blog,blog.author,blog.co_author,blog.FAQs'
    })

    const currentBlog = pageDataRes.data.story
    const categoryIds = currentBlog.content.categories || []

    // 2️⃣ Fetch automatic related posts based on categories
    let relatedPosts = { stories: [] }

    if (categoryIds.length > 0) {
      const relatedPostsRes = await context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'blogs/',
        per_page: 4,
        excluding_slugs: currentBlog.full_slug,
        filter_query: {
          categories: {
            any_in_array: categoryIds.join(',') // Works with UUID array
          }
        },
        sort_by: 'first_published_at:desc'
      })
      relatedPosts = relatedPostsRes.data
    }

    return {
      pageData: pageDataRes.data,
      relatedPosts
    }
  },

  head() {
    return {
      title: `${this.pageData.story.content.meta_title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pageData.story.content.meta_description}`,
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.pageData.story.content.meta_title}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${this.pageData.story.content.meta_description}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.pageData.story.content.featured_image.filename}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://vodworks.com/${this.pageData.story.full_slug}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.pageData.story.content.featured_image.filename}`,
        },
      ]
    }
  },
  computed: {
    getBlogData() {
      return this.relatedPosts
    },
  }
}
</script>