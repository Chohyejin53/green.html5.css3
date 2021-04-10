
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
$(document).ready(function(){

    btn = $('gnb'); //버튼 아이디 변수 선언

    layer = $('.lnb'); //레이어 아이디 변수 선언

    btn.click(function(){

        layer.toggle(

        function(){
            $(layer).css("display", "block");
         }, //클릭하면 show클래스 적용되서 보이기

        function(){
            $(layer).css("display", "none");
         } //한 번 더 클릭하면 hide클래스가 숨기기
    );

    });

});