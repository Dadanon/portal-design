import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../views/MainPage.vue'
import UP_main from '../views/UP_main.vue'
import UP_EditPrg from '../views/UP_EditPrg.vue'
import UP_news from '../views/UP_news.vue'
import UP_command from '../views/UP_command.vue'
import UP_task from '../views/UP_task.vue'
import UP_group from '../views/UP_group.vue'
import UP_newPrg from '../views/UP_newPrg.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/up_main',
      name: 'up_main',
      component: UP_main
    },
    {
      path: '/up_editprg',
      name: 'up_editprg',
      component: UP_EditPrg
    },    
    {
      path: '/up_command',
      name: 'up_command',
      component: UP_command
    },   
    {
      path: '/up_task',
      name: 'up_task',
      component: UP_task
    },   
    {
      path: '/up_newprg',
      name: 'up_newprg',
      component: UP_newPrg
    }, 
    {
      path: '/up_group',
      name: 'up_group',
      component: UP_group
    }, 
    {
      path: '/up_news',
      name: 'up_news',
      component: UP_news
    }   
  ]
})

export default router
