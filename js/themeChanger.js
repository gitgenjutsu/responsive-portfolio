//random color generator
function changeClr() {
    var symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.querySelector("#Themecontent").style.background = color;
    document.querySelector("#hex").innerHTML = color;
}
document.querySelector("#clrBtn").onclick = changeClr;




//color switcher
function redClr() {
    document.querySelector("#Themecontent").style.background = "#FF3031";
}
document.querySelector(".first").onclick = redClr;

function blueClr() {
    document.querySelector("#Themecontent").style.background = "#0A79DF";
}
document.querySelector(".third").onclick = blueClr;

function yellClr() {
    document.querySelector("#Themecontent").style.background = "#F4C724";
}
document.querySelector(".sec").onclick = yellClr;