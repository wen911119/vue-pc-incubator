<template>
    <div class="admin-shell flex">
        <div class="left">
            <left-menu></left-menu>
    
        </div>
        <div class="right flex-1 flex flex-column">
            <div class="right-top">
                <tabs></tabs>
    
            </div>
            <div class="router-view flex-1">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from './top.vue'
import LeftMenu from './left.vue'
export default {
    mounted() {
        console.log(this.$route.path.split('/'))
        let paths = this.$route.path.split('/')
        this.$store.commit('UpdateTab', paths[2])        
        this.$store.commit('UpdatePage', paths[3])
    },
    components: {
        Tabs,
        LeftMenu
    }
}
</script>

<style scoped lang="scss">
.admin-shell {
    height: 100%;
    .left {
        width: 200px;
        border-right: 1px solid #ccc;
        background-color: #20335d;
        color: #fff;
    }
    .right {
        .right-top {
            height: 80px;
            border-bottom: 1px solid #ccc;
        }
        .router-view {
            overflow: auto;
        }
    }
}
</style>
