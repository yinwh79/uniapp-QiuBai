export default {
  // 用户token
  token: false,
  // 用户信息
  userInfo: false
  // 跳转权限验证
  navigate(options,type="navigateTo"){
    // 没有token跳转登录页
    if(!this.token){
      // uni.navigateTo({url:'/'})            
    }
    // 根据type设置不同跳转
   switch (type){
     case "navigateTo":
     uni.navigateTo({options})            
     break; 
     case "redirectTo":
     uni.redirectTo({options})            
     break;
     case "reLaunch":
     uni.reLaunch({options})            
     break;
     case "switchTab":
     uni.switchTab({options})            
     break;    
   }
  }
} 