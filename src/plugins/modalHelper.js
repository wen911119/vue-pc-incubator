

let alert, confirm, prompt

alert = function (message = 'alert', title = '', buttonName = '确定') {
    //return MessageBox({ message, title, confirmButtonText: buttonName })
    alert(message)
}

confirm = function (title = '确定吗', buttons = ['确定', '取消']) {
    //return MessageBox.confirm(message, title)
    confirm(title)
}

prompt = function (title = '请输入xx', buttons = ['确定', '取消']) {
    prompt(title)
}



export default {
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $alert: {
                get() {
                    return alert
                }
            },
            $confirm: {
                get() {
                    return confirm
                }
            },
            $prompt: {
                get() {
                    return prompt
                }
            }
        })
    }
}
