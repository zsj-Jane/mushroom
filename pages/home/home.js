// pages/home/home.js
// 导入封装的请求方法
import request from '../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    swipers: null,
    // 课程数据
    courses: null,
    // 热门视频数据
    videos: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送请求，获取轮播图数据
    this.getSwiperData();
    // 发送请求，获取课程数据
    this.getCourseData();
    // 发送请求，获取热门视频数据
    this.getVideoData();
  },
  // 获取轮播图数据
  getSwiperData() {
    // 发请求，获取轮播图数据
    request({ url: 'home/swipers' }).then(res => {
      // 当请求成功后
      if (res.data.status === 0) {
        // 保存轮播图数据
        this.setData({
          swipers: res.data.message
        });
      }
    });
  },
  // 获取课程数据
  async getCourseData() {
    // 发送请求，获取课程数据
    let res = await request({ url: 'home/course' });
    // 当请求成功后
    if (res.data.status === 0) {
      // 保存课程数据
      this.setData({
        courses: res.data.message
      })
    }
  },
  // 获取热门视频数据
  async getVideoData() {
    // 发送请求，获取热门视频数据
    let res = await request({ url: 'home/video' });
    // 当请求成功后
    if (res.data.status === 0) {
      // 保存课程数据
      this.setData({
        videos: res.data.message
      })
    }
  },
  // 跳转到课程页面，编程式导航
  switchCourse() {
    wx.switchTab({
      url: '/pages/course/course',
    })
  }
})