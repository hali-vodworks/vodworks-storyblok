<template>
  <div v-if="!pageData || !pageData.story">
    <div class="text-center py-20">
      <h2 class="text-2xl font-bold">Oops! Page not found</h2>
      <p class="mt-8">The requested content is not available.</p>
    </div>
  </div>
  <div v-else>
    <!--------------------------------- HERO -------------------------------------------->
    <PageHeroWithAnimatedTitle v-if="heroContent.title" :data="{
      title: heroContent.title,
      animated_word: heroContent.animated_word,
      description: heroContent.description
    }" />
    <!----------------------------------------------------------------------------------->

    <!-------------------------- Social Projects Listing -------------------------------->
    <section v-if="socialProjects" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="mx-auto md:max-w-4/5">
          <template v-for="(project, i) in socialProjects.social_projects">
            <div :key="i" class="default-card card-utilities hvr-effect text-left mb-4 lg:mb-10">
              <div class="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 items-center lg:gap-16">
                <div>
                  <div class="w-full flex items-center">
                    <img :src="project.content.project_icon.filename" :alt="project.content.project_icon.alt" />
                    <div class="px-4">
                      <h6 class="color-intense-grey">{{ project.content.project_city }}</h6>
                      <h4 class="">{{ project.content.project_name }}</h4>
                    </div>
                  </div>
                  <p class="my-4">{{ project.content.description }}</p>

                  <!-- eslint-disable vue/no-v-html -->
                  <div class="text-card sproject-list" v-html="$md.render(project.content.features)"></div>

                  <div v-if="project.content.technologies.filename" class="mt-8">
                    <img :src="project.content.technologies.filename" :alt="project.content.technologies.alt" />
                  </div>
                  <a :href="project.content.project_url" target="_blank" class="btn-text mt-8 inline-block">
                    Read More
                  </a>
                </div>
                <div class="hidden lg:inline-block zoom-in overflow-hidden">
                  <img class="w-full" :src="project.content.thumbnail.filename" :alt="project.content.thumbnail.alt" />
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!------------------------------- Get in Touch with us------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Discuss Your Social Project With Us!',
      isDarkSectionAtTop: false
    }" />
    <!----------------------------------------------------------------------------------->
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    try {
      const path =
        context.route.path === '/'
          ? 'home'
          : context.route.path.replace(/^\/+/, '')
      const pageDataRes = await context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'social-projects-container.social_projects'
      })
      return {
        pageData: pageDataRes.data,
      }
    }
    catch (err) {
      // eslint-disable-next-line no-console
      console.error("404 happened on route:", context.route.path)
      // eslint-disable-next-line no-console
      console.error(err.response?.data || err)
      return { pageData: null }
    }
  },
  head() {
    return {
      title: 'Social Projects in Software development | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Explore Vodworks diverse range of social projects, dedicated to creating a positive impact and fostering meaningful change in communities worldwide.",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Social Projects in Software development | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Explore Vodworks social projects.",
        },
      ],
    }
  },
  computed: {
    heroContent() {
      // Guard against pageData not loaded yet
      const body = this.pageData?.story?.content?.body || []
      // Find the hero section
      const hero = body.find(obj => obj.component === 'simple_hero_section')
      // Return empty object if not found to avoid runtime errors
      return hero || {}
    },
    socialProjects() {
      const body = this.pageData?.story?.content?.body || []
      const projects = body.find(obj => obj.component === 'social-projects-container')
      return projects || { social_projects: [] }
    }
  }
}
</script>