<template>
	<view>
    <!-- 状态栏 -->
    <uni-status-bar></uni-status-bar>
    <!-- 返回按钮 -->
    <view 
      class="icon iconfont icon-guanbi"
      @tap="onBack"
     ></view> 
    <!-- 背景图片 -->
    <image
      class="login-head"
      src="../../static/common/loginhead.png" 
      mode="widthFix" 
      lazy-load></image> 
    <!-- 登录区域 -->        
      <view >
       <!-- 账号密码登录 -->
      <template v-if="!status">
        <view class="wrapper">
          <input
            v-model="username"
            type="password" 
            class="uni-input common-input"
            placeholder="昵称/手机号/邮箱"/>
          <view class="login-password-wrapper">
            <input
              v-model="password"
              type="password" 
              class="uni-input common-input forgot-input" 
              placeholder="请输入密码"/>
              <view class="forgot-password">忘记密码?</view>
          </view> 
        </view>  
      </template> 
                      
        <!-- 手机号登录 -->
        <template v-else>
          <view class="wrapper">
              <view class="login-password-wrapper">
                <view class="phone">+86</view>
                <input
                  v-model="phone"
                  type="password" 
                  class="uni-input common-input phone-input"
                  placeholder="手机号"/>
              </view>
              <view class="login-password-wrapper">
                <input
                  v-model="yzm"
                  type="password" 
                  class="uni-input common-input forgot-input" 
                  placeholder="请输入验证码"/>
                  <view class="get-yzm" @tap="getYzm">{{codetimeChange}}</view>
              </view>
          </view>
        </template>
        
       <view class="wrapper">
         <button
           type="primary" 
           class="user-set-btn"
          :disabled="disabled"
          :loading="loading"
         >登录</button>
       </view>
      </view>
    
    <!-- 登录状态切换 -->
    <view class="login-type flex-c-c" @tap="changeLoginStatus">
      {{status?'账号密码登录':'验证码登录'}}
      <view class="icon iconfont icon-jinru"></view>
    </view>
    <!-- 第三方登录 -->
    <view class="other-login-type flex-c-c">第三方登录</view>
    <home-other-login></home-other-login>
    
    <!-- 协议 -->
    <view class="login-ruler flex-c-c">
      注册及代表您同意<view class="agreement">《仿糗事百科协议》</view>
    </view>
	</view>
</template>

<script>
  import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue"
  import HomeOtherLogin from '../../components/home/HomeOtherLogin.vue'
	export default {
    components:{
      uniStatusBar,
      HomeOtherLogin
    },
		data() {
			return {
        status: false,// 0代表账号密码,1、手机验证码
				disabled:false,
				loading: false,
        username:"",
        password:"",
        phone:"",
        yzm:"",
        codetime: 0
			}
		},
    computed:{
      codetimeChange(){
        return !this.codetime?'获取验证码':this.codetime + 's'
      }
    },
		methods: {
      // 返回上一层及
			onBack(){
        
      },
      // 获取验证码
      getYzm(){
        if(this.codetime > 0){
          uni.showToast({
            title: "验证码正在获取中。。。",
            icon: "none",
            mask: false,
            duration: 1500
          })
          return
        }
        this.codetime = 10;
        // console.log(this.codetime)
        let timer = setInterval(()=>{
          this.codetime--;
          if(this.codetime < 1){
            clearInterval(timer)
            this.codetime = 0
          }
        },1000)
      },
      // 切换登录方式
      changeLoginStatus(){
        this.status = !this.status
      }
		}
	}
</script>

<style lang="stylus">
@import "../../common/css/form.css"
// 忘记密码
.login-password-wrapper
  position: relative;
  .phone
    position: absolute;
    left: 10upx;
    top: 25%;
  .phone-input
    padding-left: 100upx;
  .forgot-input
    padding-right: 150upx;
  .forgot-password
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 150upx;
    height: 100%;
    z-index 10
  // 验证码
  .get-yzm
    position: absolute;    
    right: 0;
    top: 15upx;
    display: flex;
    align-items: center;
    justify-content: center;
    color #000000
    background-color: yellow;
    border-radius 10upx
    font-size: 25upx;
    height: 50%;    
    width: 150upx;
    padding: 10upx 0;
.other-login-type
  position: relative;
  color #CCCCCC
  &::after,
  &::before
    content ""
    position: absolute;
    background-color: #BBBBBB;
    height: 1upx;
    width: 100upx;
    top: 50%;
  &::after
    left: 25%;
  &::before
    right: 25%;
.flex-c-c
  padding: 20upx 0;
.login-head
  width: 100vw;
.icon-guanbi
  position: fixed;
  top: 60upx;
  left: 30upx;
  font-size: 40upx;
  font-weight: 700;
  color #332f0a;
  z-index 9
.agreement    
  color #007AFF
</style>
