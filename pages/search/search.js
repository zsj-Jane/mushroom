// pages/search/search.js
// 导入请求方法
import request from '../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  /* 自己写的
  data: {
    // 输入框是否聚焦
    isFocus: false,
    // 输入框的关键字
    keyword: ''
  },
  // 双向绑定数据：输入框值改变
  changeValue(e) {
    // 保存输入框的值
    this.setData({
      keyword: e.detail.value
    })
  },
  // 输入框聚焦
  onFocus() {
    this.setData({
      isFocus: true
    })
  },
  // 取消按钮的点击事件
  cancel() {
    this.setData({
      isFocus: false,
      keyword: ''
    })
  },*/
  /*// 导入weui-wxss中searchbar的js文件内容
  data: {
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },*/
  // 导入vant-weapp
  data: {
    // 搜索关键字
    keyword: '',
    // 课程
    courses: []
  },
  // 双向绑定数据：输入框值改变
  changeValue(e) {
    // 保存输入框的值
    this.setData({
      keyword: e.detail
    })
  },
  // 输入框搜索事件
  async search() {
    // 发送请求，根据关键字查询课程列表
    const res = await request({
      url: 'course/search',
      data: {
        name: this.data.keyword
      }
    });
    // 当成功发送请求后
    if (res.data.status === 0) {
      // 保存课程数据
      this.setData({
        courses: res.data.message
      })
    }
  },
})