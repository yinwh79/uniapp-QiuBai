<template>
	<view>
    <!-- 自定义导航栏 -->
		<uni-nav-bar
		  :statusBar="true" 
      class="uni-nav-bar"
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
       
        <!-- 展示列表 -->
        <view class="common-list">
           <view class="common-list-header-l">
             <image src="../../static/demo/userpic/12.jpg" mode="widthFix"></image>
           </view>
           <view
            class="common-list-header-r"
           >
            <view class="header-r-l">
              <view class="flex-ac nickname">昵称
                <view class="icon iconfont icon-nan user-age">25</view>
              </view>              
              <view class="icon iconfont icon-zengjia">关注</view>           
            </view>          
            <view class="content-title">我是标题我是标题我是标题我是标题我是标题我是标题我是标题</view>
            <view class="flex-c-c content-play">
              <!-- 图片 -->
             <!-- <image 
                class="content-image"
                src="../../static/demo/datapic/13.jpg" 
                mode="widthFix"
                lazy-load
              ></image> -->
              <!-- 视频 -->
            <!-- <view class="common-list-play icon iconfont icon-bofang">                                            
              </view>
              <view class="common-list-playinfo">
                20W 次播放 2：47
              </view> -->
              <!-- 分享 -->
              <view class="common-list-share flex-ac">
                  <image src="../../static/demo/datapic/14.jpg" mode="widthFix" lazy-load></image>
                  <view>标题结构</view>
                </view>
            </view>
            <view class="flex-jsb">
              <view>浙江  杭州</view>
              <view class="flex-ac handle-type">
                <view class="icon iconfont icon-zhuanfa">66</view>
                <view class="icon iconfont icon-pinglun1">88</view>
                <view class="icon iconfont icon-dianzan1">188</view>
              </view>
            </view>
           </view>
        </view>
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
        ],
        // 公共列表数据
        list:[
          {
            userpic: "",
            username:"",
            sex: 0, // 0代表男性 1代表女性
            age: 25,
            isguangzhu: false,
            title:"",
            titlepic:""
          }
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
.uni-nav-bar
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
  // 公共列表
  .common-list
    display: flex;
    padding: 20upx;
    // 分享样式
    .common-list-share
      width: 100%;
      background-color: #eee;            
      padding: 10upx;
      border-radius 10upx
      image
        width: 200upx;
        height: 150upx;
        margin-right: 10upx;
    .common-list-header-l
      // 防止被压缩
      flex-shrink 0
      margin-right: 15upx;
      image
        width: 90upx;
        height: 90upx;
        border-radius 50%
    .common-list-header-r
      flex 1
      padding-bottom: 10upx;
      border-bottom: 1upx solid #eee;
      .content-play
        position: relative;
        .common-list-play,
        .common-list-playinfo
          position: absolute;
          color #fff
        .common-list-play
          font-size: 130upx;
        .common-list-playinfo
          right: 10upx;
          bottom: 10upx;
          font-size: 26upx;
          background-color: rgba(51,51,51,0.73);
          border-radius: 20upx;
          padding: 0 25upx;
      .handle-type
        color #aaa
        view
          margin-left: 15upx;
      .icon-zengjia
        background-color: #EEEEEE
        padding: 0 10upx;
        font-size: 26upx;
      .nickname
        color #999
      .user-age
        background-color: #007aff;
        color #FFFFFF
        font-size: 23upx;
        padding:  2upx 10upx;
        margin-left: 10upx;
        border-radius 20upx
      .content-title
        font-size: 32upx;
        padding: 15upx;
      .header-r-l        
        display: flex;
        flex 1
        align-items: center;
        justify-content: space-between;
      .content-image
        width: 100%;
        border-radius 10upx
        
</style>
