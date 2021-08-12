var products = [{
        imgSrc: "img/grid12.jpg",
        alt: "not found",
        class: "img-fluid"
    },
    {
        imgSrc: "img/grid16.jpg",
        alt: "not found",
        class: "img-fluid"
    },
    {
        imgSrc: "img/grid10.jpg",
        alt: "not found",
        class: "img-fluid"
    },
]



//generating items in cart
function dynamicDiv() {

    // console.log("call");
    var allprodDiv = document.querySelector(".productsinCart");
    // console.log(allprodDiv);

    var cartitemBody = document.createElement("div");
    // console.log(cartitemBody);

    allprodDiv.appendChild(cartitemBody);
    cartitemBody.className = "cart-item-body";

    var cDiv = document.createElement("div");
    cartitemBody.appendChild(cDiv);
    // console.log(cDiv);

    var anchorTag = document.createElement("a");
    // console.log(anchorTag);

    cDiv.appendChild(anchorTag);
    anchorTag.href = "cart.html";
    // console.log(anchorTag.href);

    var prodImg = document.createElement("img");
    // console.log(prodImg);

    anchorTag.appendChild(prodImg);
    prodImg.className = products[0]["class"];
    // console.log(prodImg.className);
    prodImg.src = products[0]["imgSrc"];
    // console.log(prodImg.src);

    var itemCounterDiv = document.createElement("div");
    cDiv.appendChild(itemCounterDiv);
    itemCounterDiv.className = "item-counter";

    var itemsDiv = document.createElement("div");
    itemCounterDiv.appendChild(itemsDiv);
    itemsDiv.className = "items d-flex justify-content-between";

    var reduceBtn = document.createElement("button");
    itemsDiv.appendChild(reduceBtn);
    reduceBtn.className = "reduce-btn";
    reduceBtn.innerHTML = "-";
    // reduceBtn.onclick = "reduceItems()";

    var inputboxDiv = document.createElement("div");
    itemsDiv.appendChild(inputboxDiv);
    inputboxDiv.className = "inputbox";

    var inputTag = document.createElement("input");
    inputboxDiv.appendChild(inputTag);
    inputTag.type = "text";
    inputTag.value = "1";
    inputTag.maxLength = "1";
    inputTag.min = "1";
    inputTag.max = "5";
    inputTag.id = "itemVal";
    // inputTag.onblur = "validItems(this)";
    // console.log(inputTag.onblur);

    var additemsBtn = document.createElement("button");
    itemsDiv.appendChild(additemsBtn);
    additemsBtn.className = "add-btn";
    additemsBtn.innerHTML = "+";

    //text starts
    var textDiv = document.createElement("div");
    cartitemBody.appendChild(textDiv);
    textDiv.className = "text";

    var h3Tag = document.createElement("h3");
    textDiv.appendChild(h3Tag);
    h3Tag.innerHTML = "Short Skirts";

    var pTag = document.createElement("p");
    textDiv.appendChild(pTag);
    pTag.innerHTML = "Size: ";

    var selectTag = document.createElement("select");
    pTag.appendChild(selectTag);
    selectTag.name = "size";
    selectTag.id = "selectSize";

    var option1ofSelect = document.createElement("option");
    selectTag.appendChild(option1ofSelect);
    option1ofSelect.value = "Large";
    option1ofSelect.innerHTML = "Large";

    var option2ofSelect = document.createElement("option");
    selectTag.appendChild(option2ofSelect);
    option2ofSelect.value = "Med";
    option2ofSelect.innerHTML = "Med";

    var option3ofSelect = document.createElement("option");
    selectTag.appendChild(option3ofSelect);
    option3ofSelect.value = "Small";
    option3ofSelect.innerHTML = "Small";

    var p2Tag = document.createElement("p");
    textDiv.appendChild(p2Tag);
    p2Tag.innerHTML = "Category: Skirt";

    var priceDiv = document.createElement("div");
    textDiv.appendChild(priceDiv);

    var delTag = document.createElement("del");
    priceDiv.appendChild(delTag);

    var spanTagofDel = document.createElement("span");
    delTag.appendChild(spanTagofDel);

    spanTagofDel.style = "color: rgb(112, 108, 108)";
    spanTagofDel.innerHTML = "₹739";

    var spanofDiv = document.createElement("span");
    priceDiv.appendChild(spanofDiv);
    spanofDiv.className = "font-weight-bold mx-2";
    spanofDiv.innerHTML = "₹539";

    var saveorRemDiv = document.createElement("div");
    textDiv.appendChild(saveorRemDiv);
    saveorRemDiv.className = "d-flex justify-content-between mt-5";

    var saveforLater = document.createElement("div");
    saveorRemDiv.appendChild(saveforLater);
    saveforLater.className = "saveforLater";

    var aTagofsave = document.createElement("a");
    saveforLater.appendChild(aTagofsave);
    aTagofsave.href = "#";

    var h3ofsave = document.createElement("h3");
    aTagofsave.appendChild(h3ofsave);
    h3ofsave.className = "text-uppercase font-weight-bold";
    h3ofsave.innerHTML = "Move to wishlist";

    var removeItemDiv = document.createElement("div");
    saveorRemDiv.appendChild(removeItemDiv);
    removeItemDiv.className = "remove ml-5";

    var aTagofsave = document.createElement("a");
    removeItemDiv.appendChild(aTagofsave);
    aTagofsave.href = "#";

    var h3ofremove = document.createElement("h3");
    aTagofsave.appendChild(h3ofremove);
    h3ofremove.className = "text-uppercase font-weight-bold";
    h3ofremove.innerHTML = "Remove";

    var deliveryDiv = document.createElement("div");
    cartitemBody.appendChild(deliveryDiv);
    deliveryDiv.className = "delivery";

    var h3ofdelivery = document.createElement("h3");
    deliveryDiv.appendChild(h3ofdelivery);
    h3ofdelivery.innerHTML = "Delivery by Tue Jun 16 | ";

    var spanofdelivery = document.createElement("span");
    h3ofdelivery.appendChild(spanofdelivery);
    spanofdelivery.className = "text-success";
    spanofdelivery.innerHTML = "Free";

}
dynamicDiv();





//max 5 items purchase limit
var itemsVal = document.querySelector("#itemVal");

var addItems = document.querySelector(".add-btn");
var reduceItems = document.querySelector(".reduce-btn");
// console.log(reduceItems);

function validItems(ele) {
    if (ele.value > 5 || ele.value == 0) {
        ele.value = 5;
    }
}
// console.log(itemsVal.value);
addItems.onclick = function() {
    // console.log("add");
    if (itemsVal.value < 5) {
        itemsVal.value++;
    }
}
reduceItems.onclick = function() {
    if (itemsVal.value > 1) {
        itemsVal.value--;
    }
}