<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="single-author">

    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <div v-if="getAuthoData !== ''" class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0">
          <div class="avatar rounded-full mr-4 bgColor-grey md:col-span-2">
            <img class="rounded-full" :src="getAuthoData.content.Avatar.filename" alt="Author Avatar" />
          </div>
          <div class="md:col-span-9">
            <h1 class="heading-2 font-bold flex items-center gap-4 mt-4 md:mt-0">
              {{ getAuthoData.content.Name }}
            </h1>
            <h6 class="mt-2 opacity-80">
              {{ getAuthoData.content.Designation }}
            </h6>
            <p class="font-light mt-4 opacity-80">
              {{ getAuthoData.content.Description }}
            </p>
            <a class="font-medium underline color-primary-red mt-4 flex gap-2" target="_blank"
              :href="getAuthoData.content.Linkedin_Url">View LinkedIn Profile <img
                src="~assets/img/icon/external-link.svg" alt="Lnkedin-icon" /></a>
          </div>
        </div>
      </div>
    </section>

    <!------------------------------ Posts Listing ---------------------------->
    <div class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="single-cs text-center">
          <h3 v-if="getAuthoData !== ''" v-in-viewport.once>Latest posts by <span class="bgFill"><span
                class="textClip">{{ getAuthoData.content.Name }}</span></span></h3>
        </div>
        <!--Listing of Blog Posts -->
        <div v-if="getFilteredBlogPosts && getFilteredBlogPosts.length > 0"
          class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 lg:gap-8 mt-8 lg:mt-16">
          <div class="md:col-span-12 articles">
            <div class="grid lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-8">
              <template v-for="(blog, index) in getFilteredBlogPosts">
                <article :key="index" class="zoom-in overflow-hidden cursor-pointer mb-8 lazyload">
                  <BlogPostCard :data="{
                    blog_post: blog,
                    co_author: true
                  }" />
                </article>
              </template>
            </div>
          </div>
        </div>
        <!-- Empty State illustration-->
        <div v-else class="row">
          <div class="col-lg-12 mt-8">
            <div class="empty-state text-center">
              <img src="~assets/img/empty-state.svg" alt="Empty State" />
              <p class="mt-8">No blog posts found for this author. Stay tuned — new content is on the way!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!----------------------------------------------------------------------------->

    <!------------------------------- Subscribe To Our Blog-------------------------------------->
    <SubscribeToOurBlog />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!------------------------------------------------------------------------------------------>
  </div>
</template>

<script>
export default {
  async asyncData({ params, route, app, error }) {
    // 🚨 If no slug (like visiting /team), force 404
    if (!params.slug) {
      return error({ statusCode: 404, message: 'Co-author not found' })
    }
    try {
      const path = route.path === '/' ? '/home' : route.path

      const [pageDataRes, allArticlesRes] = await Promise.all([
        app.$storyapi.get(`cdn/stories/${path}`, {
          version: 'published',
        }),
        app.$storyapi.get('cdn/stories/', {
          version: 'published',
          starts_with: 'blogs/',
          per_page: 100,
          resolve_relations: 'blog.categories,blog.author,blog.co_author',
        }),
      ])
      return {
        pageData: pageDataRes.data,
        allArticles: allArticlesRes.data,
      }
    } catch (e) {
      // 🚨 Story not found → show custom error page
      return error({ statusCode: 404, message: 'Co-author not found' })
    }
  },
  data() {
    return {
      story: { content: {} },
    }
  },

  head() {
    const CoAuthorName = this.getAuthoData?.content?.Name || 'Co-author'
    const CoAuthorDesc = `Explore blog posts by ${CoAuthorName} at Vodworks.` // ||  this.getAuthoData?.content?.Description
    return {
      title: `${CoAuthorName} – Blog Co-author at Vodworks`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: CoAuthorDesc,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${CoAuthorName} – Blog Co-author at Vodworks`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: CoAuthorDesc,
        },
      ],
    }
  },
  computed: {
    getAuthoData() {
      return this.pageData.story
    },
    getFilteredBlogPosts() {
      // current author's uuid (from the page you’re on)
      const CoAuthorUuid = this.pageData.story.uuid
      return this.allArticles.stories
        .filter(blog => {
          return blog.content.co_author?.uuid === CoAuthorUuid
        })
        .sort(
          (a, b) =>
            new Date(b.content.published_date) -
            new Date(a.content.published_date)
        )
    },


  },
}
</script>