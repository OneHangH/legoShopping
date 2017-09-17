/**
 * Created by BWInk on 2017/9/3.
 */
$(function () {
    //返回顶部按钮动态出现
    var bottom = parseFloat($("footer #footerContent .goTop img").css("bottom"));
    $("footer #footerContent .goTop img").hover(function () {
        $("footer #footerContent .goTop img").stop(true,false).animate({"bottom":0},200);
    },function () {
        $("footer #footerContent .goTop img").stop(true,false).animate({"bottom":-25},200);
    });

    //返回顶部
    $("footer #footerContent .goTop").click(function () {
        $("html,body").animate({"scrollTop":0},300);
    });

    //右侧二维码
    $("footer .qrCode .li2").hover(function () {
        $("footer .qrCode .li2 .code").stop(true,false).animate({"left":-100},300);
    },function () {
        $("footer .qrCode .li2 .code").stop(true,false).animate({"left":0},300);
    });
});