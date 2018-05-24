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
        title: '请输入有效金额',
        icon: "none",
        duration: 1500
      })
      return;
    }

    if (monthss == "" || monthss == "0") {
      wx.showToast({
        title: '请输入有效贷款期限',
        icon: "none",
        duration: 1500
      })
      return;
    }

    if (ratess == "" || ratess == "0") {
      wx.showToast({
        title: '请输入有效贷款利率',
        icon: "none",
        duration: 1500
      })
      return;
    }
    this.equalBenxiStyle(parseInt(moneyss), parseInt(monthss), parseFloat(ratess/1200.0));

  },
// 等额本息：〔贷款本金×月利率×（1＋月利率）＾还款月数〕÷〔（1＋月利率）＾还款月数－1〕
  equalBenxiStyle: function(money, months, rates) {
    var jun = (money * rates * Math.pow((1+rates),months))/(Math.pow((1+rates), months)-1);
    console.log(jun.toFixed(2));
    console.log(months);
    console.log(rates);
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