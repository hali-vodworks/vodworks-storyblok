<template>
  <div>
    <!------------------------------Hero section ---------------------------------------------->
    <PageHeroWithAnimatedTitle :data="{
      title: 'Blog',
      animated_word: '',
      description: 'Stay up-to-date with our team updates, industry insights, tech guides and more!'
    }" />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------ Posts Listing --------------------------------------------->
    <div class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div>
          <ul class="cats">
            <li v-for="(cat, index) in blog_cats" :key="index"
              class="text-regular bgColor-light-grey color-primary-black" :class="{ active: currentFilter === cat }"
              @click="setFilter(cat)">
              {{ cat }}
            </li>
          </ul>
        </div>
        <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 lg:gap-8 mt-8 lg:mt-16">
          <div class="md:col-span-12 articles">
            <div class="grid lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-8">
              <template v-for="(blog, index) in getBlogData">
                <!-- v-if="currentFilter === 'All' || blog.content.categories.some(cat => cat.content?.name === currentFilter)" -->
                <article 
                  v-if="currentFilter === blog.content.categories[0].name || currentFilter === 'All'"
                  :key="index" class="zoom-in overflow-hidden cursor-pointer mb-8 lazyload">
                  <BlogPostCard :data="{
                    blog_post: blog
                  }" />
                </article>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Subscribe To Our Blog------------------------------------->
    <SubscribeToOurBlog />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title: `Let's strategize`,
      isDarkSectionAtTop: true
    }" />
    <!------------------------------------------------------------------------------------------>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const [allArticlesRes] = await Promise.all([
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'blogs/',
        per_page: 100,
        resolve_relations: 'blog.author,blog.categories'
      }),
    ])
    return {
      allArticles: allArticlesRes.data,
    }
  },
  data() {
    return {
      story: { content: {} },
      currentFilter: 'All',
      blog_cats: ['All', 'Business', 'News', 'Technology'],
    }
  },
  head() {
    return {
      title: 'Blog | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Dive into a wealth of articles covering advanced technologies, latest industry events, and updates on Vodworks company news for insightful perspectives.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ''
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Blog | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Explore articles about advanced technologies, newest industry events and Vodworks company news.",
        },
      ],
    }
  },
  computed: {
    getBlogData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.allArticles.stories.sort((a, b) => new Date(b.content.published_date) - new Date(a.content.published_date))
    },
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
    getPublishDate(blog) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(blog.content.published_date.split(' ')[0]).toLocaleString(
        'en-US',
        options
      )
    },
    setFilter(filter) {
      this.currentFilter = filter;
    },
  },
}
</script>