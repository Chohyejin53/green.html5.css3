$(function(){
    var gnbFlag = false;
    var gnbIndex;

    $(".nav li").on({
        "mouseenter" : function() {  /*마우스 엔터와 오버의차이 알고 쓰기! 책에 나옴!!*/
            /* lnb show */

            if (gnbIndex != undefined) {
                $(".lnb").eq(gnbIndex).css("display","none");
            }

            gnbIndex = $(this).index();
            gnbFlag = true; // gnb에 마우스를 오버했는지 안했는지 알려줌, 오버하면 트루 값으로 바뀜 

            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
            $(".lnb_container").show();

            $(".lnb").eq(gnbIndex).css("display","block");

            /* 액티브 바 show*/
            $(".active_bar").show();
            
            // 선택된 li의 left와 width를 구해 active_bar의 위치와 길이를 조절한다
            var listLeft = $(this).offset().left;
            var listWidth = $(this).width();
        
            $(".active_bar").width(listWidth);
            $(".active_bar").offset({left: listLeft + 17}); // +17값은 패딩값!!
        },
        "mouseleave" : function() {

        }
    });

    // 하위메뉴 안보이게 하기
    $(".lnb_container").on({
        "mouseleave" : function() {
            if(gnbFlag) {
                $(".lnb_container").removeClass("appear");
                $(".lnb_container").addClass("disappear");
                $(".lnb_container").hide();
                $(".active_bar").hide();   /*하위메뉴 안보일때 액티브바 사라지게 하기!!*/
            } else {
                return;
            }
        }
    });

    // 모바일 햄버거 메뉴 클릭시
    $(".trigger").on ({
        "click" : function() {
            // 햄버거 메뉴 버튼이 보일때 (햄버거 메뉴가 visible 상태인가? 로 판단)
            if($(".mobile.hamburger").is(":visible")) {
                // 모바일 닫기 버튼 show
                $(".mobile.hamburger").hide();
                $(".mobile.close").show();

                // 모바일 전체 메뉴 show
                $("#main_header").height(60);
                $("#main_content").hide();
                $("#main_footer").hide();

                $("#mobile_menu").empty(); /*#mobile_menu 하위 태그 초기화*/
                $("li").eq(3).show();  // mobile에서만 보이는 메뉴 2개 추가
                $("li").eq(4).show();

                var nav = $(".nav").clone();
                $("#mobile_menu").append(nav);
                $("#mobile_menu").show();

            } else { /*닫기 메뉴 버튼이 보일때*/
                /* 모바일 햄버거 버튼 show */
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();
            
            /*모바일 전체 메뉴 show*/
            $("#main_header").height(390);
            $("#main_content").show();
            $("#main_footer").show();
            $("#mobile_menu").hide();
            }
        }, 
        "mouseleave" : function() {

        }
    });

    $(window).resize(function() {
        var width = $(window).width();

        if(width > 767) {
            $("li").eq(3).hide();
            $("li").eq(4).hide();

            if ($("#mobile_menu").is(":visible")) {
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();

                $("#main_header").height(390);
                $("#main_content").show();
                $("#main_footer").show();

                $("#mobile_menu").hide();
            }
        }
    });



});