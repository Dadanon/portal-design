<template>
                    <el-row>
                        <el-col :xs="22" :sm="22" :md="23" :lg="23" :xl="23" class="under_line"><div class="grid-content">
                          <span class="txt_big_size">Редактор презентаций</span>
                          <span>Постоянный адрес презентации:<br /> https://urbanset.ru/projects/chasy-na-sinusakh-i-kosinusakh-v-css-4</span>
                          <el-tooltip
                            class="box-item"
                            effect="dark"
                            content="Скопировать адрес в буфер обмена"
                            placement="bottom-start"
                          >
                            <el-icon class="margin_left_10"><Share /></el-icon>
                          </el-tooltip>     
                        </div></el-col>
                        <el-col :xs="2" :sm="2" :md="1" :lg="1" :xl="1" class="under_line" justify="end"><div class="grid-content">
                            <el-tooltip
                            class="box-item"
                            effect="dark"
                            content="Закрыть и вернуться в раздел"
                            placement="bottom-start"
                          >
                            <el-button class="normal_but" type="primary" :icon="Close" />
                          </el-tooltip>     
                        </div></el-col>                        
                    </el-row> 
                    <el-row>
                        <el-col :span="24"><div class="grid-content">
                            <h1>Название проекта/запроса/предложения</h1>
                        </div></el-col>
                    </el-row>     
                    <el-row>
                        <el-col :span="24"><div class="grid-content">
                            <h2>Показатели проекта:</h2>
                            <span>
                                Блок показателей проекта<br />
                                Блок показателей проекта<br />
                            </span>
                        </div></el-col>
                    </el-row>              
                    <el-row style="margin: 10px;">
                        <el-col :span="1"><div class="grid-content">
                                <el-image :src="icon_sx_01" />
                        </div></el-col>
                        <el-col :span="23"><div class="grid-content" style="height: 100%; align-content: center;">
                            <el-button type="text" style="color: black">&nbsp;Схема проектов застройки участков<el-icon><DArrowRight /></el-icon></el-button>
                        </div></el-col>                        
                    </el-row>             
                    <el-row style="margin: 10px;">
                        <el-col :span="1"><div class="grid-content">
                                <el-image :src="icon_adres_01" />
                        </div></el-col>
                        <el-col :span="23"><div class="grid-content" style="height: 100%; align-content: center;">
                            <el-button type="text" style="color: black">&nbsp;Посмотреть на карте<el-icon><DArrowRight /></el-icon></el-button>
                        </div></el-col>                        
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
QuestionFilled,
DArrowRight,
Share,
} from '@element-plus/icons-vue'

const fits = [
'fill',
'contain',
'cover',
'none',
'scale-down',
] as ImageProps['fit'][]
const icon_sx_01 = '/sxema_1_02.png'
const icon_adres_01 = '/icons_address_50.png'

const drawer = ref(false)
  const radio = ref(4)
const activeName = ref('nastr')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const open_edit_ban_prg = () => {
ElMessageBox.prompt('Здесь в отдельных полях название проекта и краткое описание', 'Как-то так ... или как тебе проще', {
  confirmButtonText: 'OK',
  cancelButtonText: 'Cancel',
  inputPattern:
    /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
  inputErrorMessage: 'Invalid Email',
})
  .then(({ value }) => {
    ElMessage({
      type: 'success',
      message: `Your email is:${value}`,
    })
  })
  .catch(() => {
    ElMessage({
      type: 'info',
      message: 'Input canceled',
    })
  })
}

</script>