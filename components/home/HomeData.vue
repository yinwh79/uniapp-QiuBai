<template>
  <view class="flex-c-c">
   <view>{{item.num}}</view><view>{{item.name}}</view>   
  </view>
</template>

<script>
  export default {
    props:{
      item: Object
    }
  }
</script>

<style scoped lang="stylus">
// 数据内容
.home-data
  padding: 20upx 40upx;
  view
    flex 1
    color: #989898;
    flex-direction: column;
    &:first-child
      font-size: 32upx;
      color: #333333;  
</style>
