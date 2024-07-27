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
import UP_edit_prez from '../views/UP_edit_prez.vue'
import ROOT_allpeople from '../views/ROOT_allpeople.vue'
import ROOT_listprg from '../views/ROOT_listprg.vue'
import ROOT_request from '../views/ROOT_request.vue'
import ROOT_tender from '../views/ROOT_tender.vue'
import ROOT_like from '../views/ROOT_like.vue'
import ROOT_help from '../views/ROOT_help.vue'
import ROOT_see_prez from '../views/ROOT_see_prez.vue'
import HELP_prg from '../views/HELP_prg.vue'
import HELP_maps from '../views/HELP_maps.vue'
import HELP_sx from '../views/HELP_sx.vue'
import HELP_zapr_offert from '../views/HELP_zapr_offert.vue'
import HELP_komand from '../views/HELP_komand.vue'
import HELP_group from '../views/HELP_group.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/root_see_prez',
      name: 'ROOT_see_prez',
      component: ROOT_see_prez
    },   
    {
      path: '/help_group',
      name: 'HELP_group',
      component: HELP_group
    },       
    {
      path: '/up_edit_prez',
      name: 'UP_edit_prez',
      component: UP_edit_prez
    },   
    {
      path: '/help_zapr_offert',
      name: 'HELP_zapr_offert',
      component: HELP_zapr_offert
    },       
    {
      path: '/help_komand',
      name: 'HELP_komand',
      component: HELP_komand
    },       
    {
      path: '/help_maps',
      name: 'HELP_maps',
      component: HELP_maps
    },   
    {
      path: '/help_sx',
      name: 'HELP_sx',
      component: HELP_sx
    },   
    {
      path: '/help_prg',
      name: 'HELP_prg',
      component: HELP_prg
    },       
    {
      path: '/root_help',
      name: 'ROOT_help',
      component: ROOT_help
    },    
    {
      path: '/root_tender',
      name: 'ROOT_tender',
      component: ROOT_tender
    },        
    {
      path: '/root_like',
      name: 'ROOT_like',
      component: ROOT_like
    },        
    {
      path: '/root_request',
      name: 'ROOT_request',
      component: ROOT_request
    },        
    {
      path: '/root_allpeople',
      name: 'ROOT_allpeople',
      component: ROOT_allpeople
    },        
    {
      path: '/root_listprg',
      name: 'ROOT_listprg',
      component: ROOT_listprg
    },        
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
