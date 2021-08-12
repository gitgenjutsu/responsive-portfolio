// =================== Menu show/hide ===================
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


// Show
toggleMenu.onclick = function() {
    navMenu.classList.toggle('show');
}

// Hide
closeMenu.onclick = function() {
    navMenu.classList.remove('show');
}


// ================ Dark/Light Mode ===============
//Theme Changer
document.querySelector("#selTheme").onchange = function() {
        var optInd = this.selectedIndex;
        var optVal = this.options[optInd].value;
        var body = document.getElementsByTagName("body")[0];
        body.className = optVal;
        window.localStorage.setItem("class", optVal);
    }
    //theme saver
var getLs = window.localStorage.getItem("class");
var body = document.getElementsByTagName("body")[0];
body.className = getLs;


// ================ Random Color Theme Saver===============


//random color generator
function randomTheme() {
    var symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    window.localStorage.setItem("randomClr", color);
    // console.log(color);

    //theme saver
    var getRand = window.localStorage.getItem("randomClr");

    // console.log(getRand);

    document.querySelector("#nav-menu").style.background = getRand;
    document.querySelector("#randomTheme").style.background = getRand;
    document.querySelector(".home_title").style.color = getRand;
    document.querySelector(".home_img").style.background = getRand;

    var dot = document.querySelectorAll(".education_rounder");
    var line = document.querySelectorAll(".education_line");

    var count1 = 0;
    while (count1 < dot.length) {
        dot[count1].style.background = getRand;
        line[count1].style.background = getRand;
        count1++;
    }

    var a = document.querySelectorAll(".home_soc_link");
    document.querySelector(".button").style.background = getRand;
    var test = document.querySelectorAll(".section-title");
    var i = 0;
    var ind = 0;
    while (ind < a.length) {
        a[ind].style.background = getRand;
        ind++;
    }
    while (i < test.length) {
        test[i].style.color = getRand;
        i++;
    }

}
document.querySelector("#randomTheme").onclick = randomTheme;




// ================ Go to Top ===============
var randBtn = document.querySelector("#randomTheme");
window.onscroll = function() {
    var iH = window.innerHeight / 2;
    if (window.scrollY + iH + "px") {
        randBtn.style.display = "none";
    }
    if (window.scrollY === 0) {
        randBtn.style.display = "inline-block";
    }
};

$(document).ready(function() {
    //Check to see if the window is top, if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $(".scrolltop").fadeIn();
        } else {
            $(".scrolltop").fadeOut();
        }
    });

    //Click event to scroll to top
    $(".scrolltop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});



// ----------------------- portfolio filter --------------------
function portfolio() {
    const filterContainer = document.querySelector(".portfolio_filter"),
        portfolioItems = document.querySelectorAll(".portfolio_item");

    // filter portfolio items
    filterContainer.onclick = function(event) {
        if (event.target.classList.contains("filter_item") && !event.target.classList.contains("active")) {
            // deactivating existing active filter_item
            filterContainer.querySelector(".active").classList.remove("outer_shadow", "active");

            // activating new filter_item
            event.target.classList.add("active", "outer_shadow");
            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) => {
                if (target === item.getAttribute("data-category") || (target === 'all')) {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    }


}
portfolio();


// ----------------------------------- Append word icon ----------------------------
$(document).ready(function() {
    $("a[href$='.docx']").append("<img src='icons/word-icon-sm.png' width=\"20px\">");
});