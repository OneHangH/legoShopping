/**
 * Created by BWInk on 2017/9/4.
 */
$(function () {
    //支付
    $("#payBtn").click(function () {
        $(".areYouSure").show();
    });
    //取消支付
    $(".areYouSure .cancel").click(function () {
        $(".areYouSure").hide();
    });
});