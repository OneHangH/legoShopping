/**
 * Created by BWInk on 2017/9/3.
 */
$(function () {
    //登录方式切换
    $("#loginType li").click(function () {
        $(this).addClass("colorOrange").siblings().removeClass("colorOrange");
        $(".loginCont").hide();
        $(".loginCont").eq($(this).index()).show();
        if($(this).index()==0){
                $("#qrCode").stop(true,false).animate({"left":"30px"},500,function () {
                    $("#loginPhone").fadeIn(300);
                });
           var timer = window.setTimeout(function () {
                $("#qrCode").stop(true,false).animate({"left":"100px"},500);
                $("#loginPhone").fadeOut(300);
            },2000);

        }else{
            $("#qrCode").stop(true,true);
            window.clearTimeout(timer);
            $("#qrCode").css("left","100px");
            $("#loginPhone").hide();
        }
    });

    //二维码动画
    $("#qrCode").hover(function () {
        $(this).stop(true,false).animate({"left":"30px"},500,function () {
            $("#loginPhone").fadeIn(300);
        });
    },function () {
        $(this).stop(true,false).animate({"left":"100px"},500);
        $("#loginPhone").fadeOut(300);
    });

    $("input[type='text']").focus(function () {
            $(this).next().show();
    });
    $("input[type='text']").blur(function () {
            $(this).next().hide(200);
    });

    $(".del").click(function () {
        $(this).prev().focus;
        $(this).prev().val("");
    });

});