/**
 * Created by BWInk on 2017/9/2.
 */
$(function () {
    //产品放大镜
    $('#magnifier').magnifier();

    //选购版本
    $("#chooseType .type").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        if($(this).index() ==0){
            $("#price").find("span:first").html("&yen;20.00");
        }else{
            $("#price").find("span:first").html("&yen;26.20");
        }
    });

    //增加按钮
    $(".add").click(function () {
        var num = parseInt($(this).prev().val());
        $(this).prev().val(++num);
    });
    //减少按钮
    $(".sub").click(function () {
        var num = parseInt($(this).prev().prev().val());
        if(num>1){
            $(this).prev().prev().val(--num);
        }
    });
    //输入数量
    $(".num").on("input",function () {
        var num = parseInt($(this).val());
        $(this)
        if(isNaN($(this).val())|| num<=0){
            $(this).parent().siblings(":last").show();
        }else{
            $(this).parent().siblings(":last").hide();
        }
    });

    //加入购物车
    $("#submit").click(function () {
        $("#cartNum").text(parseInt($("#cartNum").text())+parseInt($(".num").val()));
        $(".publicCartNum").text(parseInt($(".publicCartNum").text())+parseInt($(".num").val()));
    });

    //商品介绍和评论的切换
    $("#detailAndCommendTitle li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $("#detailAndCommend>div").hide();
        $("#detailAndCommend>div").eq($(this).index()).show();
        //如果当前页面是评论页面，则为评价百分比执行模拟进度条动画
        if($(this).index()==1){
            $(".plan").each(function () {
                var width = parseInt($(this).closest("li").find("span").text())/100*140;
                $(this).stop(true,false).animate({"width":width},1000);
            });
        }else {
            //如果是商品详情页，则将模拟进度条的进度清空
            $(".plan").css("width",0);
        }
    });

    //评论的切换
    $("#reputationType li").click(function () {
        $(this).addClass("colorOrange").siblings().removeClass("colorOrange");
        $(".reputationCont").hide();
        $(".reputationCont").eq($(this).index()).show();
    });
    
    $("#page .pageNum").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        if($(this).index()!=2){
            $("#page li:first").show();
        }else {
            console.debug("s");
            $("#page li:first").hide();
        }
    });

    //上一页
    $("#page .prePage").click(function () {
       $("#page .pageNum").each(function (index) {
           if($(this).hasClass("current")){
               if(index ==1){
                   $("#page li:first").hide();
               }
               if(index>0){
                   $(this).removeClass("current").prev().addClass("current")
               }
           }
       });
    });

    $("#page .nextPage").click(function (){
        $("#page .pageNum").each(function (index) {
            if(index ==0){
                $("#page li:first").show();
            }
            if($(this).hasClass("current")){
                $(this).removeClass("current");
                $(this).next().addClass("current");
                return false;
            }
        });
    });

});
