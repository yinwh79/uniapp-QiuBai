<template>
 <view class="other-login flex-ac">
   <view class="">
     <view class="icon iconfont icon-weixin flex-c-c"></view>         
   </view>
   <view class="">
     <view class="icon iconfont icon-xinlangweibo flex-c-c"></view>         
   </view>
   <view class="">
     <view class="icon iconfont icon-QQ flex-c-c"></view>   
   </view>      
 </view>
</template>

<script>
</script>

<style lang="stylus" scoped>
// 三方登录
.other-login
  padding: 20upx 80upx;  
  display flex
  justify-content: space-between;    
  .icon    
    width: 100upx;
    height: 100upx;
    border: 1upx solid;
    font-size: 55upx;
    border-radius 50%
    color #FFFFFF
    &.icon-QQ
    	background: #2CAEFC;
    &.icon-weixin
      background-color: #2BD19B;
    &.icon-xinlangweibo
      background-color: #FC7729;
</style>
