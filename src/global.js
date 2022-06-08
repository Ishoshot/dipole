import Vue from 'vue'

/* ---------------------------- Import Components --------------------------- */
import Main from './layout/Main.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import AlphaSection from './components/AlphaSection.vue'
import Categories from './components/Categories.vue'
import Exclusive from './components/Exclusive.vue'
import DigitalAssistant from './components/DigitalAssistant.vue'
import AccountOpening from './components/AccountOpening.vue'
import ReadyToGetStarted from './components/ReadyToGetStarted.vue'

/* --------------------------- Register Components -------------------------- */
Vue.component('pr-main', Main)
Vue.component('pr-header', Header)
Vue.component('pr-footer', Footer)
Vue.component('pr-hero', Hero)
Vue.component('pr-alpha-section', AlphaSection)
Vue.component('pr-categories', Categories)
Vue.component('pr-exclusive', Exclusive)
Vue.component('pr-digital-assistant', DigitalAssistant)
Vue.component('pr-account-opening', AccountOpening)
Vue.component('pr-get-started', ReadyToGetStarted)
