import Home from './pages/Index.vue'
import Contact from './pages/Contact.vue'

export const routes = [
  /* ------------------------------- Index Route ------------------------------- */
  {
    name: 'Index',
    path: '/',
    component: Home,
  },

  {
    name: 'Contact',
    path: '/contact',
    component: Contact,
  },
]
