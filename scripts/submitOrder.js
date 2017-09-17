/**
 * Created by BWInk on 2017/9/4.
 */
$(function () {
    //初始化为底层确认信息赋值
   $("#sendAddress").val($("#receiver .address:first").text());
   $("#receiverName").val("136******88");

   //地址信息选择
   $("#receiver .choose").click(function () {
       $("#receiver .choose").removeClass("current");
       $(this).addClass("current");
       //将选择的地址为底层确认信息赋值
       $("#sendAddress").val($(this).next().text());
   });

   //支付方式选择
    $("#payWay .choose").click(function () {
        $("#payWay .choose").removeClass("current");
        $(this).addClass("current");
    });

    //提交订单
    $("#submitOrder").click(function () {
        $(".areYouSure").show();
    });
    //取消提交
    $(".areYouSure .cancel").click(function () {
        $(".areYouSure").hide();
    });
});