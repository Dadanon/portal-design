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
  Star,
  Message
} from '@element-plus/icons-vue'

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as ImageProps['fit'][]
const url_logo = '/urbanset_logo.png'

const drawer = ref(false)
</script>

<template>
  <el-drawer v-model="drawer" title="Меню">
    <div class="grid-content hidden-md-and-up head_line">
      <el-icon><HomeFilled /></el-icon> | Сообщества | Проекты | Запросы | Предложения |
      <el-icon><Location /></el-icon>Карта
    </div>

    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      default-active="2"
      :router="true"
    >
      <el-menu-item index="/up_newprg">
        <el-icon><DocumentAdd /></el-icon><span class="txt_in_menu"> Новый проект </span>
      </el-menu-item>
      <el-menu-item-group>
        <template #title class="name_group_in_menu"
          ><el-icon><Location /></el-icon> Выбрать проект для редактирования:</template
        >
        <el-sub-menu index="/up_editprg">
          <template #title><span class="txt_in_menu">Проект 0</span></template>
          <el-sub-menu index="/up_editprg">
            <template #title><span class="txt_in_menu">Проект 1</span></template>
            <el-menu-item index="/up_editprg"
              ><span class="txt_in_menu">Проект 1 подпроект 1</span></el-menu-item
            >
            <el-sub-menu index="/up_editprg">
              <template #title><span class="txt_in_menu">Проект 1 подпроект 2</span></template>
              <el-menu-item index="/up_editprg"
                ><span class="txt_in_menu">Подпроект 1-2-1</span></el-menu-item
              >
              <el-menu-item index="/up_editprg"
                ><span class="txt_in_menu">Подпроект 1-2-2</span></el-menu-item
              >
              <el-sub-menu index="/up_editprg">
                <template #title><span class="txt_in_menu">Подпроект 1-2-2-1</span></template>
                <el-menu-item index="/up_editprg"
                  ><span class="txt_in_menu">Подпроект 1-2-2-1-1</span></el-menu-item
                >
              </el-sub-menu>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="/up_editprg"><span class="txt_in_menu">Проект 2</span></el-menu-item>
        </el-sub-menu>
      </el-menu-item-group>
      <el-menu-item-group>
        <template #title class="name_group_in_menu"
          ><el-icon><Location /></el-icon> Мои команды</template
        >
        <el-sub-menu index="/up_command">
          <template #title>
            <span class="txt_in_menu">Команда 0</span>
          </template>
          <el-menu-item index="/up_command"
            ><span class="txt_in_menu">Фрязино forever</span></el-menu-item
          >
          <el-sub-menu index="/up_command">
            <template #title><span class="txt_in_menu">Боровичи 1 </span></template>
            <el-menu-item index="/up_command"
              ><span class="txt_in_menu">Боровичи 1-1</span></el-menu-item
            >
            <el-menu-item index="/up_command"
              ><span class="txt_in_menu">Боровичи 1-2</span></el-menu-item
            >
            <el-sub-menu index="/up_command">
              <template #title><span class="txt_in_menu">Боровичи 1-2-1</span></template>
              <el-menu-item index="/up_command"
                ><span class="txt_in_menu">Боровичи набережная</span></el-menu-item
              >
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="/up_command"><span class="txt_in_menu">Щелково</span></el-menu-item>
        </el-sub-menu>
      </el-menu-item-group>
      <el-menu-item-group>
        <template #title class="name_group_in_menu"
          ><el-icon><Location /></el-icon> Мои группы</template
        >
        <el-sub-menu index="19">
          <template #title><span class="txt_in_menu">Группа 0</span></template>
          <el-menu-item index="/up_group"><span class="txt_in_menu">Группа 1</span></el-menu-item>
          <el-menu-item index="/up_group"><span class="txt_in_menu">Группа 2</span></el-menu-item>
        </el-sub-menu>
      </el-menu-item-group>
    </el-menu>
  </el-drawer>

  <el-row class="u_header" align="top">
    <el-col :span="4" class="port_logo"
      ><div class="grid-content">
        <el-image :src="url_logo" :fit="'fill'" /></div
    ></el-col>
    <el-col :span="20" class="port_title"
      ><div class="grid-content">
        <H2 class="adapt-h" style="margin-top: 0px">ПЛАТФОРМА РАЗВИТИЯ ГОРОДОВ</H2>
      </div></el-col
    >
  </el-row>

  <el-affix :offset="0">
    <el-row align="middle" justify="end" class="head_line">
      <el-col :xs="4" :sm="4" :md="19" :lg="19" :xl="19"
        ><div class="grid-content hidden-sm-and-down">
          <el-button-group class="group_top_menu_but">
            <el-tooltip
              class="box-item"
              effect="dark"
              content="Главная страница"
              placement="bottom-start"
            >
              <el-button
                type="text"
                :icon="HomeFilled"
                @click="$router.push('/')"
                style="color: black"
              />
            </el-tooltip>
            <el-button
              class="top_menu_but"
              type="text"
              @click="$router.push('/root_allpeople')"
              style="color: black"
              >Сообщества</el-button
            >
            <el-button
              class="top_menu_but"
              type="text"
              @click="$router.push('/root_listprg')"
              style="color: black"
              >Проекты</el-button
            >
            <el-button
              class="top_menu_but"
              type="text"
              @click="$router.push('/root_request')"
              style="color: black"
              >Запросы</el-button
            >
            <el-button
              class="top_menu_but"
              type="text"
              @click="$router.push('/root_tender')"
              style="color: black"
              >Предложения</el-button
            >
            <el-button
              class="top_menu_but"
              :icon="Location"
              type="text"
              @click="$router.push('/up_command')"
              style="color: black"
              >Карта</el-button
            >
          </el-button-group>
        </div></el-col
      >
      <el-col :xs="9" :sm="8" :md="5" :lg="5" :xl="5"
        ><div class="grid-content head_line_but">
          <el-tooltip class="box-item" effect="dark" content="Избранное" placement="bottom-start">
            <el-button
              type="default"
              circle="true"
              class="head_but"
              :icon="Star"
              @click="$router.push('/root_like')"
            />
          </el-tooltip>
          <el-tooltip class="box-item" effect="dark" content="Помощь" placement="bottom-start">
            <el-button
              type="default"
              circle="true"
              class="head_but"
              :icon="QuestionFilled"
              @click="$router.push('/root_help')"
            />
          </el-tooltip>
          <el-tooltip class="box-item" effect="dark" content="Аккаунт" placement="bottom-start">
            <el-badge :value="12" class="top_att"
              ><el-button
                type="default"
                circle="true"
                class="head_but_badge"
                :icon="User"
                @click="$router.push('/up_main')"
            /></el-badge>
          </el-tooltip>
          <el-tooltip class="box-item" effect="dark" content="Меню" placement="bottom-start">
            <el-button
              type="default"
              circle="true"
              class="head_but"
              :icon="Menu"
              @click="drawer = true"
            />
          </el-tooltip></div
      ></el-col>
    </el-row>
  </el-affix>

  <el-row class="u_main">
    <el-col :span="24"
      ><div class="grid-content">
        <RouterView /></div
    ></el-col>
  </el-row>

  <el-row class="u_footer_row1">
    <el-col :span="24"
      ><div class="grid-content">
        <span class="txt_wight"
          ><el-icon><Message /></el-icon>&nbsp;info@urbanset.ru</span
        >
      </div></el-col
    >
  </el-row>

  <el-row class="u_footer_row2">
    <el-col :span="8"
      ><div class="grid-content">
        <span class="txt_gray"
          >Ссылки на презентации всех проектов в html и выпадающем спмске(?)</span
        >
      </div></el-col
    >
    <el-col :span="8"
      ><div class="grid-content">
        <span class="txt_gray"
          >Ссылки на презентации всех запросов в html и выпадающем спмске(?)</span
        >
      </div></el-col
    >
    <el-col :span="8"
      ><div class="grid-content">
        <span class="txt_gray"
          >Ссылки на презентации всех предложений в html и выпадающем спмске(?)</span
        >
      </div></el-col
    >
  </el-row>
</template>
