<template>
	<view>
    <view class="user-set-about-t flex-c-c">
      <image src="../../static/common/logo.png" mode="widthFix"></image>
      <view>version 1.0.0</view>
    </view>
    <view class="user-set-about-b">
      <block v-for="(item,index) in userSetAboutList" :key="index">
        <home-list-item :item="item"
        :index="index"></home-list-item>
      </block>
    </view>
	</view>
</template>

<script>
  import HomeListItem from '../../components/home/HomeListItem.vue'
	export default {
    components:{
      HomeListItem
    },
		data() {
			return {
				userSetAboutList:[
					// #ifdef APP-PLUS
          // #endif
					{ icon:"",name:"新版本检测",clicktype:"update",url:"" },					
					{ icon:"",name:"仿糗事百科用户协议",clicktype:"",url:"" },
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="stylus"> 
// 关于上半部分
.user-set-about-t
  flex-direction: column;
  padding: 20upx 0;
  view
    font-size: 32upx;
    color #CCCCCC
  image
    width: 65%;
    margin-top: 50upx;
    margin-bottom: 30upx;
.user-set-about-b       
  padding: 10upx 20upx;
</style>
