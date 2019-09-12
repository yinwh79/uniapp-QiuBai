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
	</view>
</template>

<script>
  import UniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
  let dynamicTypeArr =  ['所有人可见', '仅自己可见']
	export default {
    components:{
      UniNavBar
    },
		data() {
			return {
				dynamicType: '所有人可见'
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
</style>
