<template>	
		<view>
      <!-- 头部导航栏 -->
      <swiper-tabbar 
        :tabBars="tabBars"
        :tabIndex="tabIndex"
        @tabtap ='tabtap'
      ></swiper-tabbar>
      <!-- 纵向内容展示 -->
      <view class="uni-tab-bar">
        <swiper
          class="swiper-box"
          :style="{height: swiperBoxHeight + 'px'}"
          :current= "tabIndex"
          @change = "tabChange"
        >
          <swiper-item
            v-for="(list,idx) in newList"
            :key ='idx'
          >
            <scroll-view scroll-y class="list">              
              <block 
                v-for="(item,idx1) in list.list"
                :key ="idx1"
              >
                <index-list :item='item' :idx="idx1"></index-list>  
              </block>
              <!-- 上拉加载 -->
            </scroll-view>
          </swiper-item>          
        </swiper>
      </view>
    </view>		
</template>

<script>
  import IndexList from '@/components/index/IndexList'
  import SwiperTabbar from '@/components/tabbar/SwiperTabbar'
	export default {
    components:{
       IndexList,
       SwiperTabbar
    },
		data() {
			return {
        newList:[
         {
          list: [
            {
              userpic: "../../static/demo/userpic/12.jpg",
              username: "wzj",
              isguanzhu: false,
              title: "WZJ牛逼",
              type: "vedio", // img是图片类型，video是视频
              titlepic: "../../static/demo/datapic/11.jpg",
              playnum: '20W',
              long: "2:47",
              infonum: {
                index: 1, // 0表示没有操作 1：表示顶 2：表示踩
                dingnum: 11,
                cainum: 12
              },
              commentnum: 13,
              sharenum: 14
            },
            {
              userpic: "../../static/demo/userpic/12.jpg",
              username: "wzj",
              isguanzhu: true,
              title: "WZJ牛逼",
              type: "img", // img是图片类型，video是视频
              titlepic: "../../static/demo/datapic/11.jpg",
              playnum: '20W',
              long: "2:47",
              infonum: {
                index: 2, // 0表示没有操作 1：表示顶 2：表示踩
                dingnum: 11,
                cainum: 12
              },
              commentnum: 13,
              sharenum: 14
            }
          ]
         },
         {list:[]},
         {
          list: [
            {
              userpic: "../../static/demo/userpic/12.jpg",
              username: "wzj",
              isguanzhu: false,
              title: "WZJ牛逼",
              type: "vedio", // img是图片类型，video是视频
              titlepic: "../../static/demo/datapic/11.jpg",
              playnum: '20W',
              long: "2:47",
              infonum: {
                index: 1, // 0表示没有操作 1：表示顶 2：表示踩
                dingnum: 11,
                cainum: 12
              },
              commentnum: 13,
              sharenum: 14
            },
            {
              userpic: "../../static/demo/userpic/12.jpg",
              username: "wzj",
              isguanzhu: true,
              title: "WZJ牛逼",
              type: "img", // img是图片类型，video是视频
              titlepic: "../../static/demo/datapic/11.jpg",
              playnum: '20W',
              long: "2:47",
              infonum: {
                index: 2, // 0表示没有操作 1：表示顶 2：表示踩
                dingnum: 11,
                cainum: 12
              },
              commentnum: 13,
              sharenum: 14
            }
          ]
         },
         {list:[]},
         {
          list: [
            {
              userpic: "../../static/demo/userpic/12.jpg",
              username: "wzj",
              isguanzhu: false,
              title: "WZJ牛逼",
              type: "vedio", // img是图片类型，video是视频
              titlepic: "../../static/demo/datapic/11.jpg",
              playnum: '20W',
              long: "2:47",
              infonum: {
                index: 1, // 0表示没有操作 1：表示顶 2：表示踩
                dingnum: 11,
                cainum: 12
              },
              commentnum: 13,
              sharenum: 14
            },
            {
              userpic: "../../static/demo/userpic/12.jpg",
              username: "wzj",
              isguanzhu: true,
              title: "WZJ牛逼",
              type: "img", // img是图片类型，video是视频
              titlepic: "../../static/demo/datapic/11.jpg",
              playnum: '20W',
              long: "2:47",
              infonum: {
                index: 2, // 0表示没有操作 1：表示顶 2：表示踩
                dingnum: 11,
                cainum: 12
              },
              commentnum: 13,
              sharenum: 14
            }
          ]
         },
         {list: []}
        ],				
        // 顶部导航栏
        tabIndex: 0,
        tabBars:[
          {name:"关注",id:"guanzhu"},
          {name:"推荐",id:"tuijian"},
          {name:"体育",id:"tiyu"},
          {name:"热点",id:"redian"},
          {name:"娱乐",id:"yule"},
          {name:"财经",id:"caijing"},
        ],
        swiperBoxHeight: 0
			}
		},
		onLoad() {
      // 获取手机信息
      uni.getSystemInfo({
          success:(res) => { 
            // 获取屏幕度和upx2upx转换
            // console.log(res.windowHeight);  
              let height = res.windowHeight - uni.upx2px(100)
              this.swiperBoxHeight = height       
            // console.log( this.swiperBoxHeight)
          }
      });
		},
		methods: {
      // tab点击切换
      tabtap(idx){
        this.tabIndex = idx
      },
      // 滑动切换
      tabChange(e){
        // console.log(e.detail.current);
        this.tabIndex = e.detail.current
      }
		}
	}
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/_vars'
  .uni-swiper-tab
    border-bottom: 1upx solid #eee;
  .swiper-tab-list
    color $c-font-tabbar
    font-weight: 700;
    &.active
      color $c-font-tabbar-active
      .swiper-tab-line
        width: 70upx;
        margin: 0 auto; 
        border-bottom: 10upx solid $c-bd-tabbar-active;  
        border-radius 20upx    
</style>
