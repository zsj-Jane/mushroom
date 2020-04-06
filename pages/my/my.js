// pages/my/my.js
import request from '../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 用户个人信息
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户个人信息
    this.getUserInfoData();
  },
  async getUserInfoData() {
    // 发送请求，获取用户个人信息
    const res = await request({
      url: 'my/info'
    });
    // 当请求成功后
    if (res.data.status === 0) {
      // 保存用户个人信息
      this.setData({
        userInfo: res.data.message
      })
    }
  },
  makeCall(){
    wx.makePhoneCall({
      phoneNumber: '400123456',//仅为示例，非真实电话号码
    })
  }

})