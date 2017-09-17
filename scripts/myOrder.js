/**
 * Created by BWInk on 2017/9/4.
 */
$(function () {
    //提交订单
    $(".submitBtn").click(function () {
        $(".areYouSure").show();
        console.debug("ss");
    });
    //取消提交
    $(".areYouSure .cancel").click(function () {
        $(".areYouSure").hide();
    });

    //增加按钮
    $(".add").click(function () {
        var num = parseInt($(this).prev().val());
        $(this).prev().val(++num);
        $(this).next().hide();
        totalRow(this,num);
        statistics();
    });
    //减少按钮
    $(".sub").click(function () {
        var num = parseInt($(this).next().val());
        if(num>1){
            $(this).next().val(--num);
            totalRow(this,num);
            statistics();
        }
    });
    //输入数量
    $(".num").on("input",function () {
        var num = parseInt($(this).val());
        $(this).val(num);
        if(isNaN($(this).val())||num<=0){
            $(this).next().next().show();
            totalRow(this,num);
        }else{
            $(this).next().next().hide();
            totalRow(this,num);
            statistics();
        }
    });

    //删除单个
    $(".del").click(function () {
        if(confirm("确定删除吗？")){
            $(this).closest("ul").remove();
            statistics();
        }
    });

    //选框变色
    /*$(".checkboxDiv").click(function () {
     var isChecked = $(this).prev().prop("checked");
     $(this).prev().prop("checked",!isChecked);
     if(!isChecked){
     $(this).css({"background-color":"#FF6700","border":"none"});
     }else {
     $(this).css({"background-color":"#fff","border":"solid 1px #5a5a5a"});
     }
     statistics();
     });*/

    //全选
    $(".checkAll").click(function () {
        $(".carConDetail .checkRow").prop("checked",$(this).prop("checked"));
        $(".checkAll").prop("checked",$(this).prop("checked"));
        statistics();
    });

    //单选
    $(".checkRow").click(function () {
        statistics();
        //根据所有的产品选框的状态来判断全选框的状态
        $(".checkRow").each(function () {
            if(!$(this).prop("checked")){
                $(".checkAll").prop("checked",false); //只要有一个没选中就代表没有全选
                return false;
            }else {
                $(".checkAll").prop("checked",true);  //全部被选中的话就同时把“全选”也勾选
            }
        });
    });

    //删除选中
    $("#delChecked").click(function () {
        if(confirm("确定删除选中的商品吗？")){
            $(".checkRow").each(function () {
                if($(this).prop("checked"))
                {
                    $(this).closest(".carConDetail").remove();
                }
            });
            statistics();
        }
    });

    //统计
    function statistics() {
        /*
         kindQuantity  商品种类数量
         selectedNum   已选商品总量
         totalPrice    总价
         */
        var kindQuantity = 0,selectedNum = 0,totalPrice =0;
        $(".carConDetail").each(function () {
            if($(this).find(".checkRow").prop("checked")){
                selectedNum += 1;
                totalPrice += parseFloat($(this).find(".price span").text());
            }
            ++ kindQuantity;
        });
        $("#kindQuantity").text(kindQuantity);
        $("#selectedNum").text(selectedNum);
        $("#totalPrice").text(totalPrice.toFixed(2));
    };
    statistics();
});