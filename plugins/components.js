import Vue from 'vue'
import Markdown from '~/components/Sections/Markdown.vue'
import Page from '~/components/PostTypes/Page.vue'
import WebinarContainer from '~/components/Sections/WebinarContainer.vue'
import BlogContainer from '~/components/Sections/BlogContainer.vue'
import WorkContainer from '~/components/Sections/WorkContainer.vue'
import Webinar from '~/components/PostTypes/Webinar.vue'
import Blog from '~/components/PostTypes/Blog.vue'


import APITest from '~/components/global/APITest.vue'




import ServiceCard from '~/components/GeneralCards/ServiceCard.vue'
import ServiceCtaCard from '~/components/GeneralCards/ServiceCtaCard.vue'
import IndustryCtaCard from '~/components/GeneralCards/IndustryCtaCard.vue'

import IndustryCard from '~/components/GeneralCards/IndustryCard.vue'

import ServiceLargeCard from '~/components/GeneralCards/ServiceLargeCard.vue'
import CaseStudyCard from '~/components/GeneralCards/CaseStudyCard.vue'
import TestimonialCard from '~/components/GeneralCards/TestimonialCard.vue'
import TeamSlidingCard from '~/components/GeneralCards/TeamSlidingCard.vue'

import PageHeroWithAnimatedTitle from '~/components/Sections/PageHeroWithAnimatedTitle.vue'
import Testimonials from '~/components/Sections/Testimonials.vue'
import CaseStudiesContainer from '~/components/Sections/CaseStudiesContainer.vue'

import FeaturedCTA from '~/components/Sections/FeaturedCTA.vue'
import AboutVodworks from '~/components/Sections/AboutVodworks.vue'

import GeneralCTA from '~/components/Sections/GeneralCTA.vue'
import BenefitsOfChoosingVodworks from '~/components/Sections/BenefitsOfChoosingVodworks.vue'
import OverviewAboutVodworksTeam from '~/components/Sections/OverviewAboutVodworksTeam.vue'
import CustomSoftwareForYourBusiness from '~/components/Sections/CustomSoftwareForYourBusiness.vue'

// ---------------------- Industries ---------------------------------------------------------
import IndustriesHeroSection from '~/components/Sections/IndustriesHeroSection.vue'
import IndustriesSolutionCardsSection from '~/components/Sections/IndustriesSolutionCardsSection.vue'
// ---------------------------------------------------------------------------------------------------
import ArticlesSections from '~/components/Sections/ArticlesSections.vue'

import FeaturedDetailedCtaSection from '~/components/Sections/FeaturedDetailedCtaSection.vue'
import Accordion from '~/components/Sections/Accordion.vue'








import GetInTouchWithUs from '~/components/Sections/GetInTouchWithUs.vue'
import FeaturedCards3sInRow from '~/components/Sections/FeaturedCards3sInRow.vue'

import ToolsAndTechs from '~/components/Sections/ToolsAndTechs.vue'



Vue.component('APITest', APITest)



// General Cards
Vue.component('ServiceCtaCard', ServiceCtaCard)
Vue.component('IndustryCtaCard', IndustryCtaCard)
Vue.component('ServiceCard', ServiceCard)
Vue.component('ServiceLargeCard', ServiceLargeCard)
Vue.component('CaseStudyCard', CaseStudyCard)
Vue.component('TestimonialCard', TestimonialCard)
Vue.component('TeamSlidingCard', TeamSlidingCard)
Vue.component('IndustryCard', IndustryCard)

// Containers
Vue.component('Testimonials', Testimonials)
Vue.component('CaseStudiesContainer', CaseStudiesContainer)

// Sections
Vue.component('PageHeroWithAnimatedTitle', PageHeroWithAnimatedTitle)
Vue.component('GetInTouchWithUs', GetInTouchWithUs)
Vue.component('GeneralCTA', GeneralCTA)
Vue.component('FeaturedCTA', FeaturedCTA)
Vue.component('AboutVodworks', AboutVodworks)
Vue.component('IndustriesHeroSection', IndustriesHeroSection)

Vue.component('FeaturedCards3sInRow', FeaturedCards3sInRow)
Vue.component('ToolsAndTechs', ToolsAndTechs)
Vue.component('BenefitsOfChoosingVodworks', BenefitsOfChoosingVodworks)
Vue.component('OverviewAboutVodworksTeam', OverviewAboutVodworksTeam)
Vue.component('CustomSoftwareForYourBusiness', CustomSoftwareForYourBusiness)
Vue.component('IndustriesSolutionCardsSection', IndustriesSolutionCardsSection)

Vue.component('ArticlesSections', ArticlesSections)
Vue.component('FeaturedDetailedCtaSection', FeaturedDetailedCtaSection)
Vue.component('Accordion', Accordion)






Vue.component('Markdown', Markdown)
Vue.component('Page', Page)
Vue.component('WebinarContainer', WebinarContainer)
Vue.component('BlogContainer', BlogContainer)
Vue.component('WorkContainer', WorkContainer)
Vue.component('Webinar', Webinar)
Vue.component('Blog', Blog)