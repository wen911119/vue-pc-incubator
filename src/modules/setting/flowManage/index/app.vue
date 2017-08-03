<template>
  <div>
    <div>{{$t('流程管理')}}</div>
    <div>
      <div>
        <div>{{$t('已开启流程')}}</div>
        <div>{{$t('正在使用中的流程')}}</div>

      </div>
      <hr/>
      <div>
        <div>{{$t('选择流程')}}</div>
        <div>{{$t('选择流程提示')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import FlowItem from "./flowItem.vue"
export default {
  data() {
    return {

    }
  },

}
</script>

<style lang="scss" scoped>

</style>
