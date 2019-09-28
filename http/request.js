// 请求封装
import config from '/http/config.js'
export default {
  config:{
    baseUrl:config.webUrl,
    header:{
      "Content-Type":"application/json;charset=UTF-8",
      "Content-Type":"application/x-www-form-urlencoded"
    },
    data:{},
    method:"GET",
    dataType:"json"
  },
  // 1、验证区域
     // 1.1、验证登录
     checkToken(checkToken){
     		if (checkToken && !User.token) {
     			uni.showToast({ title: '请先登录', icon:"none" })
     			uni.navigateTo({
     				url: '/pages/login/login'
     			});
     			return false;
     		}
     		return true;
     	},
  // 2、请求区域
  request(options = {}){
    options.header = options.header || this.config.header;
    options.method = options.method || this.config.method;
    options.dataType = options.dataType || this.config.dataType;
    options.url = this.config.baseUrl+options.url;
    // token对应操作
    if(options.token){
      // 验证登录
      if(!this.checkToken(options.token)) return;
      options.header.token = User.token;
    }
    return uni.request(options);

  },
  get(url,data,options={}){
    options.url = url
    options.data = data
    options.method = 'GET'
    return this.request(options)
  },
  post(url,data,options={}){
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options)
  }
}