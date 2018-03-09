import Vue from 'vue'
import Router from 'vue-router'


let Recommend = (resolve) => {
  import('@/components/recommend/recommend.vue').then((module) => {
    resolve(module)
  })
}
let Singer = (resolve) => {
  import('@/components/singer/singer.vue').then((module) => {
    resolve(module)
  })
}

let Rank = (resolve) => {
  import('@/components/rank/rank.vue').then((module) => {
    resolve(module)
  })
}

let Search = (resolve) => {
  import('@/components/search/search.vue').then((module) => {
    resolve(module)
  })
}

let SingerDetail = (resolve) => {
  import('@/components/singerDetail/singer-detail.vue').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path:'',
      redirect:'/recommend'
    },
    {
      path: '/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      name: '推荐',
      component: Recommend,
    },
    {
      path: '/rank',
      name: '排行',
      component: Rank,
    },
    {
      path: '/search',
      name: '搜索',
      component: Search,
    },
    {
      path: '/singer',
      name: '歌手',
      component: Singer,
      children: [
        {
          path: '/singer/:id',
          component: SingerDetail
        }
      ]
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) { // 判断该路由是否需要登录权限
//     if (getToken()) { //以登录
//       next()
//     } else {
//       next({
//         path: '/login', // 验证失败，将会跳转到该路由
//         query: {
//           redirect: to.fullPath
//         } // 将跳转的路由 path 作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// })

// router.afterEach((to, from) => {
//   if(!to.matched.some(r => r.meta.showFoot)) {
//     mapMutations({
//       showFootNav: 'SHOW_FOOT_NAV',
//     }).showFootNav(false)
//   }
//   if(to.name) {
//       mapMutations({setTitle: to.name})
//   }
// })

export default router
