<template>
  <view class="home-info flex-ac">
    <image 
     :src="homeInfo.userpic" 
     mode="widthFix"
     lazy-load
    ></image>
    <view>
      <view>{{homeInfo.username}}</view>
      <view>总访客 {{homeInfo.totalnum}} 今日 {{homeInfo.todaynum}}</view>       
    </view>
    <view class="icon iconfont icon-jinru"></view>
  </view>
</template>

<script>
export default {
    props:{
      homeInfo: Object
    }
}
</script>

<style scoped lang="stylus">
// 登录后
.home-info
  padding: 20upx 40upx;
  image
    flex-shrink 0
    width: 100upx;
    height: 100upx;
    border-radius 50%
    margin-right: 15upx;
  view:nth-of-type(1)
    flex 1
    view:first-child
      font-size: 32upx;
    view:last-child
      color #BBBBBB
</style>
