$(document).ready(function(){


    // 스크롤
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        let lastScrollTop = 0;
        $(".scroll p").text(parseInt(scrollTop));
    });

    // 메인 슬라이드
    $("#main_img .slide1").addClass("effect");
    $("#main_img .slide1").siblings().removeClass("effect");
    $(".btn1").addClass("active");

    var btn = $(".button > div")
    var nowbtn = 0;


    btn.on("click",function(){
        nowbtn = $(this).index() + 1;
        $(this).addClass("active").siblings().removeClass("active");
        $(".slide"+nowbtn).animate({"top":"0"}).addClass("effect").siblings().removeClass("effect").animate({"top":"100vh"});
        $(".slide"+nowbtn).find(".main_txt").addClass("effect");
        $(".slide"+nowbtn).siblings().find(".main_txt").removeClass("effect");
    });

    /* 모바일 햄버거 메뉴 */
    $(".mob_menu_box").on("click",function(){
        $("#mob_menu_all").toggleClass("fade_in"); 
        $(".open_cover").toggleClass("fade_in");
        $("span").eq(0).toggleClass("hamburger");
        $("span").eq(1).toggleClass("hamburger2");
        $("span").eq(2).toggleClass("hamburger3");
    });   

    // 매거진 슬라이드
    function loof(){
        $(".mag_contents_wrap").animate({
                left:"-14vw"
                },{
                complete:function(){
                    var $clone = $(".mag_contents_in").first().clone();
                    $(".mag_contents_wrap").append($clone);
                    $(".mag_contents_in").first().remove();
                    $(".mag_contents_wrap").css("left","0");
                },
                duration:3000,
                easing:"linear"                
            });
    }

    setInterval(loof, 1000);
    
});
