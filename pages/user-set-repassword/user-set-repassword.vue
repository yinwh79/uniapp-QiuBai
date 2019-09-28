<template>
	<view class="wrapper">      
      <input 
        v-model="oldPassword"
        type="password" 
        class="uni-input common-input" 
        placeholder="输入旧密码"/>
      <input 
        v-model="newPassword"
        type="password" 
        class="uni-input common-input"
        placeholder="输入新密码"/>
      <input 
        v-model="reNewpassword"
        type="password" 
        class="uni-input common-input" 
        placeholder="确认新密码"/>
      <button 
        type="primary" 
        class="user-set-btn"
        :class="{'user-set-btn-disable': disabled}"
        :disabled="disabled"
        :loading="loading"
        @tap="submit"      
      >完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        hasPassword:false,
				oldPassword:"",
        newPassword:"",
        reNewpassword:"",
        disabled:false,
        loading: false
			};
		},
    methods:{
      // 密码验证层
      check(){
        if(!this.oldPassword || this.oldPassword==""){
          uni.showToast({ title: '旧密码不能为空', icon:"none" });
          return false;
        }
        if(!this.newPassword || this.newPassword==""){
          uni.showToast({ title: '新密码不能为空', icon:"none" });
          return false;
        }
        if(!this.reNewpassword || this.reNewpassword==""){
          uni.showToast({ title: '确认密码不能为空', icon:"none" });
          return false;
        }
        if(this.newPassword !== this.reNewpassword){
          uni.showToast({ title: '确认密码和新密码不一致', icon:"none" });
          return false;
        }
        return true;
      },
      // 提交
      submit(){        
       if(!this.check()) return;
       this.loading = true;
       this.disabled = true;
      }
    }
	}
</script>

<style lang="stylus">
@import "../../common/css/form.css"
</style>
