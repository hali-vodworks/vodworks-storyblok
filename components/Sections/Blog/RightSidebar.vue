<template>
  <div class="md:col-span-3">
    <div class="cs-cta">
      <img src="~/assets/img/case-bg.webp" alt="img" loading="lazy" />
      <div class="content">
        <NuxtLink to="/cases/" class="btn-primary btn-md block mt-4">More Case Studies</NuxtLink>
      </div>
    </div>
    <div class="blog-rightsidebar">
      <div class="wrapper">
        <img src="~/assets/img/dev-partner.webp" alt="img" loading="lazy" />
        <div class="content">
          <h4 class="color-white">Accelerate Your Projects With Our On-Demand Developers</h4>
          <NuxtLink to="/contact/" class="btn-primary btn-md block mt-4">Let's Talk</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'RightSidebar',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>