/**
 * Created by BWInk on 2017/8/31.
 */
$(function () {
   $("#hotContent .hotDetail").mouseover(function () {
       $(this).addClass("current").siblings().removeClass("current");
       $(this).siblings().find("img").removeClass("marginTop20");
       $(this).find("img").addClass("marginTop20");
   });

    //换一批
    $("#guessULikeTitle .change").click(function () {
        var num;
        //获取当前可见的guessULikeContent的索引
        var index = $("#guessULikeList").find(":visible").index();
        do{
            //随机生成一个0到所有guessULikeContent总数减1的数
            num =Math.floor(Math.random()*$("#guessULikeList .guessULikeContent").length);
        }while(num == index);  //若该数指示的guessULikeContent为可见，再次返回生成一个随机数
        //显示生成的随机数对应索引的guessULikeContent
        $("#guessULikeList .guessULikeContent").eq(num).show().siblings().hide();
    });
});