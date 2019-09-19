<template>
	<view>
    <!-- 自定义导航栏 -->
		<uni-nav-bar
		  :statusBar="true" 
		  @click-right="submit">
          <!-- 左边 -->
          <block slot="left">
            <view class="nav-left">
              <view class="icon iconfont icon-qiandao"></view>
            </view>
          </block>
          <!-- 中间 -->
          <view class="nav-middle">
            <block
              v-for="(tab,idx) in tabBars"
              :key ="tab.id"              
            >
              <view 
                :class="{'active':tabBarIndex == idx}"
                @tap="changeTab(idx)"
              >{{tab.name}}
                <view v-if="(tabBarIndex == idx)" class="active-line"></view>
              </view>
            </block>   
          </view>
          <!-- 右边 -->
          <block slot="right">
            <view 
              class="nav-right"
              @tap="openAddInput"  
            >
              <view class="icon iconfont icon-bianji1"></view>
            </view>
          </block>
		   </uni-nav-bar>
	</view>
</template>

<script>
  import UniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	export default {
    components:{
      UniNavBar
    },
		data() {
			return {
				tabBarIndex: 0,
        tabBars:[
          {name:"关注",id: 'guanzhu'},
          {name:"话题",id:'huati'}
        ]
			};
		},
    methods:{
      // 切换tab
      changeTab(idx){      
        this.tabBarIndex = idx
      },
      // 跳转发布页
      openAddInput(){
        uni.navigateTo({
          url:'../AddInput/AddInput'
        })
      }
    }
	}
</script>

<style lang="stylus">
.icon
  font-size: 48upx;
.nav-middle
  margin-left: -20upx;
  height: 86upx;
  display: flex;
  align-items: center;
  justify-content: center;
  view
    font-size: 32upx;
    padding: 0 15upx;
    font-weight: 700;
    color #969696
.nav-left
  margin-left: 16upx;
  .icon
    color #ff9619
.active
   position: relative;
   color #333!important
   .active-line
    border-bottom: 5upx solid #FEDE33;
    border-top: 5upx solid #FEDE33;
    width: 70upx;
    border-right: 20upx;
    position: absolute;
    margin-left: -20upx;
    bottom: 1upx;
</style>
