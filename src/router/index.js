import Vue from 'vue'
import Router from 'vue-router'
import AdminShell from '@/components/AdminShell/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Index',
      component: AdminShell,
      children: [
        // 首页tab
        {
          path: 'index',
          component: function (resolve) {
            require(['@/components/Empty'], resolve)
          }
        },
        {
          path: 'index/hello1',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'index/hello2',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'index/hello3',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'index/hello4',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'index/hello5',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'index/hello6',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'index/hello7',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        // 数据和报表tab
        {
          path: 'excel',
          component: function (resolve) {
            require(['@/components/Empty'], resolve)
          }
        },
        {
          path: 'excel/hello8',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'excel/hello9',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'excel/hello10',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'excel/hello11',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        {
          path: 'excel/hello12',
          component: function (resolve) {
            require(['@/components/Hello'], resolve)
          }
        },
        // 设置tab
        {
          path: 'setting',
          component: function (resolve) {
            require(['@/components/Empty'], resolve)
          }
        },
        {
          path: 'setting/flowManage/index',
          component: function (resolve) {
            require(['@/modules/setting/flowManage/index/app.vue'], resolve)
          }
        },
        {
          path: 'setting/flowManage/detail',
          component: function (resolve) {
            require(['@/modules/setting/flowManage/detail/app.vue'], resolve)
          }
        },
        {
          path: 'setting/approveFlow',
          component: function (resolve) {
            require(['@/modules/setting/approveFlow/app.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '*',
      redirect: {
        path: '/admin/setting'
      }
    },
  ]
})
