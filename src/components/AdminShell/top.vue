<template>
  <div class="tabs flex flex-v-center">
    <div class="tab flex flex-column flex-v-center" @click="select(tab)" v-for="(tab,index) in tabs" :key="index" :class="{'active':tab.key==active}">
      <i class="iconfont" v-html="tab.icon"></i>
      {{tab.name}}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {

  computed: {
    ...mapState({
      tabs: state => state.appShell.tabs,
      active: state => state.appShell.currentTab
    }),
    ...mapGetters({
      url: 'url'
    })
  },

  methods: {
    select(tab) {
      this.$store.commit('UpdateTab', tab.key)
      this.$router.push(this.url)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs {
  height: 100%;
  .tab{
    width: 120px;
    font-size: 12px;
    color: #bbb;
    i{
      font-size: 26px;
      margin-bottom: 6px;
      color: #bbb;
    }
  }
  .active {
    color: #2797ff;
    i {
      color: #2797ff;
    }
  }
}
</style>
