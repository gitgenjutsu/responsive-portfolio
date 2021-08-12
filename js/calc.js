var firstNum = document.querySelector("#num1");
var secondNum = document.querySelector("#num2");


function valid() {
    firstVal = firstNum.value;
    secondVal = secondNum.value;

    if (firstVal === "") {
        alert("First num Can't be empty!");
    }
    if (secondVal === "") {
        alert("Second num Can't be empty!");
    }

}

function addVal() {
    firstVal = firstNum.value;
    secondVal = secondNum.value;
    valid();

    if ((isNaN(firstVal)) || (isNaN(secondVal))) {
        alert("Not a valid number!");
    } else {
        total = +firstVal + +secondVal;
        document.querySelector("#output").value = total;
    }

}

function subVal() {
    valid();
    firstVal = firstNum.value;
    secondVal = secondNum.value;

    if ((isNaN(firstVal)) || (isNaN(secondVal))) {
        alert("Not a valid number!");
    } else {
        total = firstVal - secondVal;
        document.querySelector("#output").value = total;
    }
}

function mulVal() {
    valid();
    firstVal = firstNum.value;
    secondVal = secondNum.value;
    if ((isNaN(firstVal)) || (isNaN(secondVal))) {
        alert("Not a valid number!");
        valid();
    } else {
        total = firstVal * secondVal;
        document.querySelector("#output").value = total;
    }
}


function divVal() {
    valid();
    firstVal = firstNum.value;
    secondVal = secondNum.value;
    if ((isNaN(firstVal)) || (isNaN(secondVal))) {
        alert("Not a valid number!");
    } else {
        total = firstVal / secondVal;
        document.querySelector("#output").value = total;
    }
}



document.querySelector("#reset").onclick = reset;


function reset() {
    console.log("call");
    document.querySelector("#output").value = "";
    firstNum.value = "";
    secondNum.value = "";
}