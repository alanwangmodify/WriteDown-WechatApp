

var textRecordKey = ""

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
    
  },

 
  SaveBtnEventHandle:function (){
    try {
      if (textRecordKey.length==0){
        textRecordKey = "textRecordKey"+Date.parse(new Date());
        console.log('New key')

      }
      console.log(textRecordKey)
      wx.setStorageSync(textRecordKey, 'value')
      // wx.navigateBack({
      //   delta: 1, // 回退前 delta(默认为1) 页面
      //   success: function(res){
      //   },
      //   fail: function() {
      //   },
      //   complete: function() {
      //   }
      // })
    } catch (e) {
      console.log(e)
    }    
  }
})