$(function(){
    var gnbFlag = false;
    var gnbIndex;

    $(".nav li").on({
        "mouseenter" : function() {
            /* lnb show */

            if(fnbFlag != undefined) {
                $("lnb").eq(gnbIndex).css("display","none");
            }

            gnbIndex = $(this).index();
            gnbFlag = true; // gnb에 마우스를 오버했는지 안했는지 알려줌, 오버하면 트루 값으로 바뀜 

            $("lnb_container").removeClass("appear");
            $("lnb_container").addClass("disappear");
            $(".lnb_container").show();

            $(".lnb").eq($(this).index()).css("display","block");
        },
        "mouseleave" : function() {

        },
    });





    // $(".nav").hover(function(){
    //     var lnbShow = $(".lnb_container").is(":visible");

    //     if(lnbShow) { //하위메뉴가 보이면 
    //         $("lnb_container").removeClass("appear");
    //         $("lnb_container").addClass("disappear");
    //     } else { //하위메뉴가 보이면 
    //         $("lnb_container").removeClass("disappear");
    //         $("lnb_container").addClass("appear");
    //     }

    //     $(".lnb_container").toggle(); // block 혹은 none 처리
    // });

    // $(".nav li").hover(function(){
    //     $(".active_bar").toggle();
        
    //     var listLeft = $(this).offset().left;
    //     var listWidth = $(this).width();

    //     $(".active_bar").width(listWidth);
    //     $(".active_bar").offset({ left: listLeft + 17}); // +17값은 패딩값!!
    // });

});