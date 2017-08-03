// initial state
const state = {
    tabs: [
        {
            name: '主页',
            key: 'index',
            icon: '&#xe64b;',
            menu: [
                {
                    group: '企业设置',
                    items: [
                        {
                            name: '财务信息',
                            icon: '&#xe654;',
                            key: 'hello1'
                        },
                        {
                            name: '项目管理',
                            icon: '&#xe65a;',
                            key: 'hello2'
                        },
                        {
                            name: '权限管理',
                            icon: '&#xe655;',
                            key: 'hello3'
                        }
                    ]
                }, {
                    group: '流程管理',
                    items: [
                        {
                            name: '流程管理',
                            icon: '&#xe657;',
                            key: 'hello4'
                        },
                        {
                            name: '审批流',
                            icon: '&#xe658;',
                            key: 'hello5'
                        }
                    ]
                }, {
                    group: '合规管控',
                    items: [
                        {
                            name: '费用标准',
                            icon: '&#xe656;',
                            key: 'hello6'
                        },
                        {
                            name: '预算管理',
                            icon: '&#xe659;',
                            key: 'hello7'
                        }
                    ]
                }
            ]
        },
        {
            name: '数据和报表',
            icon: '&#xe653;',
            key: 'excel',
            menu: [
                {
                    group: '企业设置',
                    items: [
                        {
                            name: '财务信息',
                            icon: '&#xe654;',
                            key: 'hello8'
                        },
                        {
                            name: '项目管理',
                            icon: '&#xe65a;',
                            key: 'hello9'
                        },
                        {
                            name: '权限管理',
                            icon: '&#xe655;',
                            key: 'hello10'
                        }
                    ]
                }, {
                    group: '流程管理',
                    items: [
                        {
                            name: '流程管理',
                            icon: '&#xe657;',
                            key: 'hello11'
                        },
                        {
                            name: '审批流',
                            icon: '&#xe658;',
                            key: 'hello12'
                        }
                    ]
                }
            ]
        }, {
            name: '设置',
            key: 'setting',
            icon: '&#xe642;',
            menu: [
                {
                    group: '流程管理',
                    items: [
                        {
                            name: '流程管理',
                            icon: '&#xe657;',
                            key: 'flowManage'
                        },
                        {
                            name: '审批流',
                            icon: '&#xe658;',
                            key: 'approveFlow'
                        }
                    ]
                }
            ]
        }
    ],
    currentTab: 'setting',
    currentPage: ''
}

// getters
const getters = {
    currentMenu: function (state) {
        let menu = []
        for (let tab of state.tabs) {
            if (tab.key == state.currentTab) {
                menu = tab.menu
                break
            }
        }
        return menu
    },
    url: function (state) {
        return '/admin/' + state.currentTab + '/' + state.currentPage
    }
}

// actions

const actions = {}


// mutations

const mutations = {
    UpdatePage(state, page) {
        state.currentPage = page
    },
    UpdateTab(state, tab) {
        state.currentTab = tab
        state.currentPage = ''
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}