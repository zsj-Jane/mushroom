// pages/login/login.js
Page({
  // 微信授权登录
  getUserInfo(e){
    console.log(e);
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
            console.log(res.data)
            // 弹出消息
            wx.showToast({
              title: res.data.message,
              icon:'none'
            });
            // 当返回状态为登录成功时
            if (res.data.status===0) {
              // 保存token到本地
              wx.setStorageSync('token', res.data.token);
              // 跳转到首页
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
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})