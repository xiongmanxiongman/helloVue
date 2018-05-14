import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Index1 from '@/components/Index1'
import Index2 from '@/components/Index2'
import NiHao from '@/components/NiHao'
import Apple from '@/components/Apple'

Vue.use(Router)

export default new Router({
  routes: [
    {
      index:'1',
      path: '/',
      name: 'Index',
      component: Index,
      class:'el-icon-location',
      title:'Index',
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          index:'1-1',
          path: '/a1',
          name: 'Index1',
          component: Index1,
          title:'Index1'

        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          index:'1-2',
          path: '/a2',
          name: 'Index2',
          component: Index2,
          title:'Index2'
        }
      ]
    },
    {
      index:'2',
      path: '/nihao/:id',
      name: 'NiHao',
      component: NiHao,
      class:'el-icon-menu',
      title:'NiHao'
    },
    {
      index:'3',
      path: '/user/:username/post/:post_id',
      name: 'Apple',
      component: Apple,
      class:'el-icon-document',
      title:'Apple'
    }
  ]
})
