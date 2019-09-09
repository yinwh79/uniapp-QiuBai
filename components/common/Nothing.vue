<template>
  <view class="nothing animated fadeIn">
    <image src="../../static/common/nothing.png" mode="widthFix"></image>
  </view>
</template>

<script>
  export default{
    name: 'Nothing'
  }
</script>

<style lang="stylus" scoped>
  .nothing
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    image
      position: absolute;
      top: 50%;
      left: 50%;
      transform translate(-50%,-50%)
      width: 60%
</style>
