
// 네비게이션 바 이동
$(function(){
    $(".gnb li").hover(function(){
        $(".active_bar").toggle();
        
        var listLeft = $(this).offset().left;
        var listWidth = $(this).width();

        $(".active_bar").width(listWidth);
        $(".active_bar").offset({ left: listLeft}); // +17값은 패딩값!!
    });
});

// 네비게이션바 슬라이드토글
$(function(){
        var gnb1 = $(".gnb .li_1");
        var menu1 = $(".intro_menu");

        $(gnb1).on("click", function(e){
            e.preventDefault();
            menu1.slideToggle();
            });

        var gnb2 = $(".gnb .li_2");
        var menu2 = $(".pr_menu");

        $(gnb2).on("click", function(e){
            e.preventDefault();
            menu2.slideToggle();
            });
        var gnb3 = $(".gnb .li_3");
        var menu3 = $(".service_menu");

        $(gnb3).on("click", function(e){
            e.preventDefault();
            menu3.slideToggle();
            });
}); 
