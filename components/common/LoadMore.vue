<template>
  <view class="load-more">
    {{loadtext}}
  </view>
</template>

<script>
  export default{
    name: 'LoadMore',
    props:{
      loadtext: String
    }
  }
</script>

<style lang="stylus" scoped>
  // 上拉加载
  .load-more
    text-align: center;
    color #aaa
    padding: 10upx;
</style>
