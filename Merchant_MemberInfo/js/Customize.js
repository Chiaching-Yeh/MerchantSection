jQuery(document).ready(function ($) {


    // sideBar

    $('.cart>li>a').click(function (event) {

        event.preventDefault();

        $(this).toggleClass('active');

        //我自己的ul 做收合效果
        $(this).siblings('ul').slideToggle();

        $(this).parent().siblings().find('a').removeClass('active');

        //this以外的都隱藏起來
        $(this).parent().siblings().find('ul').slideUp();
    });

    // 營業資訊是否上架
    var switchStatus = false;
    $(".IsEnalbe input").change(function (e) {
        if ($(this).is(':checked')) {
            switchStatus = $(this).is(':checked');
            console.log(switchStatus);
        }
        else {
            switchStatus = $(this).is(':checked');
            console.log(switchStatus);
        }
    });


});