<template>
  <div>
    <div class="logo h-c v-c">
      <img :src="logo" alt="logo">
    </div>
    <div class="user-info v-c">
      <img src="http://m3.banggo.com/sources/cms/20170802/app_syrk9_m1--.jpg" alt="头像">
      <label>文君</label>
    </div>
    <div class="menu">
      <div class="group" v-for="(group, index) in menu" :key="index">
        <div class="group-name v-c">{{group.group}}</div>
        <div class="item v-c" @click="select(item)" v-for="(item,i) in group.items" :key="i" :class="{'active':item.key==active}">
          <span></span>
          <i class="iconfont" v-html="item.icon"></i>
          <label>{{item.name}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let logo = require('@/assets/logo.png')
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      logo: logo
    }
  },
  computed: {
    ...mapState({
      active: state => state.appShell.currentPage
    }),
    ...mapGetters({
      menu: 'currentMenu',
      url: 'url'
    })
  },

  methods: {
    select(item) {
      this.$store.commit('UpdatePage', item.key)
      this.$router.push(this.url)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: 80px;
  img {
    width: 150px;
    height: 36px;
  } // border-bottom: 1px solid #fff;
}

.user-info {
  height: 90px; // border-bottom: 1px solid #fff;
  img {
    width: 38px;
    height: 38px;
    border-radius: 100%;
    margin: 0 10px 0 47px;
  }
}

.menu {
  .group {
    >div {
      height: 48px; // border-bottom: 1px solid #fff;
    }
    .group-name {
      text-indent: 20px;
      color: #2697ff;
      font-size: 14px;
    }
    .item {
      position: relative;
      font-size: 14px;
      i {
        color: #fff;
        opacity: 0.5;
        margin-left: 48px;
        font-size: 14px;
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: #2729ff;
        display: none;
      }
      &.active {
        background-color: rgba(0, 0, 0, 0.3);
        i{
          opacity: 1;
        }
        span {
          display: inline-block;
        }
      }
    }
  }
}
</style>
