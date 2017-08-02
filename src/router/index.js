import Vue from 'vue'
import Router from 'vue-router'
import AdminShell from '@/components/AdminShell/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/:tab',
      name: 'Index',
      component: AdminShell,
      children: [{
        path: '',
        component: function (resolve) {
          require(['@/components/Empty'], resolve)
        }
      },{
        path: 'hello1',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello2',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello3',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello4',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello5',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello6',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello7',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello8',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello9',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello10',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello11',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello12',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello13',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello14',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      },{
        path: 'hello15',
        component: function (resolve) {
          require(['@/components/Hello'], resolve)
        }
      }]
    },
    {
      path: '*',
      redirect: {
        path: '/admin/setting'
      }
    },
  ]
})
