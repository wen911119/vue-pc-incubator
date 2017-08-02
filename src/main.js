// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/loading.css'
import VueI18n from 'vue-i18n'

import modalHelper from './plugins/modalHelper.js'
import ajaxHelper from './plugins/ajaxHelper.js'
import storageHelper from './plugins/storageHelper.js'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(modalHelper)
Vue.use(ajaxHelper)
Vue.use(storageHelper)

const i18n = new VueI18n({
  locale: require('../config/lang.js').default.lang, // 语言标识
  messages: {
    'zh-CN': require('./i18n/lang/zh-CN.json'), // 中文语言包
    'en-US': require('./i18n/lang/en-US.json') // 英文语言包
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
