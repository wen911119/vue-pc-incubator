let storage = {
    set: function (name, value) {
        localStorage[name] = value
    },
    get: function (name) {
        return localStorage[name]
    }
}

export default {
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $storage: {
                get() {
                    return storage
                }
            }
        })
    }
}
