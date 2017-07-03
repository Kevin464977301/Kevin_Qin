//index.js
Page({
  //数据
  data: {
    //两个键值中需要用逗号(,)进行区分
    //b: "嘻嘻哈哈"
    a: 18,
    longitude: 113.01,
    latitude: 28.21,
    //control 添加控件
    control: [{
      //免费骑车背景
      id: 0,
      iconPath: '/images/Home_page/backdrop_icon.png',
      position: {
        left: 0,
        top: 350,
        width: 375,
        height: 290
      },
      chickable: false
    },{
      //免费骑车图标
      id: 1,
      iconPath: '/images/Home_page/scan_icon.png',
      position: {
        left: 124,
        top: 420,
        width: 120,
        height: 120
      },
      clickable: true
    },{
      //个人中心图标
      id: 2,
      iconPath:'/images/Home_page/personal_icon.png',
      position:{
        left:30,
        top: 530,
        width:20,
        height:20
      },
      clickable: true
    },{
      //活动中心图标
      id: 3,
      iconPath:'/images/Home_page/activity_icon.png',
      position:{
        left:320,
        top:530,
        width:20,
        height:20
      },
      clickable: true
    },{
      //维修图标
      id: 4,
      iconPath:'/images/Home_page/service_icon.png',
      position:{
        left:305,
        top:300,
        width:50,
        height:50
      },
      clickable: true
    },{
      //重新定位图标
      id: 5,
      iconPath: '/images/Home_page/break_icon.png',
      position: {
        left: 305,
        top: 350,
        width: 50,
        height: 50
      },
      clickable: true
    },{
      //提示消息
      id:6,
      iconPath: '/images/Home_page/message_icon.png',
      position: {
        left:178,
        top:40,
        width:230,
        height:50
      },
      chickable: false
    },{
      //警告标志
      id: 7,
      iconPath: '/images/Home_page/warning_icon.png',
      position: {
        left: 195,
        top: 52,
        width: 20,
        height: 20
      },
      chickable: true
    },{
      //小黄车Logo
      id: 8,
      iconPath: '/images/Home_page/logo_icon.png',
      position: {
        left: 10,
        top: 45,
        width: 100,
        height: 40
      },
      chickable: false
    },{
      //向下键
      id: 8,
      iconPath: '/images/Home_page/down_icon.png',
      position: {
        left: 175,
        top: 400,
        width: 20,
        height: 10
      },
      chickable: true
    },{
      id:9,
      iconPath:'/images/Home_page/location_icon_blue.png',
      position:{
        left:190,
        top:300,
        width:30,
        height:35
      }
    }, {
      id: 10,
      iconPath: '/images/Home_page/location_icon.png',
      position: {
        left: 210,
        top: 310,
        width: 30,
        height: 35
      }
    }
    ]
  },
  //onReady代表当程序加载完成的时候
  //function(){}是一个格式
  onReady:function(){
    //控制台输出
    //console.log("初始化完成!");

    //var self定义一个空间,可命名为其他
    //this 当前页面,然后将当前页面放入到self里面
    var self = this ;
    //wx.getLocation获取当前的地理位置,微信提供功能
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
        //在控制台输出当前的经度和纬度,可不输出
        console.log(res.longitude);
        console.log(res.latitude);
      },
    })
  }
})
