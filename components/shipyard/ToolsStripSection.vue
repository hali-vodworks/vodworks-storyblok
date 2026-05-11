<template>
  <section class="tools-strip">
    <div class="container">
      <p class="tools-label">{{ content.title }}</p>
      <div v-if="content.tools?.length" class="tools-grid">
        <div v-for="(tool, index) in content.tools" :key="tool._uid || tool.name || index" class="tool-pill"
          :style="tool.is_dashed ? 'border-style:dashed;' : ''">
          <div class="tool-icon" :style="tool.icon_style || {}">{{ tool.icon }}</div>
          {{ tool.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ToolsStripSection',
  props: {
    content: {
      type: Object,
      default: () => ({})   // ✅ prevents errors if block is missing in Storyblok
    }
  }

}
</script>
