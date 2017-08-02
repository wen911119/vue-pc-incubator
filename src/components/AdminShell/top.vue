<template>
  <div class="tabs flex">
    <div class="tab flex flex-column" @click="select(tab)" v-for="(tab,index) in tabs" :key="index" :class="{'active':tab.key==active}">
      <i class="iconfont" v-html="tab.icon"></i>
      {{tab.name}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [{
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
            group: '企业设置',
            items: [
              {
                name: '财务信息',
                icon: '&#xe654;',
                key: 'hello13'
              },
              {
                name: '项目管理',
                icon: '&#xe65a;',
                key: 'hello14'
              },
              {
                name: '权限管理',
                icon: '&#xe655;',
                key: 'hello15'
              }
            ]
          }
        ]
      }],
      active: ''
    }
  },
  mounted() {
    this.active = this.$route.params.tab
  },
  methods: {
    select(tab) {
      this.active = tab.key
      this.$router.push('/admin/' + tab.key)
    }
  },
  watch: {
    active: function (nv) {
      for (let item of this.tabs) {
        if (item.key == nv) {
          this.$emit('change', item.menu)
          break;
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.active {
  color: #2797ff;
  i {
    color: #2797ff;
  }
}
</style>
