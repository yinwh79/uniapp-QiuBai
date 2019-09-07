<template>
  <view>
    <view class="uni-tab-bar">
      <!-- 横向滚动导航 -->
      <scroll-view scroll-x class="uni-swiper-tab">
        <block 
          v-for="(tab,idx) in tabBars"
          :key ="tab.id"
         >
          <view 
            class="swiper-tab-list"
            :class="{'active':tabIndex == idx}"
            @tap = 'tabtap(idx)'
          >
            {{tab.name}}
            <view class="swiper-tab-line"></view>                      
          </view>
        </block>
      </scroll-view>
    </view>
       	    
  </view>	
</template>

<script>
  export default{
    props:{
      tabBars: Array,
      tabIndex: Number
    },
    methods: {
      // tab点击切换
      tabtap(idx){
        // this.tabIndex = idx
        this.$emit('tabtap',idx)
      },
      // tab滑动切换
      tabChange(e){
        // console.log(e.detail.current);
        this.tabIndex = e.detail.current
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '~@/common/stylus/_vars'
  .uni-swiper-tab
    border-bottom: 1upx solid #eee;
  .swiper-tab-list
    color $c-font-tabbar
    font-weight: 700;
    &.active
      color $c-font-tabbar-active
      .swiper-tab-line
        width: 70upx;
        margin: 0 auto; 
        border-bottom: 10upx solid $c-bd-tabbar-active;  
        border-radius 20upx 
</style>
