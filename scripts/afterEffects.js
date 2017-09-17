$(function () {
    //ebook轮播的参数
    $(".eBookBanner").tyslide({
        boxh:218,//盒子的高度
        w:334,//盒子的宽度
        h:218,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:15,//控制按钮宽度
        controlsH:2,//控制按钮高度
        radius:0,//控制按钮圆角度数
        controlsColor:"#fff",//普通控制按钮的颜色
        controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
        isShowNumber:true
    });

    //电子书的tab
    $("#eBook #eBookBody #eBookTitle li").mouseover(function () {
        $("#eBook #eBookBody #eBookTitle li").removeClass("current");
        $(this).addClass("current");
        $("#eBook #eBookBody #eBookContent .productDetail").hide();
        $("#eBook #eBookBody #eBookContent .productDetail").eq($(this).index()).show();
    });

    //电子书排行榜
    $("#bookRank li").mouseover(function () {
        $("#bookRank .bookImg").hide();
        $("#bookRank .bookText").show();
        $(this).find(".bookImg").show();
        $(this).find(".bookText").hide();
    });

    $(".publicBanner").tyslide({
        boxh:340,//盒子的高度
        w:424,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:15,//控制按钮宽度
        controlsH:2,//控制按钮高度
        radius:0,//控制按钮圆角度数
        controlsColor:"#fff",//普通控制按钮的颜色
        controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
        isShowNumber:true
    });

    //publicProduct的tab
    //找到首页中的所有公共tab滑动,循环遍历每一个tab菜单并分别为每个菜单设置滑动效果
    var publicTitle = $(".publicProductTitle");
    for(var i = 0;i<publicTitle.length;++i){
        var tabMenu = publicTitle.eq(i);
        tabMenu.find(".tabTitle li").mouseover(function () {
            $(this).closest(".tabTitle").find("li").removeClass("current");
            $(this).addClass("current");
            $(this).closest(".publicProductTitle").siblings(".publicProductCon").find(".publicProductDetail").hide();
            $(this).closest(".publicProductTitle").siblings(".publicProductCon").find(".publicProductDetail").eq($(this).index()).show();
        });
    }

    //商品推广
    $("#pop #popTitle li").mouseover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $("#pop #popBigBox").stop(true,false).animate({"left":$(this).index()*(-1200)},800);
    });

    $(".exclusiveBanner").tyslide({
        boxh:530,//盒子的高度
        w:1200,//盒子的宽度
        h:500,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:14,//控制按钮宽度
        controlsH:14,//控制按钮高度
        radius:7,//控制按钮圆角度数
        controlsColor:"#ccc",//普通控制按钮的颜色
        controlsCurrentColor:"#FF6700",//当前控制按钮的颜色
        isShowNumber:true
    });

    //楼层滚动的特效
    $(window).scroll(function () {
        if($(window).scrollTop()>450){
            $("#topSearchFix").slideDown();
            $("#floorScroll").fadeIn();
            $("#searchLogo").after($("#search"));
        }else{
            $("#topSearchFix").stop(true,false).slideUp(function () {
                $("#shopppingCart").after($("#search"));
            });
            $("#floorScroll").fadeOut();
        }
    });


    $("#floorScroll li").hover(function() {
        //颜色数组
        var colorArray=["#93d56f","#f55828","#ba9eee","#ff7494","#c2ed51","#5dd2fd","#f868bd","#666"];
        //文字数组
        var textArray=["推荐","图书","服装","户外","童装","家居","推广","顶部"];
        //把索引对应的颜色设置给当前的li
        $(this).css({"background-color":colorArray[$(this).index()],"background-position-x":"-40px"});
        //把索引对应的文字设置给当前的li,为了方便于定位文本位置,加入了span标签
        $(this).html("<span>"+textArray[$(this).index()]+"</span>");
        //设置图标宽度为80px
        $(this).animate({"width":"80"},100);

    },function() {
        $(this).stop(true,false).animate({"width":"40"},100,function () {
            //设置文字为空
            $(this).html("");
            //恢复为默认颜色 恢复图标宽度为40px
            $(this).css({"background-color":"#dedede","background-position-x":"0px"});
        });
    });

    //返回顶部
    $("#floorScroll li:last").click(function () {
        $("html,body").animate({"scrollTop":0},300);
    });

    //点击对应的楼层跳转到对应的楼层内容
    $("#floorScroll li:not(:last)").click(function () {
        //图标的索引
        var index=$(this).index();
        //console.log(index);
        //索引对应的楼层距离顶部的偏移值
        var floorTopValue=$(".floor").eq(index).offset().top-50;

        //动画跳转到指定的楼层
        $("html,body").animate({"scrollTop":floorTopValue},500);
    });
});
