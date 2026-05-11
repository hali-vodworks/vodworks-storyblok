<template>
  <div class="header bgColor-light-grey py-4 md:py-2">
    <header class="flex flex-row items-center mx-auto container">
      <!-- logo -->
      <NuxtLink to="/" class="lg:justify-self-end mr-5 cursor-pointer" active-class="bg-transparent">
        <img class="logo-img" src="~/assets/img/vw-logo.svg" alt="Vodworks Logo" loading="lazy" />
      </NuxtLink>

      <!-- Main Navigation bar -->
      <ul class="hidden lg:inline-block">
        <li v-for="(item, index) in Navigations.navigationItems" :key="index" class="relative color-primary-black"
          :class="item.list ? 'dropdown-parent hasDropdown' : ''">
          <NuxtLink :to="item.path" :target="item.newTab ? '_blank' : null"
            :rel="item.newTab ? 'noopener noreferrer' : null" class="flex gap-1 items-center">
            <span v-if="item.isNew" class="logo-dot"></span>
            {{ item.name }}
            <div v-if="item.list">
              <TiltedArrow />
            </div>
            <span v-if="item.isNew" class="rounded">NEW</span>
          </NuxtLink>

          <ul v-if="item.list" class="dropdown bgColor-light-grey gap-8 p-4" :class="{
            'mega-menu': item.isMegaMenu,
            'has-social-media': item.path === '/blogs/'
          }">
            <!-- Column 1: list items -->
            <div class="list-items">
              <li v-for="(childItem, childIndex) in item.list" :key="childIndex">
                <NuxtLink :to="childItem.path" class="inline-block">
                  {{ childItem.name }}
                  <p class="font-normal mt-1">{{ childItem.description }}</p>
                </NuxtLink>
              </li>
            </div>

            <!-- Column 2: social media (only for blogs) -->
            <div v-if="item.path === '/blogs/'" class="social-media">
              <ul>
                <li><a class="flex items-center gap-2 underline" target="_blank"
                    href="https://www.linkedin.com/company/vodworks" rel="noopener noreferrer nofollow"><img
                      src="~/assets/img/icons/linkedin.svg" alt="icon" loading="lazy" /> LinkedIn <img
                      src="~/assets/img/icons/arrow-up-right.svg" alt="icon" loading="lazy" /></a></li>
                <li><a class="flex items-center gap-2 underline" target="_blank"
                    href="https://www.youtube.com/@vodworks" rel="noopener noreferrer nofollow"><img
                      src="~/assets/img/icons/youtube.svg" alt="icon" loading="lazy" /> YouTube <img
                      src="~/assets/img/icons/arrow-up-right.svg" alt="icon" loading="lazy" /></a></li>
              </ul>
            </div>
          </ul>
        </li>
      </ul>

      <!-- button -->
      <div class="header-btn hidden lg:inline-block invisible lg:visible">
        <NuxtLink to="/contact/" class="btn-primary btn-md">
          Get in touch
        </NuxtLink>
      </div>

      <!-- icon menu -->
      <img v-show="!showMenu" src="~/assets/img/icons/Burger.svg"
        class="self-center justify-self-end lg:hidden cursor-pointer hamburger ml-auto" alt="hamburger icon" loading="lazy"
        @click="showMenu = true" />
      <div v-show="showMenu" class="self-center justify-self-end lg:hidden cursor-pointer ml-auto" @click="showMenu = false">
        <img class="cross-icon" src="~/assets/img/icons/x.svg" alt="cross icon" loading="lazy" />
      </div>
    </header>

    <!-- Mobile Navigation -->
    <div class="mobileNavigation">
      <ul v-show="showMenu" class="text-h-font lg:hidden flex flex-col items-start px-8 py-8 gap-2">
        <li v-for="(item, index) in Navigations.navigationItems" :key="index" class="relative dropdown-parent w-full">
          <!-- Parent Row -->
          <div class="flex items-center justify-between" :class="{ isActive: activeMobileDropdown === index }">
            <NuxtLink :to="item.mobilePath || item.path" :target="item.newTab ? '_blank' : null"
              @click.native="showMenu = false">
              <span v-if="item.isNew" class="logo-dot"></span>
              {{ item.name }} <span v-if="item.isNew"
                class="rounded">NEW</span>
            </NuxtLink>
            <!-- Arrow -->
            <TiltedArrow v-if="item.hasDropDown" @click.native.stop="toggleMobileDropdown(index)" />
          </div>
          <!-- Dropdown -->
          <ul v-if="item.hasDropDown && activeMobileDropdown === index" class="px-4 py-2">
            <li v-for="(child, childIndex) in item.list" :key="childIndex" class="mb-3">
              <NuxtLink :to="child.path" class="inline-block" @click.native="showMenu = false">
                {{ child.name }}
                <p v-if="child.description" class="text-sm opacity-70 mt-1 font-normal">
                  {{ child.description }}
                </p>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import AllRoutes from '~/static/routes'
import TiltedArrow from '@/components/icons/TiltedArrow.vue'

export default {
  name: 'BaseHeader',
  components: {
    TiltedArrow
  },
  data() {
    return {
      activeMobileDropdown: null,
      showMenu: false,
      isServicesActive: false,
      isIndustriesActive: false,
      isContentActive: false,
      isCompanyActive: false,
      Navigations: AllRoutes,
    }
  },

  methods: {
    toggleMobileDropdown(index) {
      this.activeMobileDropdown =
        this.activeMobileDropdown === index ? null : index
    }
  }
}
</script>