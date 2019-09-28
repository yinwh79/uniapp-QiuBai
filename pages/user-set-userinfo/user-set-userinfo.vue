<template>
	<view class="wrapper">
		<view class="user-set-info-list flex-jsb">
      <view>头像</view>
      <view>
        <image 
          :src="userPic" 
          mode="widthFix"
          lazy-load
          @tap="userChooseImg"
        ></image>
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <view class="user-set-info-list flex-jsb">
      <view>昵称</view>
      <view>
        <view class="info-content">wzjNB</view>
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
				// 头像
        userPic:"../../static/demo/userpic/11.jpg"
			}
		},
		methods: {
      // 修改图像
      userChooseImg(){
        uni.chooseImage({
          count: 1,
          sizeType:['compressed'],
          success: (res) => {            
            this.userPic = res.tempFilePaths            
          }
        })
      },
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
    .info-content
      color #000
    image
      width: 80upx;
      height: 80upx;
      border-radius 50%
   view:nth-of-type(3)
    font-size: 40upx;
    margin-left: 20upx;
    color #9b9b9b
</style>
