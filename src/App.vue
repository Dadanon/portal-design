<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopView from '@/views/TopView.vue'
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  User,
  Reading,
  Timer,
  DocumentAdd,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  console.log('test')
}


interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Мои проекты',
    children: [
      {
        label: 'Проект-1',
        children: [
          {
            label: 'Проект-1 Подпроект 1',
            children: [
              {
                label: 'Проект-1 Подпроект 1-2',
              },
              {
                label: 'Проект-1 Подпроект 1-2',
                children: [
                  {
                    label: 'Проект-1 Подпроект 1-2-1',
                  },
                  {
                    label: 'Проект-1 Подпроект 1-2-2',
                    children: [
                      {
                        label: 'Проект-1 Подпроект 1-2-2-1',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Проект-2',
        children: [
          {
            label: 'Проект-2 Подпроект 1',
          },
          {
            label: 'Проект-2 Подпроект 2',
          },          
        ],
      },      
    ],
  },
  {
    label: 'Мои команды',
    children: [
      {
        label: 'Фрязино forever',    
      },
      {
        label: 'Монино',    
      },      
    ],
  },
  {
    label: 'Мои группы',
    children: [
      {
        label: 'Группа 1',    
      },
      {
        label: 'Группа 2',    
      },      
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>



<template>
  <div class="common-layout">
    <el-container>
      <el-aside >

        <el-row class="tac">
          <el-col :span="12">
            <h5 class="mb-2">Default colors</h5>
            <el-menu
              default-active="6"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              >
              
                 <el-menu-item index="1" @click="$router.push('/up_newprg')">
                    <el-icon><DocumentAdd /></el-icon>
                    <span>Новый проект</span>
                  </el-menu-item>
                  <el-sub-menu index="2">
                    <template #title>
                      <el-icon><location /></el-icon>
                      <span>Мои проекты</span>
                    </template>

                    <el-sub-menu index="2-4" @click="$router.push('/up_editprg')">
                      <template #title>Проект 1</template>
                      <el-menu-item index="2-4-1" @click="$router.push('/up_task')">Проект 1 подпроект 1</el-menu-item>
                      <el-sub-menu index="2-4-2" @click="$router.push('/up_editprg')">
                        <template #title>Проект 1 подпроект 2</template>
                        <el-menu-item index="2-4-2-1" @click="$router.push('/up_task')">Подпроект 1-2-1</el-menu-item>
                        <el-menu-item index="2-4-2-2" @click="$router.push('/up_task')">Подпроект 1-2-2</el-menu-item>
                      </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2-2" @click="$router.push('/up_task')">Проект 2</el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index="3">
                    <template #title>
                    <el-icon><location /></el-icon>
                    <span>Мои команды</span>
                    </template>
                    <el-menu-item index="3-1" @click="$router.push('/up_command')">Фрязино forever</el-menu-item>
                    <el-menu-item index="3-2" @click="$router.push('/up_command')">Щелково</el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index="4">
                    <template #title>
                    <el-icon><location /></el-icon>
                    <span>Мои группы</span>
                    </template>
                    <el-menu-item index="4-1" @click="$router.push('/up_group')">Группа 1</el-menu-item>
                    <el-menu-item index="4-2" @click="$router.push('/up_group')">Группа 2</el-menu-item>
                  </el-sub-menu>
                  <el-menu-item index="5"  @click="$router.push('/up_task')">
                    <el-icon><timer /></el-icon>
                    <span>Задачи</span>
                  </el-menu-item>
                  <el-menu-item index="6"  @click="$router.push('/up_news')">
                    <el-icon><reading /></el-icon>
                    <span>Лента новостей</span>
                  </el-menu-item>
                  <el-menu-item index="7" @click="$router.push('/up_main')">
                    <el-icon><user /></el-icon>
                    <span>Аккаунт</span>
                  </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
  </el-aside>
      <el-container>
        <el-header>
          <TopView />
        </el-header>
        <el-main>

          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {

  min-height: 400px;
}
</style>



<script lang="ts" setup>

</script>