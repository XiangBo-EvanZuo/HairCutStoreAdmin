// pages/admin/edituser.js
var appInstance = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserInfo: function(){
    var that = this;
    wx.request({
      url: 'http://192.168.1.104:8888/api/v1/users/SearchEmail/'+ appInstance.globalData.email,
      header: {
        "content-type": "application/json",
        "authorization": appInstance.globalData.cookie
      },
      success: function(res){
      if (res.statusCode == 200){
        that.setData({results: res.data})
        console.log(that.data.results)
      }
      }
    })
  },
  getclick:function(e){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.getUserInfo()
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