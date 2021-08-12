//Theme Changer
document.querySelector("#jumpMenu").onchange = function() {
        var optInd = this.selectedIndex;
        var optVal = this.options[optInd].value;
        var body = document.getElementsByTagName("body")[0];
        body.className = optVal;
    }
    //theme saver
var getLs = window.localStorage.getItem("class");
var body = document.getElementsByTagName("body")[0];
body.className = getLs;