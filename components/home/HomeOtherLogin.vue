<template>
 <view class="other-login flex-ac">
   <block 
    v-for="(item,idx) in providerList"
    :key="idx"
   >
     <view @tap="tologin(item)">
       <view 
        class="icon iconfont  flex-c-c"
        :class="['icon-' + item.icon]"
       ></view>         
     </view>
   </block>
         
 </view>
</template>

<script>
  export default {
    data(){
      return {
        providerList: []
      }
    },
    onLoad(){
      console.log(1);
     this.getLoginAuth();
     console.log(this.providerList)
    },
    methods:{
      // 1、获取当前登录渠道
      getLoginAuth(){
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
      // 2、登录
      tologin(provider) {
      	uni.login({
      		provider: provider.id,
                    // #ifdef MP-ALIPAY
                    scopes: 'auth_user',  //支付宝小程序需设置授权类型
                    // #endif
      		success: (res) => {
      			console.log('login success:', res);
      			// 更新保存在 store 中的登录状态
      			this.login(provider.id);
      		},
      		fail: (err) => {
      			console.log('login fail:', err);
      		}
      	});
    }
  },
  }
</script>

<style lang="stylus" scoped>
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
</style>
