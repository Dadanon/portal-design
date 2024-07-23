
<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopView from '@/views/TopView.vue'
import { ref } from 'vue'
import 'element-plus/theme-chalk/display.css'
import type { ImageProps } from 'element-plus'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  User,
  Reading,
  Timer,
  DocumentAdd,
  Menu,
  QuestionFilled,
  House,
  HomeFilled,
} from '@element-plus/icons-vue'

const fits = [
  'fill',
  'contain',
  'cover',
  'none',
  'scale-down',
] as ImageProps['fit'][]
const url_logo =
  '/urbanset_logo.png'

const drawer = ref(false)

</script>



<template>

<el-drawer v-model="drawer" title="Меню">
  <div class="grid-content hidden-md-and-up head_line" >
          <el-icon><HomeFilled /></el-icon> | Сообщества | Проекты | Запросы | Предложения | <el-icon><Location /></el-icon>Карта
    </div>

<el-menu
              
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              default-active="2"
              router="true"
              >
              
                 <el-menu-item index="/up_newprg">
                  <el-icon><DocumentAdd /></el-icon><span class="txt_in_menu"> Новый проект </span>
                  </el-menu-item>
                  <el-menu-item-group> <template #title class="name_group_in_menu"><el-icon><Location /></el-icon> Мои проекты</template>
                  <el-sub-menu index="/up_editprg">
                    <template #title><span class="txt_in_menu">Проект 0</span></template>
                    <el-sub-menu index="/up_editprg">
                      <template #title><span class="txt_in_menu">Проект 1</span></template>
                      <el-menu-item index="/up_editprg"><span class="txt_in_menu">Проект 1 подпроект 1</span></el-menu-item>
                      <el-sub-menu index="/up_editprg">
                        <template #title><span class="txt_in_menu">Проект 1 подпроект 2</span></template>
                        <el-menu-item index="/up_editprg"><span class="txt_in_menu">Подпроект 1-2-1</span></el-menu-item>
                        <el-menu-item index="/up_editprg"><span class="txt_in_menu">Подпроект 1-2-2</span></el-menu-item>
                        <el-sub-menu index="/up_editprg">
                            <template #title><span class="txt_in_menu">Подпроект 1-2-2-1</span></template>
                            <el-menu-item index="/up_editprg"><span class="txt_in_menu">Подпроект 1-2-2-1-1</span></el-menu-item>
                        </el-sub-menu>
                      </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="/up_editprg"><span class="txt_in_menu">Проект 2</span></el-menu-item>
                  </el-sub-menu>
                </el-menu-item-group>
                <el-menu-item-group> <template #title class="name_group_in_menu"><el-icon><Location /></el-icon> Мои команды</template>
                  <el-sub-menu index="/up_command">
                    <template #title>
                    <span class="txt_in_menu">Команда 0</span>
                    </template>
                    <el-menu-item index="/up_command"><span class="txt_in_menu">Фрязино forever</span></el-menu-item>
                      <el-sub-menu index="/up_command">
                        <template #title><span class="txt_in_menu">Боровичи 1 </span></template>
                        <el-menu-item index="/up_command"><span class="txt_in_menu">Боровичи 1-1</span></el-menu-item>
                        <el-menu-item index="/up_command"><span class="txt_in_menu">Боровичи 1-2</span></el-menu-item>
                        <el-sub-menu index="/up_command">
                            <template #title><span class="txt_in_menu">Боровичи 1-2-1</span></template>
                            <el-menu-item index="/up_command"><span class="txt_in_menu">Боровичи набережная</span></el-menu-item>
                        </el-sub-menu>
                      </el-sub-menu>
                    <el-menu-item index="/up_command"><span class="txt_in_menu">Щелково</span></el-menu-item>
                  </el-sub-menu>
                </el-menu-item-group>
                <el-menu-item-group> <template #title class="name_group_in_menu"><el-icon><Location /></el-icon> Мои группы</template>
                  <el-sub-menu index="19">
                    <template #title><span class="txt_in_menu">Группа 0</span></template>
                    <el-menu-item index="/up_group"><span class="txt_in_menu">Группа 1</span></el-menu-item>
                    <el-menu-item index="/up_group"><span class="txt_in_menu">Группа 2</span></el-menu-item>
                  </el-sub-menu>
                </el-menu-item-group>
                  <el-menu-item index="/up_task">
                    <el-icon><timer /></el-icon>
                    <span>Задачи</span>
                  </el-menu-item>
                  <el-menu-item index="/up_news">
                    <el-icon><reading /></el-icon>
                    <span>Лента новостей</span>
                  </el-menu-item>
                  <el-menu-item index="/up_main">
                    <el-icon><user /></el-icon>
                    <span>Аккаунт</span>
                  </el-menu-item>
            </el-menu>

    
  </el-drawer>

  <div class="portal-header">
    <div class="portal-logo">
      <el-image :src="url_logo" :fit="fill" />
    </div>
    <div class="portal-title">
      <h2 class="adapt-h" style="margin-top: 0; height: 100%;">ПЛАТФОРМА РАЗВИТИЯ ГОРОДОВ</h2>
    </div>
  </div>

 <!-- <el-row style="height: 100%!important">
    <el-col :span="4" style="height: 100%!important; margin: 0">
      <div class="grid-content tmp_edit">
        <el-image :src='url-logo' :fit="fit" />
      </div>
    </el-col>
    <el-col :span="20"><div class="grid-content tmp_edit">
        <H2 class="adapt-h ">ПЛАТФОРМА РАЗВИТИЯ ГОРОДОВ</H2>
    </div></el-col>    
 </el-row>      -->

 <el-affix :offset="0">
    <el-row align="middle" class="head_line">
        <el-col :span="18"><div class="grid-content hidden-sm-and-down" >
          <el-icon><HomeFilled /></el-icon> | Сообщества | Проекты | Запросы | Предложения | <el-icon><Location /></el-icon>Карта
        </div></el-col>
        <el-col :span="6"><div class="grid-content head_line_but">

            <el-button type="default" circle="true" class="head_but" :icon="QuestionFilled" @click="$router.push('/up_command')" />          
            <el-badge :value="12" class="top_att"><el-button type="default" circle="true" class="head_but_badge" :icon="User" @click="$router.push('/up_main')" /></el-badge>                    
            <el-button type="default" circle="true" class="head_but" :icon="Menu" @click="drawer = true" />
        </div></el-col>
    </el-row>          
  </el-affix>

  <el-row class="u_main">
    <el-col :span="24"><div class="grid-content">
      <RouterView />     
    </div></el-col>
 </el-row>          


</template>

<style scoped>
.portal-header {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: start;
  background-color: #fff;

  .portal-logo {
    width: 20%;
    height: 100%;
  }

  .portal-title {
    display: flex;
    align-items: start;
    justify-content: start;
    width: 80%;
    height: 100%;
  }
}
</style>








