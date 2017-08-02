import errorHelper from './errorHelper.js'
import { ElLoading } from 'element-ui';

import axios from 'axios'
let Get, Post
Get = function (url, params, target) {
    let token = this.$storage.get('fktoken') || 'wenjun'
    console.log('get>token:' + token)
    let self = this
    return new Promise(function (resolve, reject) {
        let loadingOption = target ? { target: target, fullscreen: false } : {}
        let instance = ElLoading.service(loadingOption)
        axios.get(url, { params: params, headers: { 'token': token } }).then(function (response) {
            instance.close()
            if (response.data.status == 0) {
                resolve(response.data.data)
            } else {
                // 统一错误处理
                errorHelper(response.data.code)
            }
        }).catch(function (e) {
            instance.close()
            console.log(e, '网络错误')
        })
    })


}

Post = function (url, params, target) {
    let token = this.$storage.get('fktoken') || 'wenjun'
    console.log('post>token:' + token)
    let self = this
    return new Promise(function (resolve, reject) {
        let loadingOption = target ? { target: target, fullscreen: false } : {}
        let instance = ElLoading.service(loadingOption)

        axios.post(url, params, { headers: { 'token': token } }).then(function (response) {
            self.$loading.hide()
            if (response.data.code == 0 || response.data.status == 0) {
                resolve(response.data.data)
            } else {
                // 统一错误处理
                instance.close()

                errorHelper(response.body.code)
            }
        }).catch(function (e) {
            instance.close()
            console.log('网络错误', e)
        })
    })
}


export default {
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $Get: {
                get() {
                    return Get
                }
            },
            $Post: {
                get() {
                    return Post
                }
            }
        })
    }
}
