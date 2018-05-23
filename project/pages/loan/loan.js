// pages/loan/loan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectLeft:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  tapLeftBtn: function() {
    this.setData({
      selectLeft: true
    })
  },
  
  taprightBtn:function() {
    this.setData({
      selectLeft: false
    })
  },

  caculateTap: function(option) {
    var moneyss = option.detail.value.moneys;
    var monthss = option.detail.value.months;
    var ratess = option.detail.value.rates;
    
    if(moneyss == "" || moneyss == "0") {
      wx.showToast({
        title: '请输入有限金额',
        complete: function() {
          
        }
      })
    }

    console.log(moneyss);
    console.log(monthss);
    console.log(ratess);
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