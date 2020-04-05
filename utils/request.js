// 定义基准路径
const BASE_URL = 'http://localhost:3000/api/';
/**
 * 定义一个函数
 * obj = {url:'user/vcode',method:'POST',data:{},tipName:'正在加载中...'}
 */
const request = ({ url, method = 'GET', data = {}, tipName = '正在加载中...' }) => {
  // 设置请求头
  const header = {};
  // 当本地存储中有token
  if (wx.getStorageSync('token')) {
    // 请求头携带token
    header.Authorization = wx.getStorageSync('token');
  }
  return new Promise((resolve, reject) => {
    // 用户提示：正在加载中
    wx.showLoading({
      title: tipName
    });
    // 异步请求
    wx.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header,
      success: res => {
        resolve(res);
      },
      fail: err => {
        reject(err);
      },
      complete: () => {
        // 隐藏提示
        wx.hideLoading();
      }
    })
  })
};
// 导出一个函数
export default request