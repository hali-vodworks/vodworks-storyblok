<template>
  <div class="about-author mt-16 bgColor-normal-grey p-4">
    <div class="flex py-8 author-summary">
      <div class="rounded-full mr-4 avatar">
        <img class="rounded-full" :src="author.content.Avatar.filename" alt="Author Avatar" loading="lazy" />
      </div>
      <div>
        <h3>About the Author</h3>
        <div class="flex items-center gap-4">
          <p class="font-bold text-big">{{ author.content.Name }}</p>
          <a v-if="author.content.Linkedin_Url" target="_blank" :href="author.content.Linkedin_Url">
            <img src="~/assets/img/icons/Linkedin-icon.svg" alt="Linkedin-icon" loading="lazy" />
          </a>
        </div>
        <p class="mt-1">{{ author.content.Description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutAuthor',
  props: {
    author: { type: Object, required: true }
  }
}
</script>