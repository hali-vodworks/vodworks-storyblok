import Vue from 'vue'
import Markdown from '~/components/Sections/Markdown.vue'
import Page from '~/components/PostTypes/Page.vue'
import Blog from '~/components/PostTypes/Blog.vue'
import WhatOurClientsSay from '~/components/Sections/WhatOurClientsSay.vue'
import ServiceCard from '~/components/GeneralCards/ServiceCard.vue'
import ServiceCtaCard from '~/components/GeneralCards/ServiceCtaCard.vue'
import IndustryCtaCard from '~/components/GeneralCards/IndustryCtaCard.vue'
import ThreeCardsSections from '~/components/Sections/ThreeCardsSections.vue'
import IndustryCard from '~/components/GeneralCards/IndustryCard.vue'
import BlogPostCard from '~/components/GeneralCards/BlogPostCard.vue'
import GetInTouchForm from '~/components/Forms/GetInTouchForm.vue'
import ServiceLargeCard from '~/components/GeneralCards/ServiceLargeCard.vue'
import CaseStudyCard from '~/components/GeneralCards/CaseStudyCard.vue'
import TestimonialCard from '~/components/GeneralCards/TestimonialCard.vue'
import TeamSlidingCard from '~/components/GeneralCards/TeamSlidingCard.vue'
import PageHeroWithAnimatedTitle from '~/components/Sections/PageHeroWithAnimatedTitle.vue'
import CaseStudiesSection from '~/components/Sections/CaseStudiesSection.vue'
import MeetOurTeamSection from '~/components/Sections/MeetOurTeamSection.vue'
import IndustriesListingSection from '~/components/Sections/IndustriesListingSection.vue'
import OurClientsLogos from '~/components/Sections/OurClientsLogos.vue'
import FeaturedCTA from '~/components/Sections/FeaturedCTA.vue'
import AboutVodworks from '~/components/Sections/AboutVodworks.vue'
import GeneralCTA from '~/components/Sections/GeneralCTA.vue'
import BenefitsOfChoosingVodworks from '~/components/Sections/BenefitsOfChoosingVodworks.vue'
import OverviewAboutVodworksTeam from '~/components/Sections/OverviewAboutVodworksTeam.vue'
import CustomSoftwareForYourBusiness from '~/components/Sections/CustomSoftwareForYourBusiness.vue'
import IndustriesHeroSection from '~/components/Sections/IndustriesHeroSection.vue'
import IndustriesSolutionCardsSection from '~/components/Sections/IndustriesSolutionCardsSection.vue'
import ArticlesSections from '~/components/Sections/ArticlesSections.vue'
import Web3ExpertsSection from '~/components/Sections/Web3ExpertsSection.vue'
import FAQs from '~/components/Sections/FAQs.vue'
import FeaturedDetailedCtaSection from '~/components/Sections/FeaturedDetailedCtaSection.vue'
import AccordionNew from '~/components/GeneralCards/AccordionNew.vue'
import Faq from '~/components/GeneralCards/Faq.vue'
import GetInTouchWithUs from '~/components/Sections/GetInTouchWithUs.vue'
import FeaturedCards3sInRow from '~/components/Sections/FeaturedCards3sInRow.vue'
import ToolsAndTechs from '~/components/Sections/ToolsAndTechs.vue'
import SubscribeToOurBlog from '~/components/Sections/SubscribeToOurBlog.vue'
import AnimatedHeading1 from '~/components/headings/AnimatedHeading1'
import AnimatedHeading from '~/components/headings/AnimatedHeading'
import AnimatedHeading3 from '~/components/headings/AnimatedHeading3'
import AnimatedParagraph from '~/components/headings/AnimatedParagraph'

import CtaBand from '~/components/shipyard/CtaBand.vue'
import FaqSection from '~/components/shipyard/FaqSection.vue'
import HeroSection from '~/components/shipyard/HeroSection.vue'
import HowItWorks from '~/components/shipyard/HowItWorks.vue'
import LeadForm from '~/components/shipyard/LeadForm.vue'
import PersonasSection from '~/components/shipyard/PersonasSection.vue'
import PricingSection from '~/components/shipyard/PricingSection.vue'
import TestimonialsSection from '~/components/shipyard/TestimonialsSection.vue'
import ToolsStripSection from '~/components/shipyard/ToolsStripSection.vue'
import VodworksSection from '~/components/shipyard/VodworksSection.vue'
import SecuritySection from '~/components/shipyard/SecuritySection.vue'

Vue.component('CtaBand', CtaBand)
Vue.component('FaqSection', FaqSection)
Vue.component('HeroSection', HeroSection)
Vue.component('HowItWorks', HowItWorks)
Vue.component('LeadForm', LeadForm)
Vue.component('PersonasSection', PersonasSection)
Vue.component('PricingSection', PricingSection)
Vue.component('TestimonialsSection', TestimonialsSection)
Vue.component('ToolsStripSection', ToolsStripSection)
Vue.component('VodworksSection', VodworksSection)
Vue.component('SecuritySection', SecuritySection)

Vue.component('WhatOurClientsSay', WhatOurClientsSay)
Vue.component('AnimatedHeading1', AnimatedHeading1)
Vue.component('AnimatedHeading', AnimatedHeading)
Vue.component('AnimatedHeading3', AnimatedHeading3)
Vue.component('AnimatedParagraph', AnimatedParagraph)

// General Cards
Vue.component('ServiceCtaCard', ServiceCtaCard)
Vue.component('IndustryCtaCard', IndustryCtaCard)
Vue.component('ThreeCardsSections', ThreeCardsSections)
Vue.component('ServiceCard', ServiceCard)
Vue.component('ServiceLargeCard', ServiceLargeCard)
Vue.component('CaseStudyCard', CaseStudyCard)
Vue.component('TestimonialCard', TestimonialCard)
Vue.component('TeamSlidingCard', TeamSlidingCard)
Vue.component('IndustryCard', IndustryCard)
Vue.component('BlogPostCard', BlogPostCard)
Vue.component('GetInTouchForm', GetInTouchForm)
Vue.component('CaseStudiesSection', CaseStudiesSection)
Vue.component('MeetOurTeamSection', MeetOurTeamSection)
Vue.component('IndustriesListingSection', IndustriesListingSection)
Vue.component('OurClientsLogos', OurClientsLogos)
Vue.component('PageHeroWithAnimatedTitle', PageHeroWithAnimatedTitle)
Vue.component('GetInTouchWithUs', GetInTouchWithUs)
Vue.component('GeneralCTA', GeneralCTA)
Vue.component('FeaturedCTA', FeaturedCTA)
Vue.component('AboutVodworks', AboutVodworks)
Vue.component('IndustriesHeroSection', IndustriesHeroSection)
Vue.component('FeaturedCards3sInRow', FeaturedCards3sInRow)
Vue.component('ToolsAndTechs', ToolsAndTechs)
Vue.component('SubscribeToOurBlog', SubscribeToOurBlog)
Vue.component('BenefitsOfChoosingVodworks', BenefitsOfChoosingVodworks)
Vue.component('OverviewAboutVodworksTeam', OverviewAboutVodworksTeam)
Vue.component('CustomSoftwareForYourBusiness', CustomSoftwareForYourBusiness)
Vue.component('IndustriesSolutionCardsSection', IndustriesSolutionCardsSection)
Vue.component('ArticlesSections', ArticlesSections)
Vue.component('Web3ExpertsSection', Web3ExpertsSection)
Vue.component('FAQs', FAQs)
Vue.component('FeaturedDetailedCtaSection', FeaturedDetailedCtaSection)
Vue.component('AccordionNew', AccordionNew)
Vue.component('Faq', Faq)
Vue.component('Markdown', Markdown)
Vue.component('Page', Page)
Vue.component('Blog', Blog)