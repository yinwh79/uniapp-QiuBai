<template>
  <view 
    class="home-list-item" 
    hover-class="home-list-hover"
    @tap="handleClick"
  >
    <view class="flex-ac">
      <view
        v-if="item.icon"
        class="icon iconfont"
        :class="['icon-'+ item.icon]"
      ></view>
      {{item.name}}
    </view>
    <view class="icon iconfont icon-jinru"></view>
  </view>
</template>

<script>
  export default {
    props:{
      item:Object,
      idx: Number
    },
    methods:{
      handleClick(){
        switch (this.item.clicktype){
          case "navigateTo":
          if(this.item.url){
            uni.navigateTo({
              url: this.item.url
          })}
          break;
          case "switchTab":
          if(this.item.url){ 
            uni.switchTab({
              url: this.item.url
          })}
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
// 功能列表
.home-list
  padding: 20upx;
.home-list-item 
  display: flex;
  justify-content: space-between;
  padding: 20upx;
  // border-top: 1upx solid #EEEEEE;
  border-bottom: 1upx solid #EEEEEE;
  .iconfont
    font-size 28upx
  view
    view:first-child
      color #CCCCCC
      font-size: 32upx;
      margin-right: 10upx;
    view:last-child
      color #333333
.home-list-hover
  background-color: #f4f4f4; 
</style>
