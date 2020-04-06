import request from "../../utils/request";

// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取课程列表数据
    this.getCoursesData();
  },

  async getCoursesData() {
    const res = await request({
      url: 'course/list'
    });
    console.log(res);
    if (res.data.status === 0) {
      this.setData({
        courses: res.data.message
      })
    }
  }
})