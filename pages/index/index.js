//index.js
Page({
  data: {
    //两个键值中需要用逗号(,)进行区分
    //b: "嘻嘻哈哈"
    a: 18,
    longitude: 113.01,
    latitude: 28.21
  },
  //onReady代表当程序加载完成的时候
  onReady:function(){
    //控制台输出
    //console.log("初始化完成!");
    var self = this ;
    //wx.getLocation获取当前的地理位置
    wx.getLocation({
      success: function (res) {
        //初始化完成后执行这里的代码
        //在这里设置当前页面的经度和纬度的数据
        self.setData({
          longitude:res.longitude,
          latitude:res.latitude
        });
        //res.longitude 经度
        //res.latitude 纬度
        //在控制台输出当前的经度和纬度
        console.log(res.longitude);
        console.log(res.latitude);
      },
    })
  }
})
