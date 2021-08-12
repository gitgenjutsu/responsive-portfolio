$(document).ready(function() {

    $(".next").on("click", function() {
        let activeImg = $(".active");
        let nextImg = activeImg.next();
        if (nextImg.length) {
            activeImg.removeClass("active animationClass").css("z-index", -10);
            nextImg.addClass("active animationClass").css("z-index", 10);
        }

    });

    $(".prev").on("click", function() {
        let activeImg = $(".active");
        let prevImg = activeImg.prev();
        if (prevImg.length) {
            activeImg.removeClass("active animationClass").css("z-index", -10);
            prevImg.addClass("active animationClass").css("z-index", 10);
        }
    });

    $(".thumbnail img").on("click", function() {
        $(".thumbnail img").removeClass("active");
        $(this).addClass("active");
        let imgSrc = $(this).attr("src");
        $(".sliderInner img.active").attr("src", imgSrc);
        // $(".thumbnail img").removeClass("active animationClass");
        // $(this).addClass("active animationClass");
    });
});