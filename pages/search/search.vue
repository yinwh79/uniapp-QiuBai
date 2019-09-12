<template>
	<view>
		搜索
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
    // 监听原生标题导航按钮点击事件
    onNavigationBarButtonTap(e) {
      if(e.index == 0){
        // 返回级数
        uni.navigateBack({
          delta: 1
        })
      }
    }
	}
</script>

<style lang="stylus">

</style>
