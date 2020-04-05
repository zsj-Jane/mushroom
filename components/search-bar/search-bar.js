// components/search-bar/search-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转到搜索页面
    goToSearch(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
})
