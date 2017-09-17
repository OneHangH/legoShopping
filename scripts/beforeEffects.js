 $(function () {
 	//一级菜单
    $("#mainMenu li").hover(function () {
        //鼠标移入
        $(this).find("p").addClass("current");
        $(this).find(".subMenu").show();
    },function () {
        $(this).find("p").removeClass("current");
        $(this).find(".subMenu").hide();
    });
        
        //主轮播的参数
    $("#slideBox").tyslide({
		boxh:430,//盒子的高度
		w:1000,//盒子的宽度
		h:400,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:20,//控制按钮高度
		radius:10,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
		isShowNumber:true
	});

    //推荐商品特效
	 $("#recommend #recContent .center").hover(function () {
         $("#recommend #recContent .center").removeClass("current");
         $(this).addClass("current");
     },function () {
         $("#recommend #recContent .center").removeClass("current");
     });

     //购物车和我的订单切换
     $("#logoCartSearch #shopppingCart li").mouseover(function () {
         $("#logoCartSearch #shopppingCart li").removeClass("current");
         $(this).addClass("current");
     });
});

    