<template>
	<view>
		<!-- 未登录 -->
    <view class="flex-c-c">
      登录后,体验更多功能
    </view>
    <!-- 三方登录 -->
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
   <!-- 账号密码登录 -->
   <view class="flex-c-c">
     账号密码登录
     <view class="icon iconfont icon-jinru"></view>          
    </view>
   <!-- 数据内容 -->
   <view class="home-data flex-c-c">
     <view class="flex-c-c">
      <view>0</view><view>糗事</view>   
     </view>
     <view class="flex-c-c">
      <view>0</view><view>糗事</view>   
     </view>
     <view class="flex-c-c">
      <view>0</view><view>糗事</view>   
     </view>
     <view class="flex-c-c">
      <view>0</view><view>糗事</view>   
     </view>
   </view>
   <!-- 广告位 -->
   <view class="flex-c-c home-ad">
     <image       
       src="../../static/demo/demo20.jpg" 
       mode="widthFix"
       lazy-load
     ></image>
   </view>
   <!-- 功能列表 -->
   <view class="home-list">
     <view class="home-list-item" hover-class="home-list-hover">
       <view class="icon iconfont icon-liulan">浏览历史</view>
       <view class="icon iconfont icon-jinru"></view>
     </view>
   </view>
	</view>
</template>

<script>
 
	export default {  
		data() {
			return {
				
			};
		},
    // 监听原生标题栏按钮点击事件
    onNavigationBarButtonTap(e){      
      if(e.index === 0){
        console.log('wzjNB');
      }
    }
	}
</script>

<style lang="stylus">
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
// 广告位
.home-ad
  padding: 20upx;          
  image
    border-radius 20upx
    height: 150upx;
// 功能列表
.home-list
  padding: 20upx;
.home-list-item 
  display: flex;
  justify-content: space-between;
  padding: 20upx;
  border-top: 1upx solid #EEEEEE;
  border-bottom: 1upx solid #EEEEEE;
  view:first-child
    color #333333
  view:last-child
    color #CCCCCC
.home-list-hover
  background-color: #f4f4f4;        
</style>
