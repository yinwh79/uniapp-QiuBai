<template>
  <view class="uni-list list-pd">
      <view class="uni-list-cell cell-pd">
          <view class="uni-uploader">
              <view class="uni-uploader-head">
                  <view class="uni-uploader-title">点击可预览选好的图片</view>
                  <view class="uni-uploader-info">{{imageList.length}}/9</view>
              </view>
              <view class="uni-uploader-body">
                  <view class="uni-uploader__files">
                    <!-- 图片展示 -->
                      <block v-for="(image,index) in imageList" :key="index">
                          <view class="uni-uploader__file">
                            <!-- 删除按钮-->
                            <view 
                              class="icon iconfont icon icon-shanchu"
                              @tap="delectImg(index)"
                            ></view>
                            <image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
                          </view>
                      </block>
                      <view class="uni-uploader__input-box">
                          <view class="uni-uploader__input" @tap="chooseImage"></view>
                      </view>
                  </view>
              </view>
          </view>
      </view>
  </view>
</template>

<script>
  let sourceType = [
      ['camera'],
      ['album'],
      ['camera', 'album']
  ]
  let sizeType = [
      ['compressed'],
      ['original'],
      ['compressed', 'original']
  ]
  export default{
      data(){
        return {
          imageList: [],
          sourceTypeIndex: 2,
          sourceType: ['拍照', '相册', '拍照或相册'],
          sizeTypeIndex: 2,
          sizeType: ['压缩', '原图', '压缩或原图'],
          countIndex: 8,
          count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
      },
      methods:{
        // 选择图片
        chooseImage: async function() {
            // #ifdef APP-PLUS
            // TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
            if (this.sourceTypeIndex !== 2) {
                let status = await this.checkPermission();
                if (status !== 1) {
                    return;
                }
            }
            // #endif
          
            if (this.imageList.length === 9) { return }
            uni.chooseImage({
                sourceType: sourceType[this.sourceTypeIndex],
                sizeType: sizeType[this.sizeTypeIndex],
                count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length :
                    this.count[this.countIndex],
                success: (res) => {
                    this.imageList = this.imageList.concat(res.tempFilePaths);
                    this.$emit("upload",this.imageList)
                },
                fail: (err) => {
                    // #ifdef APP-PLUS
                    if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
                        this.checkPermission(err.code);
                    }
                    // #endif
                }
            })
        },      
        previewImage: function(e) {
            var current = e.target.dataset.src
            uni.previewImage({
                current: current,
                urls: this.imageList
            })
        },
        // 删除图片
        delectImg(idx){
          uni.showModal({
            title: "提示",
            content: "是否删除该图片",
            success: (res) => {
              if(res.confirm){
                this.imageList.splice(idx,1)
                this.$emit("upload",this.imageList)
              }
            }
          })
        },
        async checkPermission(code) {
            let type = code ? code - 1 : this.sourceTypeIndex;
            let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
                await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
                    'android.permission.READ_EXTERNAL_STORAGE');
          
            if (status === null || status === 1) {
                status = 1;
            } else {
                uni.showModal({
                    content: "没有开启权限",
                    confirmText: "设置",
                    success: function(res) {
                        if (res.confirm) {
                            permision.gotoAppSetting();
                        }
                    }
                })
            }
          
            return status;
        }
      }
  }
</script>

<style lang="stylus">
 // 图片上传
   .cell-pd {
         padding: 22upx 30upx;
     }
 
     .list-pd {
         margin-top: 50upx;
     }
 // 图片删除
   .uni-uploader__file
     position: relative;
     .icon-shanchu
         position: absolute;
         z-index 99
         top: 0;
         right: 0;
         background-color: #333;
         color #fff
         padding: 2upx 10upx;
         border-right: 10upx;
</style>
