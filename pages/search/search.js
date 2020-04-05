// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 输入框是否聚焦
    isFocus: false,
    // 输入框的关键字
    keyword: ''
  },
  // 双向绑定数据：输入框值改变
  changeValue(e) {
    console.log(e);

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
      isFocus: false
    })
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