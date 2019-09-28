<template>
	<view class="wrapper">
    <!-- 头像 -->
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
    <!-- 性别 -->
    <view class="user-set-info-list flex-jsb">
      <view>性别</view>
      <view @tap="userChangeOne('sex')">
        {{sex}}
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <view class="user-set-info-list flex-jsb">
      <view>生日</view>
      <picker         
        mode="date" 
        :value="birthday" 
        :start="startDate" 
        :end="endDate" 
        @change="bindDateChange">
      <view class="birthday">
        {{birthday}}
      </view>
      </picker>
      <view class="icon iconfont icon-bianji1"></view>
      
    </view>
    <!-- 情感 -->
    <view class="user-set-info-list flex-jsb">
      <view>情感</view>
      <view @tap="userChangeOne('qg')">
        {{qg}}
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <!-- 职业 -->
    <view class="user-set-info-list flex-jsb">
      <view>职业</view>
      <view @tap="userChangeOne('job')">
       {{job}} 
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <!-- 家乡 -->
    <view class="user-set-info-list flex-jsb">
      <view>家乡</view>
      <view  @tap="showMulLinkageThreePicker">
       {{pickerText}} 
      </view>
      <view class="icon iconfont icon-bianji1"></view>
    </view>
    <button
      type="primary" 
      class="user-set-btn"
      @tap="submit"      
    >完成</button>
    <!-- 三级联动组件 -->
    <mpvue-city-picker themeColor="#007AFF" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>  
</template>

<script>
  import mpvueCityPicker from "../../components/mpvue-citypicker/mpvueCityPicker.vue";

  let sexArr = ['不限','男','女']
  let qgArr=['秘密','未婚','已婚'];
  let jobArr=['秘密','IT','老师'];
	export default {
    components:{
      mpvueCityPicker
    },
		data() {
			return {
				// 头像
        userPic:"../../static/demo/userpic/11.jpg",
        username: "wzjNB",
        sex:"不限",
        birthday:"1994-07-03",
        qg:"未婚",
        job:"IT",
        cityPickerValueDefault: [0, 0, 1],
        pickerText: "鹤岗"
			}
		},
		methods: {
      // 城市选择三级联动      
      showMulLinkageThreePicker() {
        this.$refs.mpvueCityPicker.show()
      },
      onConfirm(e) {
        this.pickerText = e.label;
      },
      // 获取日期
      getDate(type) {
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (type === 'start') {
          year = year - 60;
        } else if (type === 'end') {
          year = year + 2;
        }
        month = month > 9 ? month : '0' + month;;
        day = day > 9 ? day : '0' + day;
        return `${year}-${month}-${day}`;
      },
      // 修改生日
      bindDateChange(e) {
      	this.birthday = e.target.value
      },
      // 修改头像
      userChooseImg(){
        uni.chooseImage({
          count: 1,
          sizeType:['compressed'],
          success: res => {            
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
		},
    computed: {
      startDate() {
        return this.getDate('start');
      },
      endDate() {
        return this.getDate('end');
      }
    },
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
   .birthday
    color #000000!important    
   view:nth-of-type(2)
    font-weight: 700;
    .info-content
      text-align: right;      
      color #000
    image
      width: 80upx;
      height: 80upx;
      border-radius 50%
   .icon
    font-weight: 400!important;
    font-size: 40upx;
    margin-left: 20upx;
    color #9b9b9b
</style>
