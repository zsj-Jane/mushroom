// pages/phone-login/phone-login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'17704051019',
    tipName:'获取验证码',
    // 倒计时总秒数
    count:10,
    // 是否正在倒计时
    isCountDown:false,
    // 定时器id
    timerId:null,
    // 验证码
    vcode:''
  },
  // 修改手机号（参数用的解构赋值）
  changeValue({detail:{value}}){
    // 修改data中phone的值为修改后的phone值
    this.setData({
      phone:value
    })
  },
  // 获取验证码
  getVcode(){
    // 拿到数据中的手机号
    const phone = this.data.phone;
    // 验证手机号的正则表达式
    var reg = /^1[3456789][0-9]{9}$/;
    // 校验手机号是否合法
    if (!reg.test(phone)) {
      // 错误提示
      wx.showToast({
        title: '手机号不合法',
        icon:'none'
      });
      // 返回
      return;
    }
    // 倒计时
    // 如果当前正在倒计时，则返回
    if (this.data.isCountDown) return
    // 修改跟倒计时相关的模型数据
    this.setData({
      tipName:this.data.count,
      isCountDown:true //开始倒计时
    });
    // 开启定时器，每隔1s，count--
    this.data.timerId = setInterval(() => {
      // 当count值<=1时
      if (this.data.count<=1) {
        // 清除计时器
        clearInterval(this.data.timerId);
        // 重置模型数据
        this.data.count=10;
        this.setData({
          tipName:'获取验证码',
          isCountDown:false
        });
        // 返回
        return;
      }
      // count--
      this.data.count--;
      // 改变tipName的值，实时看到效果
      this.setData({
        tipName:this.data.count
      })
    }, 1000);

    // 发请求，获取验证码
    wx.request({
      url: 'http://localhost:3000/api/user/vcode',
      data:{
        phone:this.data.phone
      },
      success:res=>{
        console.log(res);
        if (res.data.status===0) {
          wx.showToast({
            title: res.data.message+',验证码为：'+res.data.vcode,
            icon:'none'
          });
        }
      }
    })
  }
})