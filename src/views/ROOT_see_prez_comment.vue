<template>
  <el-row>
    <el-col :xs="7" :sm="7" :md="5" :lg="3" :xl="3"
      ><div class="grid-content">
        <el-image class="circle_img" :src="prg_ban_01" :fit="'fill'" /></div
    ></el-col>
    <el-col :xs="10" :sm="10" :md="19" :lg="21" :xl="21"
      ><div class="grid-content">
        <span class="txt_big_size">Название проекта </span>
        <span>Краткое описание. </span>
      </div></el-col
    >
  </el-row>
  <el-row>
    <el-col>
      <el-button type="primary" class="normal_but" @click="$router.push('/root_see_prez')"
        >Перейти на страницу проекта</el-button
      >
    </el-col>
  </el-row>
  <el-row class="border_top">
    <el-col>
      <span class="txt_big_size">Темы обсуждения:</span>
      <el-button-group class="group_top_menu_but">
        <el-button class="top_menu_but" type="text" disabled>Поле за озером</el-button>
        <el-button class="top_menu_but" type="text">Территория военной части</el-button>
        <el-button class="top_menu_but" type="text">ДК</el-button>
        <el-button class="top_menu_but" type="text">Факел</el-button>
        <el-button class="top_menu_but" type="text">8-я школа</el-button>
        <el-button class="top_menu_but" type="text" :icon="Plus" style="color: black"
          >Новая тема</el-button
        >
      </el-button-group>
    </el-col>
  </el-row>

  <el-row align="middle" class="margin_but_10">
    <el-col :xs="3" :sm="2" :md="2" :lg="2" :xl="2">
      <el-button-group>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Редактировать название темы"
          placement="bottom-start"
        >
          <el-button type="text" plain :icon="Edit" class="but_in_users_sm_kard" />
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Закрыть обсуждение"
          placement="bottom-start"
        >
          <el-button type="text" plain :icon="CircleCloseFilled" class="but_in_users_sm_kard" />
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="Удалить тему" placement="bottom-start">
          <el-button type="text" plain :icon="Delete" class="but_in_users_sm_kard" />
        </el-tooltip>
      </el-button-group>
    </el-col>
    <el-col :xs="21" :sm="22" :md="22" :lg="22" :xl="22">
      <h2>Поле за озером</h2>
    </el-col>
  </el-row>

  <!-- Одно сообщение пользователя -->
  <el-row class="user_small_kard" align="middle">
    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"
      ><div class="grid-content">
        <el-image class="user_avatar_sm_circle" :src="user_cir_avatar" :fit="'fill'" /></div
    ></el-col>
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"
      ><div class="grid-content">
        <span class="txt_in_sm_kard">Владимир Ильич Ленин</span>
      </div></el-col
    >
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
      ><div class="grid-content">
        <span class="txt_in_sm_kard">2024.12.15 15:30</span>
      </div></el-col
    >
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
      ><div class="grid-content">
        <el-button-group>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Удалить это сообщение"
            placement="bottom-start"
          >
            <el-button type="text" plain :icon="Delete" class="but_in_users_sm_kard" />
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Редактировать сообщение"
            placement="bottom-start"
          >
            <el-button type="text" plain :icon="Edit" class="but_in_users_sm_kard" />
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Забанить пользователя"
            placement="bottom-start"
          >
            <el-button type="text" plain :icon="CircleCloseFilled" class="but_in_users_sm_kard" />
          </el-tooltip>
        </el-button-group></div
    ></el-col>
  </el-row>
  <el-row class="margin_but_10">
    <el-col :xs="2" :sm="2" :md="2" :lg="1" :xl="1" class="border_right">
      <el-button-group>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Написать личное сообщение"
          placement="bottom-start"
        >
          <el-button type="text" plain :icon="Message" />
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="Ответить" placement="bottom-start">
          <el-button type="text" plain :icon="Back" />
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="Цитировать" placement="bottom-start">
          <el-button type="text" plain :icon="Right" />
        </el-tooltip>
      </el-button-group>
    </el-col>
    <el-col :xs="22" :sm="22" :md="22" :lg="23" :xl="23" class="under_line">
      <span class="txt_in_message margin_left_10">
        22Сообщение пользователя. Вставляем картинки, файлы ...
      </span>
    </el-col>
  </el-row>

  <!-- Ответное сообщение пользователя -->
  <el-row class="user_small_kard" align="middle">
    <el-col :offset="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3"
      ><div class="grid-content">
        <el-image class="user_avatar_sm_circle" :src="user_cir_avatar" :fit="'fill'" /></div
    ></el-col>
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"
      ><div class="grid-content">
        <span class="txt_in_sm_kard">Владимир Ильич Ленин</span>
      </div></el-col
    >
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
      ><div class="grid-content">
        <span class="txt_in_sm_kard">2024.12.15 15:30</span>
      </div></el-col
    >
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
      ><div class="grid-content">
        <el-button-group>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Удалить это сообщение"
            placement="bottom-start"
          >
            <el-button type="text" plain :icon="Delete" class="but_in_users_sm_kard" />
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Редактировать сообщение"
            placement="bottom-start"
          >
            <el-button type="text" plain :icon="Edit" class="but_in_users_sm_kard" />
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Забанить пользователя"
            placement="bottom-start"
          >
            <el-button type="text" plain :icon="CircleCloseFilled" class="but_in_users_sm_kard" />
          </el-tooltip>
        </el-button-group></div
    ></el-col>
  </el-row>
  <el-row class="margin_but_10">
    <el-col :offset="1" :xs="2" :sm="2" :md="2" :lg="1" :xl="1" class="border_right">
      <el-button-group>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Написать личное сообщение"
          placement="bottom-start"
        >
          <el-button type="text" plain :icon="Message" />
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="Ответить" placement="bottom-start">
          <el-button type="text" plain :icon="Back" />
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="Цитировать" placement="bottom-start">
          <el-button type="text" plain :icon="Right" />
        </el-tooltip>
      </el-button-group>
    </el-col>
    <el-col :xs="21" :sm="21" :md="21" :lg="22" :xl="22" class="under_line">
      <span class="txt_in_message margin_left_10"> Ответное сообщение пользователя </span>
    </el-col>
  </el-row>

  <!-- Одно сообщение пользователя -->
  <el-row class="user_small_kard" align="middle">
    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"
      ><div class="grid-content">
        <el-image class="user_avatar_sm_circle" :src="user_cir_avatar" :fit="'fill'" /></div
    ></el-col>
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"
      ><div class="grid-content">
        <span class="txt_in_sm_kard">Владимир Ильич Ленин</span>
      </div></el-col
    >
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
      ><div class="grid-content">
        <span class="txt_in_sm_kard">2024.12.15 15:30</span>
      </div></el-col
    >
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
      ><div class="grid-content">
        <el-button-group>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Удалить это сообщение"
            placement="bottom-start"
          >
            <el-button type="text" plain :icon="Delete" class="but_in_users_sm_kard" />
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Редактировать сообщение"
            placement="bottom-start"
          >
            <el-button type="text" plain :icon="Edit" class="but_in_users_sm_kard" />
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Забанить пользователя"
            placement="bottom-start"
          >
            <el-button type="text" plain :icon="CircleCloseFilled" class="but_in_users_sm_kard" />
          </el-tooltip>
        </el-button-group></div
    ></el-col>
  </el-row>
  <el-row class="margin_but_10">
    <el-col :xs="2" :sm="2" :md="1" :lg="1" :xl="1" class="border_right">
      <el-button-group>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Написать личное сообщение"
          placement="bottom-start"
        >
          <el-button type="text" plain :icon="Message" />
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="Ответить" placement="bottom-start">
          <el-button type="text" plain :icon="Back" />
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="Цитировать" placement="bottom-start">
          <el-button type="text" plain :icon="Right" />
        </el-tooltip>
      </el-button-group>
    </el-col>
    <el-col :xs="22" :sm="22" :md="23" :lg="23" :xl="23" class="under_line">
      <span class="txt_in_message margin_left_10">
        Сообщение пользователя. Вставляем картинки, файлы ...
      </span>
    </el-col>
  </el-row>
  <!-- Отправить комментарий -->
  <el-row align="bottom" class="margin_but_10">
    <el-col :xs="22" :sm="22" :md="23" :lg="23" :xl="23">
      Сюда вставляем форму отправки комментария<br />
      Сюда вставляем форму отправки комментария<br />
      Сюда вставляем форму отправки комментария<br />
      Сюда вставляем форму отправки комментария<br />
    </el-col>
    <el-col :xs="2" :sm="2" :md="2" :lg="1" :xl="1">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Отправить комментарий"
        placement="bottom-start"
      >
        <el-button type="primary" class="normal_but" :icon="Promotion" />
      </el-tooltip>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import type { ImageProps } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  Setting,
  Edit,
  Delete,
  Close,
  Plus,
  Minus,
  QuestionFilled,
  DArrowRight,
  Share,
  CircleCloseFilled,
  Message,
  Back,
  Right,
  Promotion
} from '@element-plus/icons-vue'

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as ImageProps['fit'][]
const icon_sx_01 = '/sxema_1_02.png'
const icon_adres_01 = '/icons_address_50.png'
const user_cir_avatar = '/lenin.jpg'
const prg_ban_01 = '/us_esher_01.jpg'

const drawer = ref(false)
const radio = ref(4)
const activeName = ref('nastr')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const open_edit_ban_prg = () => {
  ElMessageBox.prompt(
    'Здесь в отдельных полях название проекта и краткое описание',
    'Как-то так ... или как тебе проще',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      inputPattern:
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage: 'Invalid Email'
    }
  )
    .then(({ value }) => {
      ElMessage({
        type: 'success',
        message: `Your email is:${value}`
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled'
      })
    })
}
</script>
