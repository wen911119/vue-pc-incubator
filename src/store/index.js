import Vue from 'vue'
import Vuex from 'vuex'
// import * as state from './states'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import schedule from './modules/schedule'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state:{
        DateTimePickerVisable:false,
        DateTimePickerValue:''
    },
    actions,
    getters,
    mutations,
    modules: {
        schedule
    },
    strict: debug
})