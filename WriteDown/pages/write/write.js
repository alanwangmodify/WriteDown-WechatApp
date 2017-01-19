

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

  chooseImg:function (){
      console.log("选择图片")
      wx.chooseImage({
        count: 9, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function(res){
          var tempFilePaths = res.tempFilePaths
          wx.saveFile({
            tempFilePath: tempFilePaths,
            success: function(res){
                console.log(res.savedFilePath)
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        },
        fail: function() {        
        },
        complete: function() {
          // complete
        }
      });
     
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