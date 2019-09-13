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
	</view>
</template>

<script>
  import UniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
  import UploadImg from "../../components/common/UploadImg.vue"
  
  let dynamicTypeArr =  ['所有人可见', '仅自己可见']
	export default {
    components:{
      UniNavBar,
      UploadImg
    },
		data() {
			return {
				dynamicType: '所有人可见',
        dynamicContent: "",
        imgList: []
			};
		},
    methods:{
      // 返回
      back(){
        uni.navigateBack({ delta: 1})             
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
</style>
