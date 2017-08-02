<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './style/common.scss';

@font-face {
  font-family: 'iconfont';
  src: url('./assets/iconfont.eot');
  src: url('./assets/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./assets/iconfont.woff') format('woff'),
  url('./assets/iconfont.ttf') format('truetype'),
  url('./assets/iconfont.svg#iconfont') format('svg');
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
