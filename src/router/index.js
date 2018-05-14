import Vue from 'vue'
import Router from 'vue-router'
import Cat from '@/animal/Cat'
import Dog from '@/animal/Dog'
import Fox from '@/animal/Fox'
import Animal from '@/animal/Index'
import Apple from '@/fruit/Apple'
import Banana from '@/fruit/Banana'
import Orange from '@/fruit/Orange'
import Fruit from '@/fruit/Index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/apple' },
    {
      index:'1',
      path: '/fruit',
      name: 'Fruit',
      component: Fruit,
      class:'el-icon-view',
      title:'水果',
      children: [
        {
          index:'1-1',
          path: '/apple',
          name: 'Apple',
          component: Apple,
          title:'苹果'

        },
        {
          index:'1-2',
          path: '/banana',
          name: 'Banana',
          component: Banana,
          title:'香蕉'

        },
        {
          index:'1-3',
          path: '/orange',
          name: 'Orange',
          component: Orange,
          title:'橘子'
        }
      ]
    },
    {
      index:'2',
      path: '/animal',
      name: 'Animal',
      component: Animal,
      class:'el-icon-location-outline',
      title:'动物',
      children: [
        {
          index:'2-1',
          path: '/cat',
          name: 'Cat',
          component: Cat,
          title:'小猫'

        },
        {
          index:'2-2',
          path: '/fox',
          name: 'Fox',
          component: Fox,
          title:'狐狸'

        },
        {
          index:'2-3',
          path: '/dog',
          name: 'Dog',
          component: Dog,
          title:'小狗'
        }
      ]
    }
  ]
})
