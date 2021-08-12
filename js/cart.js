var cartIcon = document.querySelectorAll(".shoppingCart");
var numofItems = document.querySelector(".sup");
var itemCount = 1;
var iconsLen = cartIcon.length;
for (i = 0; i < iconsLen; i++) {
    cartIcon[i].onclick = function() {
        numofItems.innerHTML = itemCount;
        itemCount++;
    }
}

var itemsVal = document.querySelector("#itemVal");
var addItems = document.querySelector(".add-btn");
var reduceItems = document.querySelector(".reduce-btn");

function validItems(ele) {
    if (ele.value > 5 || ele.value == 0) {
        ele.value = 5;
    }
}

addItems.onclick = function() {
    if (itemsVal.value < 5) {
        itemsVal.value++;
    }
}
reduceItems.onclick = function() {
    if (itemsVal.value > 1) {
        itemsVal.value--;
    }
}