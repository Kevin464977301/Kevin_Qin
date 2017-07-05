//index.js
Page({
  //数据
  data: {
    //两个键值中需要用逗号(,)进行区分
    //b: "嘻嘻哈哈"
    scale: 18,
    longitude: 113.01,
    latitude: 28.21,
  },
  
  //onReady代表当程序加载完成的时候
  //function(){}是一个格式
  onReady:function(){
    var marker = [{
      iconPath: "/images/Home_page/location_icon_blue.png",
      id: 1,
      latitude: 28.228209,
      longitude: 112.938814,
      width: 35,
      height: 40
    }];


    //米字循环
    //for循环
    for(var i=1;i<=10;i++){
      var a = i*0.0001;
      //向数组中添加标记
      marker.push({
        //图标的路径
        iconPath:"/images/Home_page/location_icon.png",
        //纬度值
        latitude: 28.228209,
        //经度值
        longitude: 112.938814+a,
        width: 35,
        height: 40
      }, {
          iconPath: "/images/Home_page/location_icon.png",
          latitude: 28.228209+a,
          longitude: 112.938814,
          width: 35,
          height: 40
        })
    };
    for(var i=1;i<=10;i++){
      var a = i*0.0001;
      marker.push({
        iconPath:"/images/Home_page/location_icon.png",
        latitude: 28.228209,
        longitude: 112.938814-a,
        width: 35,
        height: 40
      }, {
          iconPath: "/images/Home_page/location_icon.png",
          latitude: 28.228209-a,
          longitude: 112.938814,
          width: 35,
          height: 40
        })
    };
    for (var i = 1; i <= 10; i++) {
      var a = i * 0.0001;
      marker.push({
        iconPath: "/images/Home_page/location_icon.png",
        latitude: 28.228209 + a,
        longitude: 112.938814-a,
        width: 35,
        height: 40
      }, {
          iconPath: "/images/Home_page/location_icon.png",
          latitude: 28.228209-a,
          longitude: 112.938814 + a,
          width: 35,
          height: 40
        })
    };
    for (var i = 1; i <= 10; i++) {
      var a = i * 0.0001;
      marker.push({
        iconPath: "/images/Home_page/location_icon.png",
        latitude: 28.228209 - a,
        longitude: 112.938814 - a,
        width: 35,
        height: 40
      }, {
          iconPath: "/images/Home_page/location_icon.png",
          latitude: 28.228209 + a,
          longitude: 112.938814 + a,
          width: 35,
          height: 40
        })
    };
    

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

        //随机标识
        for (var i = 1; i <= 10; i++) {
          //向数组中添加标记
          marker.push({
            id:1,
            //图标的路径
            iconPath: "/images/Home_page/location_icon.png",
            //纬度值
            latitude: res.latitude + Math.random() * 0.0005,
            //经度值
            longitude: res.longitude + Math.random() * 0.0005,
            width: 35,
            height: 40
          }, {
              iconPath: "/images/Home_page/location_icon.png",
              latitude: res.latitude - Math.random() * 0.0005,
              longitude: res.longitude + Math.random() * 0.0005,
              width: 35,
              height: 40
            }, {
              iconPath: "/images/Home_page/location_icon.png",
              latitude: res.latitude + Math.random() * 0.0005,
              longitude: res.longitude - Math.random() * 0.0005,
              width: 35,
              height: 40
            }, {
              iconPath: "/images/Home_page/location_icon.png",
              latitude: res.latitude - Math.random() * 0.0005,
              longitude: res.longitude - Math.random() * 0.0005,
              width: 35,
              height: 40
            })
        };


        //5张图片随机显示
        for (var i = 1; i <= 5; i++) {
          marker.push({
            iconPath: "/images/Home_page/QQ.png",
            latitude: res.latitude + Math.random() * 0.0005,
            longitude: res.longitude + Math.random() * 0.0005,
            width: 35,
            height: 40
          })
        }


        self.setData({
          mark: marker
        });
        //res.longitude 经度
        //res.latitude 纬度
        //在控制台输出当前的经度和纬度,可不输出
        console.log(res.longitude);
        console.log(res.latitude);
      }
    })
    wx.getSystemInfo({
      //系统自动调用功能,将系统的信息扔进res空间中
      success: function (res) {
        //成功的时候,执行这里的代码
        //res中的手机型号
        //alert(res.model);
        //wx.showToast({
          //res.windowWidth系统返回手机宽度,数字
          //title: "" + res.windowWidth + "," + res.windowHeight
        //})
        var all = [{
          //免费骑车背景
          id: 0,
          iconPath: '/images/Home_page/backdrop_icon.png',
          position: {
            left: 0,
            top: res.windowHeight - 253,
            width: res.windowWidth,
            height: 253
          },
          chickable: false
        },{
          //扫一扫图标
          id:2,
          iconPath:'/images/Home_page/scan_icon.png',
          position:{
            left:res.windowWidth / 2 - 60,
            top:res.windowHeight / 2 + 150,
            width:120,
            height:120
          },
          chickable: true
        },{
          //向下键
          id:3,
          iconPath: '/images/Home_page/down_icon.png',
          position: {
            left: res.windowWidth / 2 - 10,
            top: res.windowHeight / 2 + 120,
            width: 20,
            height: 10
          },
          chickable: true
        },{
          //个人中心图标
          id:4,
          iconPath: '/images/Home_page/personal_icon.png',
          position: {
            left: 30,
            top: res.windowHeight - 60,
            width: 30,
            height: 30
          },
          chickable: true
        }, {
          //活动中心图标
          id: 5,
          iconPath: '/images/Home_page/activity_icon.png',
          position: {
            //因图标宽度为30,减掉30是在最右边显示,所以应该减掉图标宽度和30的宽度
            left: res.windowWidth - 60,
            top: res.windowHeight - 60,
            width: 30,
            height: 30
          },
          chickable: true
        }, {
          //重新定位图标(没车用)
          id: 6,
          iconPath: '/images/Home_page/break_icon.png',
          position: {
            left: res.windowWidth - 80,
            top: res.windowHeight/2 + 50,
            width: 60,
            height: 60
          },
          chickable: true
        }, {
          //维修中心图标
          id: 7,
          iconPath: '/images/Home_page/service_icon.png',
          position: {
            left: res.windowWidth - 80,
            top: res.windowHeight / 2 -20,
            width: 60,
            height: 60
          },
          chickable: true
        }, {
          //小黄车Logo
          id: 8,
          iconPath: '/images/Home_page/logo_icon.png',
          position: {
            left: 20,
            top: 30,
            width: 100,
            height: 40
          },
          chickable: true
        }, {
          id: 9,
          iconPath: '/images/Home_page/message_icon.png',
          position: {
            left: res.windowWidth - 180,
            top: 30,
            width: 220,
            height: 40
          },
          chickable: true
        }
        ];
        self.setData({
          control:all
        });
      }      
    })
  }
})
