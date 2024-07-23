<template>

    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane name="line">
            <template #label>
             <span class="custom-tabs-label">
                <el-icon><setting /></el-icon><el-badge class="mark top_att" :value="12">Лента</el-badge>
            </span>
            </template>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
            Лента <br/>
        </el-tab-pane>
        <el-tab-pane label="Блок-схемы" name="sx">
            Блок-схемы
        </el-tab-pane>
        <el-tab-pane label="Запросы" name="zapr">
            Запросы
        </el-tab-pane>
        <el-tab-pane label="Предложения" name="predl">
            Предложения
        </el-tab-pane>
        <el-tab-pane label="Презентация" name="prez">
            Презентация
        </el-tab-pane>
        <el-tab-pane label="Карта" name="maps">
            Карта
        </el-tab-pane>
        <el-tab-pane label="Задачи" name="task">
            Задачи
        </el-tab-pane>
        <el-tab-pane name="nastr">
            <template #label>
             <span class="custom-tabs-label">
                <el-icon><setting /></el-icon>
            </span>
            </template>
        </el-tab-pane>        
    </el-tabs>
  </template>
  <script lang="ts" setup>
  import { CaretBottom } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus'
  import {
  Setting,
} from '@element-plus/icons-vue'

    const radio = ref(4)
  const activeName = ref('line')
  
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }
  </script>
  
  <style>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
  }
  </style>
