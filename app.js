//app.js
App({
  // 生命周期回调——监听小程序初始化
  onLaunch: function () {
    // 如果本地存储有token
    if (wx.getStorageSync('token')) {
      // 跳转到首页
      wx.reLaunch({
        url: '/pages/home/home',
      })
    }
  }
})