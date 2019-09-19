<template>
	<view>
		<!-- 自定义导航栏 -->
    <!-- statusBar状态栏 -->
    <uni-nav-bar  
      :statusBar="true" 
      left-icon="back" 
      right-text = "发布"
      @click-left="back"
      @click-right="submit">
        <view class="out-tabbar" @tap="changeType">
          {{dynamicType}}
          <view class="icon iconfont icon-xialazhankai"></view>
        </view>
       </uni-nav-bar>
       <!-- textarea -->
       <view class="uni-textarea">
         <textarea
          v-model="dynamicContent"
          placeholder="说一句话吧~" 
         />
       </view>
        <!-- 多图上传 -->
        <upload-img
          @upload = "uploadImg"
        ></upload-img>
        <!-- 弹出公告 -->
        <uni-popup 
          :show="showPopup"
          mode="fixed"
          position="middle"
          @hidePopup="hidePopup"
        >
          <view class="gonggao">
            <view class="pop-img">
              <image src="../../static/common/addinput.png" mode="widthFix"></image>
              </view>
              <view>1.涉及黄色，政治，广告及骚扰信息</view>
              <view>2.涉及黄色，政治，广告及骚扰信息</view>
              <view>3.涉及黄色，政治，广告及骚扰信息</view>
              <view>4.涉及黄色，政治，广告及骚扰信息</view>
              <button type="default" @tap="hidePopup">朕知道了</button>
          </view>
        </uni-popup>
	</view>
</template>

<script>
  import UniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
  import UploadImg from "../../components/common/UploadImg.vue"
  import UniPopup from '../../components/uni-popup/uni-popup.vue'
  
  let dynamicTypeArr =  ['所有人可见', '仅自己可见']
	export default {
    components:{
      UniNavBar,
      UploadImg,
      UniPopup
    },
		data() {
			return {
        showPopup: true,
        isBackFlag: false,
				dynamicType: '所有人可见',
        dynamicContent: "",
        imgList: []
			};
		},
    // 监听返回事件
    onBackPress(){
      // 判断用户是否填写内容
      if(!this.dynamicContent && this.imgList.length < 1){return}
       if(!this.isBackFlag){
           this.saveMsg()
           return true
       } 
      
            
    },
    methods:{
      // 返回
      back(){
        uni.navigateBack({ delta: 1})             
      },
      // 保存为草稿
      saveMsg(){
        uni.showModal({
          content: '是否保存为草稿?',
          cancelText: '不保存',
          confirmText: '保存',
          success: res => {
            // 点击保存
            if(res.confirm){
              
            }else{
              
            }
            this.isBackFlag = true
            this.back()      
          }     
        }); 
      },
      // 动态类型
      changeType(){
        uni.showActionSheet({
            itemList:dynamicTypeArr,
            success:(res) => {
                // console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
                this.dynamicType = dynamicTypeArr[res.tapIndex]
            }
        });
      },
      // 发布
      submit(){
       
      },
      // 接收图片数组
      uploadImg(arr){
        this.imgList = arr
        console.log(this.imgList);
      },
      // 隐藏弹窗
      hidePopup(){
        this.showPopup = false
      }
    }   
	}
</script>

<style lang="stylus">
  .out-tabbar
    display: flex;
    align-items: center;
    // line-height: 50px;
    justify-content: center;
  .uni-textarea
    border: 1upx solid #eee;
  // 公告
    .gonggao
      width: 450upx;
      .pop-img
        display: flex;
        justify-content: center;
        margin-bottom: 20upx;
      image
        width: 85%;
      button
        margin-top: 20upx;
        color #171606
        background-color: #ffe934;
</style>
