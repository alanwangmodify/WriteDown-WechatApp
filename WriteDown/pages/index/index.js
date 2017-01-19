
var app = getApp()

Page({
  data: {
    userInfo: {},
    itemList:[]
  },
  
  startWriteAction:function (){
    wx.navigateTo({
      url: '../write/write',
      success: function(res){
      },
      fail: function() {
      },
      complete: function() {
      }
    })
  }, 


  onReady:function(){
    var that = this

    that.setData({
      itemList:[{
        "idKey":"",
        "title":"这是一个标题",
        "content":"这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容"
      },{
        "title":"这是一个标题",
        "content":"这是一个内容这是一个内容这是一个内容这是一个内容"
      },{"idKey":"",
        "title":"这是一个标题",
        "content":"这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容"
      },{"idKey":"",
        "title":"这是一个标题",
        "content":"这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容这是一个内容"
      }]
    })
  },
  
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
