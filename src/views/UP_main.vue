<template>

    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane name="line">
            <template #label>
             <span class="custom-tabs-label el_tab_top">
                <el-badge class="mark top_att" :value="12">Лента</el-badge>
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
            <template #label>
             <span class="custom-tabs-label el_tab_top">
                <el-badge class="mark top_att" :value="12"><el-icon><Message /></el-icon>&nbsp;Сообщения</el-badge>
                
            </span>
            </template>            
            Блок-схемы
        </el-tab-pane>
        <el-tab-pane name="nastr">
            <template #label>
             <span class="custom-tabs-label el_tab_top">
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
  Message,
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
