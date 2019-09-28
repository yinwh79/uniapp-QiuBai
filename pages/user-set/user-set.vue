<template>
	<view class="user-set-wrapper">
		<block
      v-for="(item,idx) in userSetList"
      :key ="idx"
    >
      <home-list-item :item="item"></home-list-item>
    </block>
    <button class="user-loginout" type="primary">退出登录</button>
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
				userSetList:[
					{ icon:"",name:"账号与安全",clicktype:"navigateTo",url:"../../pages/user-safe/user-safe",auth:true },
					{ icon:"",name:"资料编辑",clicktype:"navigateTo",url:"../../pages/user-set-userinfo/user-set-userinfo",auth:true },
					// { icon:"",name:"小纸条",clicktype:"",url:"" },
					{ icon:"",name:"清除缓存",clicktype:"clear",url:"" },
					{ icon:"",name:"意见反馈",clicktype:"navigateTo",url:"../../pages/user-set-help/user-set-help",auth:true },
					{ icon:"",name:"关于糗百",clicktype:"navigateTo",url:"../../pages/user-set-about/user-set-about",auth:false },
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="stylus">
.user-set-wrapper
  padding: 0 20upx;
  .user-loginout
    width: 100%;
    margin: 20upx 0;
    color #333333
    background-color: #ffe933!important;    
</style>
