<template>
  <view class="index-item">
    <!-- 头像昵称 -->
  	<view class="index-item-row1">
  		<view>
  			<image 
  			:src="item.userpic" 
  			mode="widthFix" 
  			lazy-load></image>
        {{item.username}}
  		</view>
      <view>
        <view class="icon iconfont icon-zengjia"></view>
         关注         
      </view>
  	</view>
    <!-- 标题 -->
  	<view class="index-item-row2">{{item.title}}</view>
    <!-- 图片视频 -->
  	<view class="index-item-row3 flex-c-c">
      <!-- 图片 -->
      <image 
        :src="item.titlepic"
        mode="widthFix" 
        lazy-load
       ></image>
      <template v-if="item.type=='vedio'">
        <!-- 视频 -->
        <view class="icon iconfont icon-bofang index-vedio-play"></view>
        <!-- 视频详情 -->
        <view class="index-vedio-info">
          {{item.playnum}}次播放 {{item.long}}
        </view>
      </template>
    </view>
    <!-- 点赞分享 -->
  	<view class="index-item-row4">
      <view>
        <view 
          class="icon iconfont icon-icon_xiaolian-mian"
          :class="{active: item.infonum.index == 1}"
        ></view>
        <view>{{item.infonum.dingnum}}</view>
        <view 
          class="icon iconfont icon-kulian"
          :class="{active: item.infonum.index == 2}"
        ></view>
        <view>{{item.infonum.cainum}}</view>                   
      </view>
      <view>
        <view class="icon iconfont icon-pinglun1"></view>
        <view>{{item.commentnum}}</view>
        <view class="icon iconfont icon-zhuanfa"></view>
        <view>{{item.sharenum}}</view>  
      </view>
    </view>
  </view>
</template>

<script>
  export default{
    name: "IndexList",
    props: {
      item: Object,
      idx: Number
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/_vars'
  .index-item
    padding: 20upx;
    border-bottom 1px solid $c-bd-indexItem
    .index-item-row1
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>view:first-child
        display: flex;
        align-items: center;
        image
          width: 90upx;
          height: 90upx;
          border-radius 50%
          margin-right: $space-sm;
      &>view:last-child
        display: flex;
        align-items: center;
        background $bgc-guanzhu
        border-radius $radius-xs
        padding: 0 $space-xxxs;
    .index-item-row2
      padding $space-xs 0
      font-size: $font-lg;
    // 图片视频
    .index-item-row3
      position: relative;
      image
        width: 100%
        border-radius $radius-lg
      .index-vedio-play
        position: absolute;
        font-size: $space-xxxxl;
        color $c-white
      .index-vedio-info
        position: absolute;
        bottom: $space-xxxxs;
        right: $space-xxxxs;
        border-radius $radius-xxl
        font-size: $font-sm;
        padding: 0 $space-xxs;
        color $c-white
        background $bgc-vedioInfo
    // 点赞分享
    .index-item-row4
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding $space-xs 0
      color $c-font-inactive
      .icon
        margin-right $space-xxxs
        &.active
          color $c-active
      &>view:first-child,
      &>view:last-child     
        display: flex;
        align-items: center;
        &>view:nth-of-type(2)
          margin-right: $space-xxxs;
</style>
