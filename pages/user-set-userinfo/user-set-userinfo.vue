<template>
	<view class="wrapper">
		<view class="user-set-info-list flex-jsb">
      <view>头像</view>
      <view>
        <image src="../../static/demo/userpic/1.jpg" mode="widthFix"></image>
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <button
      type="primary" 
      class="user-set-btn"
      @tap="submit"      
    >完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
      // 提交
			submit(){
        
      }
		}
	}
</script>

<style scoped lang="stylus">
@import "../../common/css/form.css"
.user-set-info-list
   padding: 20upx;
   border-bottom: 1upx solid #F4F4F4;
   view:nth-of-type(1)
    flex: 1;
    font-weight: 700;
    font-size: 30upx;
    color #9b9b9b
   view:nth-of-type(2)
    image
      width: 80upx;
      height: 80upx;
      border-radius 50%
   view:last-child
    font-size: 40upx;
    margin-left: 20upx;
    color #9b9b9b
</style>
