// pages/phone-login/phone-login.js
// 导入封装的请求方法
import axios from '../../utils/axios';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '17704051019',
    tipName: '获取验证码',
    // 倒计时总秒数
    count: 10,
    // 是否正在倒计时
    isCountDown: false,
    // 定时器id
    timerId: null,
    // 验证码
    vcode: ''
  },
  // 修改值（手机号、验证码）（参数用的解构赋值）
  changeValue({ detail: { value }, target: { dataset: { name } } }) {
    // 修改data中name对应值的属性的值
    this.setData({
      // 属性名表达式 [name]，可以拿到name里面的值，当属性名是动态变化时这么写
      [name]: value
    })
  },
  // 获取验证码
  getVcode() {
    // 拿到数据中的手机号
    const phone = this.data.phone;
    // 验证手机号的正则表达式
    var reg = /^1[3456789][0-9]{9}$/;
    // 校验手机号是否合法
    if (!reg.test(phone)) {
      // 错误提示
      wx.showToast({
        title: '手机号不合法',
        icon: 'none'
      });
      // 返回
      return;
    }
    // 倒计时
    // 如果当前正在倒计时，则返回
    if (this.data.isCountDown) return
    // 修改跟倒计时相关的模型数据
    this.setData({
      tipName: this.data.count,
      isCountDown: true //开始倒计时
    });
    // 开启定时器，每隔1s，count--
    this.data.timerId = setInterval(() => {
      // 当count值<=1时
      if (this.data.count <= 1) {
        // 清除计时器
        clearInterval(this.data.timerId);
        // 重置模型数据
        this.data.count = 10;
        this.setData({
          tipName: '获取验证码',
          isCountDown: false
        });
        // 返回
        return;
      }
      // count--
      this.data.count--;
      // 改变tipName的值，实时看到效果
      this.setData({
        tipName: this.data.count
      })
    }, 1000);

    // 发请求，获取验证码
    axios({
      url: 'user/vcode',
      data: {
        phone: this.data.phone
      }
    }).then(res => {
      // 当成功发送验证码后，消息提示
      if (res.data.status === 0) {
        wx.showToast({
          title: res.data.message + ',验证码为：' + res.data.vcode,
          icon: 'none'
        });
      }
    })
  },
  // 手机号登录
  phoneLogin() {
    // 发送网络请求，手机号登录
    axios({
      url: 'user/login',
      method: 'POST',
      data: {
        phone: this.data.phone,
        vcode: this.data.vcode
      }
    }).then(res => {
      // 消息提示
      wx.showToast({
        title: res.data.message,
        icon: 'none',
        duration: 1000
      });
      // 当登录成功后
      if (res.data.status === 0) {
        // 本地保存token
        wx.setStorageSync('token', res.data.token);
        // 跳转到首页
        wx.reLaunch({
          url: '/pages/home/home',
        });
      }
    })
  }
})