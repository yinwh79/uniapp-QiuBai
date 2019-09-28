<template>
	<view class="wrapper">
		<view class="user-set-info-list flex-jsb">
      <view>头像</view>
      <view @tap="userChooseImg">
        <image 
          :src="userPic" 
          mode="widthFix"
          lazy-load          
        ></image>
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <view class="user-set-info-list flex-jsb">
      <view>昵称</view>
      <view>
        <input class="info-content" type="text" v-model="username" />
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <view class="user-set-info-list flex-jsb">
      <view>性别</view>
      <view @tap="userChangeOne('sex')">
        {{sex}}
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <view class="user-set-info-list flex-jsb">
      <view>情感</view>
      <view @tap="userChangeOne('qg')">
        {{qg}}
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <view class="user-set-info-list flex-jsb">
      <view>职业</view>
      <view @tap="userChangeOne('job')">
       {{job}} 
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
  let sexArr = ['不限','男','女']
  let qgArr=['秘密','未婚','已婚'];
  let jobArr=['秘密','IT','老师'];
	export default {
		data() {
			return {
				// 头像
        userPic:"../../static/demo/userpic/11.jpg",
        username: "wzjNB",
        sex:"不限",
        qg:"未婚",
        job:"IT"
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
      // 单列选择
      userChangeOne(val){
        let arr = []
        switch (val){
          case 'sex':
            arr = sexArr
            break;
          case 'qg':
            arr = qgArr
            break;
          case 'job':
            arr = jobArr
            break;
        }
        uni.showActionSheet({
          itemList: arr,
          success: res =>{
            switch (val){
              case 'sex':
                this.sex = arr[res.tapIndex]
                break;
              case 'qg':
                this.qg = arr[res.tapIndex]
                break;
              case 'job':
                this.job = arr[res.tapIndex]
                break;
            }
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
    font-weight: 700;
    .info-content
      text-align: right;      
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
