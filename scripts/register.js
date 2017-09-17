/**
 * Created by BWInk on 2017/9/4.
 */
$(function () {
    $("#msgVerify").click(function () {
        var msgVerify =  $("#msgVerify");
        var verifyV = msgVerify.text();
        //
        if(verifyV == "获取验证码"){
            var i = 60;
            msgVerify.text("已发送("+i+"s)");
            var timer = window.setInterval(function () {
                --i;
                msgVerify.text("已发送("+i+"s)");
                if(i<0){
                    msgVerify.text("获取验证码");
                    window.clearInterval(timer);
                }
            },1000);
        }
    });

    //随机生成验证码
    $("#getVerify").click(function () {
       /*
        0-9A-Za-z:   48-57,65-90,97-122
        */
       var verify = "";
        var randomV = 91;
        var str2 = "a";
        console.debug(str2.charCodeAt());
       for(var i = 0;i<4;++i){
           do{
               randomV = Math.floor(Math.random()*(122-48+1)+48);
           }while ((randomV>57&&randomV<65)||(randomV>90&&randomV<97));
           verify +=String.fromCharCode(randomV);
       }
       $("#getVerify").text(verify);
    });

    //验证
    $("#userName").on("input",function () {
        var str = $(this).val().trim();
        if(str.length<6||str.length>12){
            $("#error li").eq(0).css("opacity",1);
        }else{
            $("#error li").eq(0).css("opacity",0);
        }
    });

    $("#psw").on("input",function () {
        var str = $(this).val().trim();
        if(str.length<6||str.length>12){
            $("#error li").eq(1).css("opacity",1);
        }else{
            $("#error li").eq(1).css("opacity",0);
        }
    });

    $("#pswAgain").on("input",function () {
        var str = $(this).val().trim();
        var str2 = $("#psw").val().trim();
        if(str!=str2){
            $("#error li").eq(2).css("opacity",1);
        }else{
            $("#error li").eq(2).css("opacity",0);
        }
    });

    $("#verify").blur(function () {
        var str = $(this).val().trim().toLowerCase();
        var str2 = $("#getVerify").text().trim().toLowerCase();
        if(str!=str2){
            $("#error li").eq(4).css("opacity",1);
        }else{
            $("#error li").eq(4).css("opacity",0);
        }
    });

    $("#phone").blur(function () {
        var str = $(this).val().trim();
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(str))){
            $("#error li").eq(3).css("opacity",1);
        }else{
            $("#error li").eq(3).css("opacity",0);
        }
    });
});