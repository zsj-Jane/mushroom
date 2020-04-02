// pages/home/home.js
// 导入封装的请求方法
import axios from '../../utils/axios';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    swipers: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送请求，获取轮播图数据
    this.getSwiperData();
  },
  // 获取轮播图数据
  getSwiperData() {
    // 发请求，获取轮播图数据
    axios({ url: 'home/swipers' }).then(res => {
      // 当请求成功后
      if (res.data.status === 0) {
        // 保存轮播图数据
        this.setData({
          swipers: res.data.message
        });
      }
    });
  }
})