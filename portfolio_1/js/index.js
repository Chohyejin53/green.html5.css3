// 모바일 햄버거 메뉴 클릭시
    $(".trigger").on ({
        "click" : function() {
            // 햄버거 메뉴 버튼이 보일때 (햄버거 메뉴가 visible 상태인가? 로 판단)
            if($(".mobile.hamburger").is(":visible")) {
                // 모바일 닫기 버튼 show
                $(".mobile.hamburger").hide();
                $(".mobile.close").show();

                // 모바일 전체 메뉴 show
                $(".nav_wrap").height(120);
                $("#content_wrap").hide();
                $("#footer_wrap").hide();

                $(".mobile_menu").show();

            } else { /*닫기 메뉴 버튼이 보일때*/
                /* 모바일 햄버거 버튼 show */
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();
            
            /*모바일 전체 메뉴 show*/
            $(".nav_wrap").height(390);
            $("#content_wrap").show();
            $("#footer_wrap").show();
            $(".mobile_menu").hide();
            }
        }, 
        "mouseleave" : function() {

        }
    });