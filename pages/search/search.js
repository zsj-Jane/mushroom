// pages/search/search.js
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
  // 导入weui-wxss中searchbar的js文件内容
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
  },
  // 输入框搜索事件
  search() {

  },
})