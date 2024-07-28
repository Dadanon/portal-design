<template>
    <el-row>
        <el-col :span="24"><div class="grid-content tutor_message">
            <span>Что такое проект на платформе? Какие проекты можно публиковать? Какие здесь инструменты для его разработки, продвижения и реализации? </span><br />
            <el-button type="text" @click="$router.push('/help_prg')" style="color: black">Подробнее <el-icon><DArrowRight /></el-icon></el-button>
        </div></el-col>
    </el-row> 
    <span class="txt_big_size">Название проекта</span>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane name="nastr">
            <template #label>
             <span class="custom-tabs-label">
                <el-icon><setting /></el-icon>
            </span>
            </template>
                    <el-row>
                        <el-col :span="24"><div class="grid-content">
                            <el-button type="primary">Участкок (участки) проекта на карте</el-button>
                            <el-tooltip
                              class="box-item"
                              effect="dark"
                              content="Как работать с картой?"
                              placement="bottom-start"
                              >        
                              <el-button type="default" circle="true" color="#d4e6b5" class="help_but_circle" :icon="QuestionFilled" @click="$router.push('/help_maps')" />          
                            </el-tooltip>
                            <span class="txt_big_size">Состояние проекта:</span>
                            <el-radio-group v-model="radio">
                                <el-radio :value="3">Черновик (видно только команде)</el-radio>
                                <el-radio :value="6">Концепция</el-radio>
                                <el-radio :value="9">Проект</el-radio>
                                <el-radio :value="5">Реализован</el-radio>
                            </el-radio-group>
                        </div></el-col>
                    </el-row> 
                    <span class="txt_big_size">Баннер проекта:</span>
                    <el-row>
                        <el-col :xs="7" :sm="7" :md="5" :lg="3" :xl="3"><div class="grid-content">
                            <el-image class="circle_img" :src="prg_ban_01" :fit="fit" />
                        </div></el-col>
                        <el-col :xs="10" :sm="10"  :md="19" :lg="21" :xl="21"><div class="grid-content">
                            <span class="txt_big_size">Название проекта <el-button type="text" :icon="Edit" @click="open_edit_ban_prg" /></span>
                            <span>Краткое описание. <br/> Ну и как-то загружать картинку по клику на ней или кнопке рядом ... без разницы</span>
                        </div></el-col>
                    </el-row> 
                    <el-row>
                        <el-col :span="24"><div class="grid-content">
                          <span class="txt_big_size">Презентация проекта:</span>
                          <el-button type="primary" class="normal_but" @click="$router.push('/up_edit_prez')" :icon="Edit">Редактировать презентацию проекта</el-button><br/>
                          <span>Постоянный адрес презентации: https://urbanset.ru/projects/chasy-na-sinusakh-i-kosinusakh-v-css-4</span>
                          <el-tooltip
                            class="box-item"
                            effect="dark"
                            content="Скопировать адрес в буфер обмена"
                            placement="bottom-start"
                          >
                            <el-icon class="margin_left_10"><Share /></el-icon>
                          </el-tooltip>     
                          <br/><el-button type="text" @click="$router.push('/root_see_prez')" style="color: black">Перейти на страницу презентации <el-icon><DArrowRight /></el-icon></el-button>                     
                          <br/><el-badge class="mark" :value="12">
                            <el-button type="text" @click="$router.push('/root_see_prez_comment')" style="color: black">Перейти на страницу комментариев <el-icon><DArrowRight /></el-icon></el-button>
                          </el-badge>
                        </div></el-col>
                    </el-row>                     
                    <el-row>
                        <el-col :span="24"><div class="grid-content">
                            <span class="txt_big_size">Показатели:</span>
                            <span>Количество рабочих мест: 150 мест <el-icon class="margin_left_10"><Edit /></el-icon><el-icon class="margin_left_10"><Delete /></el-icon></span>
                            <br /><el-button class="normal_but" type="primary">Добавить показатель</el-button>
                        </div></el-col>
                    </el-row> 
                    <el-row>
                        <el-col :span="24"><div class="grid-content">
                            <span class="main_txt">Суммарные показатели, унаследованные из подпроектов:</span><br />
                            <span>
                              Количество мест в школе: 150 мест;<br />
                              Количество мест в ДДУ: 150 мест;<br />                              
                            </span>
                        </div></el-col>
                    </el-row>     
                    <el-row>
                        <el-col :span="24"><div class="grid-content">
                            <span class="txt_big_size">Тэги:</span>
                            <el-button-group>
                              <el-button type="primary" plain>Развитие города &nbsp;<el-icon><Close /></el-icon></el-button>
                              <el-button type="primary" plain>Застройка &nbsp;<el-icon><Close /></el-icon></el-button>
                              <el-button plain><el-icon><Plus /></el-icon>&nbsp;Добавить</el-button>
                            </el-button-group>
                        </div></el-col>
                    </el-row>              
                    <el-row>
                        <el-col :span="24"><div class="grid-content">
                            <span class="txt_big_size">Схемы проекта:</span>

                              <el-button type="primary" plain>Территории</el-button>
                              <el-button type="primary" plain>Образование</el-button>
                              <el-button type="primary" plain>Медицина</el-button>
                              <el-button plain><el-icon><Plus /></el-icon>&nbsp;Создать новую схему</el-button>
                        </div></el-col>
                    </el-row>  
                    <el-row>
                      <el-col :span="24"><div class="grid-content tutor_message">
                        <span>
                          Схемы - основной инструмент для работы с интегральными проектами, которые могут включать в себя сотни подпроектов и связи с десятками партнеров.<br />
                          <dl>
                            <dt>Схемы нужны:</dt>
                              <dd>Для того, чтобы визуализировать и понять связи между подпроектами. Увидеть связи проектов партнеров с вашими подпроектами;</dd>
                              <dd>Чтобы показать существо проектных решений потенциальным участникам. Вы можете вставлять ссылки на схемы в презентацию проекта.</dd>                              
                          </dl>
                          Фильтруя подпроекты по тегам, вы можете построить схемы отдельных направлений проекта. Например, на схеме застройки земельных участков не уместна стипендиальная программа для учителей. 
                          Сделайте отдельные схемы для застройки и для образовательных подпроектов.
                        </span><br />
            <el-button type="text" @click="$router.push('/help_sx')" style="color: black">Как работать со схемой проекта <el-icon><DArrowRight /></el-icon></el-button>
                      </div></el-col>
                    </el-row> 
                    <el-row>
                      <el-col :span="24"><div class="grid-content">
                        <span class="txt_big_size">Действия участников команды:</span>
                        </div></el-col>
                    </el-row>                     
                    <el-row class="user_small_kard" align="middle">
                        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"><div class="grid-content">
                          <el-image class="user_avatar_sm_circle" :src="user_cir_avatar" :fit="fit" />
                        </div></el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="grid-content">
                            <span class="txt_in_sm_kard">Владимир Ильич Ленин</span>
                        </div></el-col>
                        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content">
                            <span class="txt_in_sm_kard">2024.12.15 15:30</span>
                        </div></el-col>
                        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content">
                            <el-tooltip
                            class="box-item"
                            effect="dark"
                            content="Удалить это изменение"
                            placement="bottom-start"
                          >
                          <el-button type="text" plain :icon="Delete" class="but_in_users_sm_kard" />
                          </el-tooltip>                                 
                        </div></el-col>                        
                    </el-row>    
                    <el-row class="user_small_kard" align="middle">
                        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"><div class="grid-content">
                          <el-image class="user_avatar_sm_circle" :src="user_cir_avatar" :fit="fit" />
                        </div></el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="grid-content">
                            <span class="txt_in_sm_kard">Владимир Ильич Ленин</span>
                        </div></el-col>
                        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content">
                            <span class="txt_in_sm_kard">2024.12.15 15:30</span>
                        </div></el-col>
                        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content">
                                                        
                        </div></el-col>                        
                    </el-row> 
                    <el-row class="user_small_kard" align="middle">
                        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"><div class="grid-content">
                          <el-image class="user_avatar_sm_circle" :src="user_cir_avatar" :fit="fit" />
                        </div></el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="grid-content">
                            <span class="txt_in_sm_kard">Владимир Ильич Ленин</span>
                        </div></el-col>
                        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content">
                            <span class="txt_in_sm_kard">2024.12.15 15:30</span>
                        </div></el-col>
                        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content">
                                                        
                        </div></el-col>                        
                    </el-row>                    
                    <el-row  align="middle">
                      <el-col :xs="20" :sm="6" :md="5" :lg="4" :xl="3"><div class="grid-content">
                        <el-button type="primary" class="normal_but" :icon="Delete" disabled>Удалить проект</el-button>
                      </div></el-col>
                      <el-col :xs="7" :sm="7" :md="6" :lg="6" :xl="5"><div class="grid-content" style="height: 100%; align-content: center;">
                        <span>Право на удаление этого проекта:</span>
                      </div></el-col>                      
                      <el-col :xs="3" :sm="2" :md="2" :lg="2" :xl="2"><div class="grid-content" style="height: 100%; align-content: center;">
                        <el-image class="user_avatar_sm_circle" :src="user_cir_avatar" />
                      </div></el-col>                      
                      <el-col :xs="7" :sm="7" :md="4" :lg="6" :xl="10"><div class="grid-content" style="height: 100%; align-content: center;">
                        Владимир Ильич Ленин
                      </div></el-col>                                            
                    </el-row>   
        </el-tab-pane>
        <el-tab-pane label="Команда" name="komanda">
          <el-row>
            <el-col :span="24"><div class="grid-content tutor_message">
              <span>
                Все участники команды равны в правах с одним исключением - только создатель проекта может его удалить. У каждого проекта/подпроекта своя уникальная команда.<br />
                При создании проекта/подпроекта автоматически создается команда проекта с единственным участником - его создателем. Команды без проекта не бывает.
              </span><br />
              <el-button type="text" @click="$router.push('/help_komand')" style="color: black">Подробнее о командах <el-icon><DArrowRight /></el-icon></el-button>
            </div></el-col>
          </el-row>             
        </el-tab-pane>        
        <el-tab-pane label="Группа" name="group">
          <el-row>
            <el-col :span="24"><div class="grid-content tutor_message">
              <span>
                При создании проекта/подпроекта автоматически создается группа проекта с единственным участником - его создателем. Группы без проекта не бывает.
              </span><br />
              <el-button type="text" @click="$router.push('/help_group')" style="color: black">Подробнее о группах <el-icon><DArrowRight /></el-icon></el-button>
            </div></el-col>
          </el-row>             
        </el-tab-pane>         
        <el-tab-pane label="Запросы" name="zapr">
          <el-row>
            <el-col :span="24"><div class="grid-content tutor_message">
              <span>
                Что необходимо проекту от потенциальных партнеров? Вы можете опубликовать сколько угодно запросов проекта, каждый из которых фокусируйте на своей целевой группе.<br />
                Когда будете принимать предложения партнеров - можно будет создать новый подпроект и сделать его совместным. Или остаться хозяином положения.
              </span><br />
              <el-button type="text" @click="$router.push('/help_zapr_offert')" style="color: black">Подробнее о запросах и предложениях <el-icon><DArrowRight /></el-icon></el-button>
            </div></el-col>
          </el-row>             
          <el-row>
                <el-col :span="24"><div class="grid-content">
                  <el-button type="primary" class="normal_but" :icon="Plus">Создать новый запрос</el-button><br/>
                </div></el-col>
            </el-row>             
            <el-row class="border_top">
                <el-col :xs="7" :sm="7" :md="5" :lg="3" :xl="3"><div class="grid-content">
                            <el-image class="circle_img" :src="prg_ban_01" :fit="fit" />
                        </div></el-col>
                        <el-col :xs="10" :sm="10"  :md="19" :lg="21" :xl="21"><div class="grid-content">
                            <span class="txt_big_size">Название запроса <el-button type="text" :icon="Edit" @click="open_edit_ban_prg" /></span>
                            <span>Краткое описание запроса. <br/> Ну и как-то загружать картинку по клику на ней или кнопке рядом ... без разницы</span>
                        </div></el-col>              
            </el-row> 
            <el-col :span="24"><div class="grid-content">
                          <span class="txt_big_size">Презентация запроса:</span>
                          <el-button type="primary" class="normal_but" @click="$router.push('/up_edit_prez')" :icon="Edit">Редактировать презентацию запроса</el-button><br/>
                          <span>Постоянный адрес презентации: https://urbanset.ru/projects/chasy-na-sinusakh-i-kosinusakh-v-css-4</span>
                          <el-tooltip
                            class="box-item"
                            effect="dark"
                            content="Скопировать адрес в буфер обмена"
                            placement="bottom-start"
                          >
                            <el-icon class="margin_left_10"><Share /></el-icon>
                          </el-tooltip>     
                          <br/><el-button type="text" @click="$router.push('/root_see_prez')" style="color: black">Перейти на страницу презентации <el-icon><DArrowRight /></el-icon></el-button>                     
                          <br/><el-badge class="mark" :value="12">
                            <el-button type="text" @click="$router.push('/root_see_prez_comment')" style="color: black">Перейти на страницу комментариев <el-icon><DArrowRight /></el-icon></el-button>
                          </el-badge>
                        </div></el-col>              
            <el-row>
                        <el-col :span="24"><div class="grid-content">
                            <span class="txt_big_size">Тэги:</span>
                            <el-button-group>
                              <el-button type="primary" plain>Развитие города &nbsp;<el-icon><Close /></el-icon></el-button>
                              <el-button type="primary" plain>Застройка &nbsp;<el-icon><Close /></el-icon></el-button>
                              <el-button plain><el-icon><Plus /></el-icon>&nbsp;Добавить</el-button>
                            </el-button-group>
                        </div></el-col>
            </el-row>   
            <el-row class="under_line" style="margin-top: 10px;">
                        <el-col :span="24"><div class="grid-content">
                              <el-tooltip
                                class="box-item"
                                effect="dark"
                                content="Удалить запрос"
                                placement="bottom-start"
                              >
                                <el-button type="primary" :icon="Delete">Удалить запрос</el-button>
                              </el-tooltip>                              
                        </div></el-col>
            </el-row>                                    
        </el-tab-pane>
        <el-tab-pane label="Предложения" name="predl">
          <el-row>
            <el-col :span="24"><div class="grid-content tutor_message">
              <span>
                Что проект предлагает потенциальным партнерам? Зачем он кому-то нужен, как ваши партнеры будут его использовать? Вы можете опубликовать множество предложений проекта, каждое из которых фокусируйте на своей целевой группе.<br />
                Когда партнеры будут принимать ваше предложение - у них опционально формируются новые подпроекты. Они могут сделать новые подпроекты совместными, если ваше предложение это предусматривает.<br />
                Вы можете сделать предложение, направленное не деловым партнерам, а кругу людей. Такое предложение не предполагает совместную работу или создание новых подпроектов, только участие людей в решении задач проекта. Собирайте неравнодушных в группу проекта.
              </span><br />
              <el-button type="text" @click="$router.push('/help_zapr_offert')" style="color: black">Подробнее о запросах и предложениях <el-icon><DArrowRight /></el-icon></el-button>
            </div></el-col>
          </el-row>         
          <el-row>
                <el-col :span="24"><div class="grid-content">
                  <el-button type="primary" class="normal_but" :icon="Plus">Создать новое предложение</el-button><br/>
                </div></el-col>
            </el-row>             
            <el-row class="border_top">
                <el-col :xs="7" :sm="7" :md="5" :lg="3" :xl="3"><div class="grid-content">
                            <el-image class="circle_img" :src="prg_ban_01" :fit="fit" />
                        </div></el-col>
                        <el-col :xs="10" :sm="10"  :md="19" :lg="21" :xl="21"><div class="grid-content">
                            <span class="txt_big_size">Название предложения <el-button type="text" :icon="Edit" @click="open_edit_ban_prg" /></span>
                            <span>Краткое описание предложения. <br/> Ну и как-то загружать картинку по клику на ней или кнопке рядом ... без разницы</span>
                        </div></el-col>              
            </el-row> 
            <el-col :span="24"><div class="grid-content">
                          <span class="txt_big_size">Презентация предложения:</span>
                          <el-button type="primary" class="normal_but" @click="$router.push('/up_edit_prez')" :icon="Edit">Редактировать презентацию предложения</el-button><br/>
                          <span>Постоянный адрес презентации: https://urbanset.ru/projects/chasy-na-sinusakh-i-kosinusakh-v-css-4</span>
                          <el-tooltip
                            class="box-item"
                            effect="dark"
                            content="Скопировать адрес в буфер обмена"
                            placement="bottom-start"
                          >
                            <el-icon class="margin_left_10"><Share /></el-icon>
                          </el-tooltip>     
                          <br/><el-button type="text" @click="$router.push('/root_see_prez')" style="color: black">Перейти на страницу презентации <el-icon><DArrowRight /></el-icon></el-button>                     
                          <br/><el-badge class="mark" :value="12">
                            <el-button type="text" @click="$router.push('/help_prg')" style="color: black">Перейти на страницу комментариев <el-icon><DArrowRight /></el-icon></el-button>
                          </el-badge>
                        </div></el-col>              
            <el-row>
                        <el-col :span="24"><div class="grid-content">
                            <span class="txt_big_size">Тэги:</span>
                            <el-button-group>
                              <el-button type="primary" plain>Развитие города &nbsp;<el-icon><Close /></el-icon></el-button>
                              <el-button type="primary" plain>Застройка &nbsp;<el-icon><Close /></el-icon></el-button>
                              <el-button plain><el-icon><Plus /></el-icon>&nbsp;Добавить</el-button>
                            </el-button-group>
                        </div></el-col>
            </el-row>   
            <el-row class="under_line" style="margin-top: 10px;">
                        <el-col :span="24"><div class="grid-content">
                              <el-tooltip
                                class="box-item"
                                effect="dark"
                                content="Удалить запрос"
                                placement="bottom-start"
                              >
                                <el-button type="primary" :icon="Delete">Удалить предложение</el-button>
                              </el-tooltip>                              
                        </div></el-col>
            </el-row>                                    
        </el-tab-pane>
        <el-tab-pane label="Задачи" name="task">
          <el-row>
                        <el-col :span="5"><div class="grid-content">
                            <span>Раздел в разработке</span>
                        </div></el-col>
          </el-row>             
        </el-tab-pane>
    </el-tabs>
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
const prg_ban_01 = '/us_esher_01.jpg'
const user_cir_avatar = '/lenin.jpg'

const drawer = ref(false)
    const radio = ref(4)
  const activeName = ref('nastr')
  
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }
  
  const open_edit_ban_prg = () => {
  ElMessageBox.prompt('Здесь в отдельных полях название проекта/запроса/предложения и краткое описание', 'Как-то так ... или как тебе проще', {
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
  
  <style>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
  }

  
  </style>