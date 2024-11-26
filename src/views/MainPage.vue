<template>
  <el-row>
    <el-col>
      <span> Мы обеспечиваем полностью бесплатный и неограниченный доступ ко всем инструментам платформы. </span>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
        <el-image class="" :src="ban_top" :fit="'fill'" />
    </el-col>
  </el-row>
  <el-row :gutter="50">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <h2>Авторам</h2>
        <p>
          Здесь – инструменты для реализации проектов, задуманных по правилам игры с ненулевой суммой, у которых нет проигравших. Если проект принесет очевидную пользу и выгоду затронутым субъектам, значит его аудитория заинтересована в результате и может поработать над реализацией проекта вместе с инициатором. 
        </p>
        <p>
          Реализацию любого или почти любого проектного замысла можно пересобрать по формуле, которая обеспечит выгоду и пользу многим затронутым субъектам.
      </p>
    </el-col>
    <el-col  :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <h2>Неравнодушным</h2>
      <p>
        Если вы стремитесь к переменам и находите в себе силы действовать – найдите на платформе проекты, которые достойны вашего внимания. 
      </p>
      <p>
        Инициативные команды собирают группы поддержки своих проектов. Им нужна помощь в распространении информации, поиске участников проектов, решении множества посильных задач.
      </p>
    </el-col>    
  </el-row>
  <el-row :gutter="50" class="hidden-sm-and-down">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="ban_align_center">
      <el-image class="img_align_center" :src="root_ban_rect_02" :fit="'fill'" />      
    </el-col>
    <el-col  :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="ban_align_center">
      <el-image class="img_align_center" :src="root_ban_rect_01" :fit="'fill'" />      
    </el-col>    
  </el-row>  
  <el-row :gutter="50">
    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="ban_align_center">
      <h2>Матрица связности</h2>
        <p>
          Публикуйте свои запросы и предложения, запускайте цепочки совместных компаний. Сотките ткань комплексного проекта вместе с другими заинтересованными участниками.
          <el-tooltip
              class="box-item"
              effect="dark"
              content="Подробнее"
              placement="bottom-start"
            >
              <el-button
                type="text"
                class="txt_but"
                :icon="MoreFilled"
                @click="$router.push('/')"
                style="color: black"
              />
            </el-tooltip>          
        </p>
        
    </el-col>
    <el-col  :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="ban_align_center">
      <h2>Дистрибутив проекта</h2>
      <p>
        Подтвердите свою концепцию перекрестными договоренностями множества заинтересованных участников. Соберите Дистрибутив проекта и инсталлируйте его в реальность.
        <el-tooltip
              class="box-item"
              effect="dark"
              content="Подробнее"
              placement="bottom-start"
            >
              <el-button
                type="text"
                class="txt_but"
                :icon="MoreFilled"
                @click="$router.push('/')"
                style="color: black"
              />
            </el-tooltip>  
      </p>
    </el-col>    
    <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="ban_align_center hidden-lg-and-up">
      <el-image :src="people_line_01" :fit="'fill'" />
    </el-col>     
    <el-col  :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="ban_align_center">
      <h2>Единая информационная среда</h2>
      <P>
        Одновременное присутствие инициаторов множества территориальных проектов развития, предпринимателей и авторов социально значимых проектов самого разного рода сокращает дистанцию от идеи к реализации до одного шага.
        <el-tooltip
              class="box-item"
              effect="dark"
              content="Подробнее"
              placement="bottom-start"
            >
              <el-button
                type="text"
                class="txt_but"
                :icon="MoreFilled"
                @click="$router.push('/')"
                style="color: black"
              />
            </el-tooltip>  
      </P>
    </el-col>
    <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="ban_align_center hidden-md-and-down">
      <el-image :src="people_line_01" :fit="'fill'" />
    </el-col>    
    <el-col  :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="ban_align_center">
      <h2>Резонанс намерений</h2>
      <P>
        Как реализовать свой проект, если результат зависит от действий других независимых участников?
        <el-tooltip
              class="box-item"
              effect="dark"
              content="Подробнее"
              placement="bottom-start"
            >
              <el-button
                type="text"
                class="txt_but"
                :icon="MoreFilled"
                @click="$router.push('/')"
                style="color: black"
              />
            </el-tooltip>  
      </P>
    </el-col>    
    <el-col  :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="ban_align_center">
      <h2>Геоинформационная система</h2>
      <P>
        Покажите участки своего проекта на карте. На одном участке могут быть запланированы множество проектов – покажите их все!
        <el-tooltip
              class="box-item"
              effect="dark"
              content="Подробнее"
              placement="bottom-start"
            >
              <el-button
                type="text"
                class="txt_but"
                :icon="MoreFilled"
                @click="$router.push('/')"
                style="color: black"
              />
            </el-tooltip>  
      </P>
    </el-col>    
    <el-col  :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="ban_align_center">
      <h2>Продвижение</h2>
      <P>
        Привлекайте тысячи людей к продвижению своего проекта. Собирайте группы поддержки.
        <el-tooltip
              class="box-item"
              effect="dark"
              content="Подробнее"
              placement="bottom-start"
            >
              <el-button
                type="text"
                class="txt_but"
                :icon="MoreFilled"
                @click="$router.push('/')"
                style="color: black"
              />
            </el-tooltip>  
      </P>
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
  MoreFilled,
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
const ban_top = '/sh_006.jpg' 
const root_ban_rect_02 = '/root_ban_rect_02.jpg'
const root_ban_rect_01 = '/root_ban_rect_01.jpg'
const root_ban_rect_03 = '/root_ban_rect_03.jpg'
const root_ban_rect_04 = '/root_ban_rect_04.jpg'
const root_ban_rect_05 = '/root_ban_rect_05.jpg'
const root_ban_rect_06 = '/root_ban_rect_06.jpg'
const root_ban_rect_07 = '/root_ban_rect_07.jpg'
const people_line_01 = '/people_line_01.jpg'

const drawer = ref(false)
const radio = ref(4)
const activeName = ref('nastr')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
