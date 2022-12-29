import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Invite from '../views/Invite.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/invite',
      name: 'invite',
      component: Invite
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

export default router
