// slider code
var images = [{

        path: "img/pic2.jpg",
        alt: "Picture 1",
        cap: "“Knowledge is power.”",
        writer: "Francis Bacon",
    },
    {
        path: "img/pic3.jpg",
        alt: "Picture 2",
        cap: "“Java is to JavaScript what car is to Carpet.”",
        writer: "Chris Heilmann",
    },
    {
        path: "img/pic4.jpg",
        alt: "Picture 3",
        cap: "“Simplicity is the soul of efficiency.”",
        writer: "Austin Freeman",
    },
    {
        path: "img/pic5.jpg",
        alt: "Picture 4",
        cap: "“ Code is like humor. When you have to explain it, it’s bad.”",
        writer: "Cory House",
    },
    {
        path: "img/pic1.jpg",
        alt: "Picture 5",
        cap: "“First, solve the problem. Then, write the code.”",
        writer: "John Johnson",
    },
];

var imgLen = images.length;
let img = document.querySelector("#pic");
let prevImg = document.querySelector(".prevImg");
let nextImg = document.querySelector(".nextImg");
let imgNum = 0;

//setting alt and caps for landing users
img.alt = images[imgNum]["alt"];
caption.innerHTML = images[imgNum]["cap"];
writer.innerHTML = images[imgNum]["writer"];
prevImg.src = images[4]["path"];
nextImg.src = images[1]["path"];
document.querySelector("#total").innerHTML = " / " + imgLen;
document.querySelector("#current").innerHTML = imgNum + 1;
//next slide
function nextSlide() {
    imgNum++;

    if (imgNum > imgLen - 1) {
        imgNum = 0;
    }
    document.querySelector("#current").innerHTML = imgNum + 1;
    prevImg.src = images[imgNum - 1]["path"];
    nextImg.src = images[imgNum + 1]["path"];
    img.src = images[imgNum]["path"];
    img.alt = images[imgNum]["alt"];
    caption.innerHTML = images[imgNum]["cap"];
    writer.innerHTML = images[imgNum]["writer"];
    updateIndicator();
    resetTimer();
}
document.querySelector("#nextSlide").onclick = nextSlide;


//previous slide
function prevSlide() {
    imgNum--;
    if (imgNum < 0) {
        imgNum = imgLen - 1;
    }
    document.querySelector("#current").innerHTML = imgNum + 1;
    prevImg.src = images[imgNum - 1]["path"];
    nextImg.src = images[imgNum + 1]["path"];
    img.src = images[imgNum]["path"];
    img.alt = images[imgNum]["alt"];
    caption.innerHTML = images[imgNum]["cap"];
    writer.innerHTML = images[imgNum]["writer"];
    updateIndicator();
    resetTimer();
}
document.querySelector("#prevSlide").onclick = prevSlide;


// create circle indicators
// function circleIndicator() {
//     for (var i = 0; i < imgLen; i++) {
//         var div = document.createElement("div");
//         var indc = document.querySelector(".indicator");
//         div.innerHTML = i + 1;
//         div.setAttribute("onclick", "changeSlide(this)")
//         div.id = i;
//         indc.appendChild(div);
//         if (i == 0) {
//             div.className = "active";
//         }
//     }
// }
// circleIndicator();

//updating the indicator
function updateIndicator() {
    for (let i = 0; i < imgLen; i++) {
        var indc = document.querySelector(".indicator");
        indc.children[i].classList.remove("active");
    }
    indc.children[imgNum].classList.add("active");
}

function changeSlide(ele) {

    for (let i = 0; i < imgLen; i++) {
        var indc = document.querySelector(".indicator");
        indc.children[i].classList.remove("active");
    }
    resetTimer();
    var id = ele.id;
    indc.children[id].classList.add("active");
    document.querySelector("#current").innerHTML = +id + 1;
    prevImg.src = images[id]["path"];
    img.src = images[id]["path"];
    img.alt = images[id]["alt"];
    caption.innerHTML = images[id]["cap"];
    writer.innerHTML = images[id]["writer"];
}


function resetTimer() {
    // when click to indicator or controls button 
    // stop timer 
    clearInterval(timer);

    // then started again timer
    timer = setInterval(autoPlay, 7000);
}

function autoPlay() {
    nextSlide();
    updateIndicator();
}

let timer = setInterval(autoPlay, 5000);



// =============================== jQuery Slider ===========================
$(document).ready(function() {
    $('#pic').change(function() {
        var imgSrc = $(this).attr("src");
        /* $("img:first")
          .fadeOut(0, function () {
            $(this).attr("src", imgSrc);
          })
          .fadeIn(1000); */

        $("#pic")
            .fadeOut(0)
            .queue(function() {
                $("#pic").attr("src", imgSrc).dequeue();
            })
            .fadeIn(1000);
    });

    // $('#pic').hover(
    //     function() {
    //         $(this).stop(true).fadeTo(1000, 0.4);
    //     },
    //     function() {
    //         $(this).fadeTo(1000, 1);
    //     }
    // );
});