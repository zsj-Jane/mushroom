// pages/login/login.js
Page({
  // 微信授权登录
  getUserInfo(e){
    // 当授权被拒绝时，返回
    if (e.detail.errMsg==='getUserInfo:fail auth deny') {
      return;
    }
    // 授权成功，获取用户头像和用户名(es6解构赋值，重命名)
    const {avatarUrl:avatar,nickName:nickname} = e.detail.userInfo;
    // 获取登录的临时code
    wx.login({
      // 接口调用成功的回调函数
      success: ({code}) => {
        // 发送网络请求
        wx.request({
          url: 'http://localhost:3000/api/user/wxlogin', 
          method:'POST',
          data: {
            code,
            nickname,
            avatar
          },
          // 接口调用成功的回调函数
          success (res) {
            // 弹出消息
            wx.showToast({
              title: res.data.message,
              icon:'none'
            });
            // 当返回状态为登录成功时
            if (res.data.status===0) {
              // 保存token到本地
              wx.setStorageSync('token', res.data.token);
              // 跳转到首页（关闭所有页面，打开到应用内的某个页面）
              wx.reLaunch({
                url: '/pages/home/home',
              });
            }
          }
        })
      },
      // 接口调用失败的回调函数
      fail:err=>{
        console.log('获取code失败');
      }
    })
  },
  // 手机号登录
  goToPhoneLogin(){
    // 跳转到手机号登录页面
    wx.navigateTo({
      url: '/pages/phone-login/phone-login',
    })
  }
})