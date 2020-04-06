// pages/study/study.js
import request from '../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 学习进度数据
    studyProgress: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取学习进度列表
    this.getProgressData();
  },
  async getProgressData() {
    // 发请求，获取学习进度列表
    const res = await request({
      url: 'study/progress'
    });
    // 当请求成功后
    if (res.data.status === 0) {
      // 遍历数组，动态添加color属性
      res.data.message.forEach(item => {
        if (item.study_progress <= 30) {
          item.color = "#ff0000";
        } else if (item.study_progress > 30 && item.study_progress <= 60) {
          item.color = "#FF783B";
        }else{
          item.color = "#B4D66E";
        }
      });
      // 保存学习进度数据
      this.setData({
        studyProgress: res.data.message
      })
    }
  }
})