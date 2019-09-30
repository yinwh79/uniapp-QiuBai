<template>
	<view>
		<!-- 未登录 -->
    <template v-if="!isLogin">
      <view class="flex-c-c">
         登录后,体验更多功能
       </view>
       <!-- 三方登录 -->
       <home-other-login></home-other-login>
      <!-- 账号密码登录 -->
      <view class="flex-c-c" @tap="onLogin">
        账号密码登录
        <view class="icon iconfont icon-jinru"></view>          
       </view>
    </template>
   <!-- 登录 -->
    <template v-else>
      <home-info :homeInfo="homeInfo"></home-info>
    </template>
   <!-- 数据内容 -->
   <view class="home-data flex-c-c">
     <block
      v-for="(item,idx) in homedata"
      :key = "idx"
     >
       <home-data :item="item"></home-data>
     </block>
     
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
    <block v-for="(item,idx) in homeList" :key="idx">
      <home-list-item 
        :item="item"
        :idx ="idx"
      ></home-list-item>
    </block>
   </view>
	</view>
</template>

<script>
  import HomeListItem from '../../components/home/HomeListItem.vue'
  import HomeInfo from '../../components/home/HomeInfo.vue'
  import HomeOtherLogin from '../../components/home/HomeOtherLogin.vue'
  import HomeData from '../../components/home/HomeData.vue'
	export default {
    components:{
      HomeListItem,
      HomeInfo,
      HomeOtherLogin,
      HomeData
    },
    onLoad() {
      uni.getProvider({
      	service: 'oauth',
      	success: (result) => {
      		this.providerList = result.provider.map((value) => {
      			let providerName = '';
      			let icon='';
      			switch (value) {
      				case 'weixin':
      					providerName = '微信登录';
      					icon='weixin';
      					break;
      				case 'qq':
      					providerName = 'QQ登录';
      					icon='QQ';
      					break;
      				case 'sinaweibo':
      					providerName = '新浪微博登录';
      					icon='xinlangweibo';
      					break;
      				// #ifdef MP-ALIPAY
      				case 'alipay':
      					providerName = '支付宝登录';
      					icon='changyonglogo30';
      					break;
      				// #endif
      			}
      			return {
      				name: providerName,
      				icon:icon,
      				id: value
      			}
      		});
      		
      	},
      	fail: (error) => {
      		console.log('获取登录通道失败', error);
      	}
      });
    },
		data() {
			return {
				isLogin: false,
        // 功能列表数据
        homeList:[
          {icon:"liulan",name:"浏览历史"},
          {icon:"huiyuanvip",name:"糗百认证"},
          {icon:"keyboard",name:"审核糗事"}
        ],
        // 用户信息
        homeInfo:{
          userpic: "../../static/demo/userpic/11.jpg",
          username: "wzjNB",
          totalnum: 88888,
          todaynum: 8888
        },
        // 用户数据
        homedata:[
          {name:"糗事",num: 888},
          {name:"动态",num: 888},
          {name:"评论",num: 888},
          {name:"收藏",num: 888}
        ]
			};
		},
    // 监听原生标题栏按钮点击事件
    onNavigationBarButtonTap(e){      
      if(e.index === 0){
        uni.navigateTo({
          url:'../user-set/user-set'
        })
      }
    },
    methods:{
      onLogin(){
        uni.navigateTo({
          url:"../login/login"
        })
      }
    }
	}
</script>

<style lang="stylus">



// 广告位
.home-ad
  padding: 20upx;          
  image
    border-radius 20upx
    height: 150upx;
       
</style>
