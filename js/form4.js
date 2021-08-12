var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var email = document.querySelector("#email");
var number = document.querySelector("#num");
var msg = document.querySelector("#msg");
var city = document.querySelector("#city");
var terms = document.querySelector("#checkbox");
var gender = document.getElementsByName("gender");
var digitChecker = /\d/;
var emailChecker = /^[a-z\.]{3,15}@[a-z0-9]{3,15}\.[a-z]{2,10}$/;
//^[a-z] contains alphabets from a to z
//. is a meta character to avoid it's meta value we used \ before .
//$ is end of the expression
//{3,15} here, 3 is min vale 15 max value for ^[a-z]
document.querySelector("#checkboxError").style.color = "#111";




function ValidationOfForm() {
    var userFirstName = firstName.value;
    var userLastName = lastName.value;
    var userEmail = email.value;
    var userNum = number.value;
    var userMsg = msg.value;

    if (userFirstName == "" || userLastName == "" || userEmail == "" || userNum == "" || userMsg == "" || city.selectedIndex < 1 || !terms.checked || !gender[0].checked && !gender[1].checked) {
        alert("All Fields are required!");
    } else {
        alert("Submitted");
    }
}
document.querySelector("#send").onclick = ValidationOfForm;


function firstNameFocus(inpEle) {
    var userFirstName = firstName.value;
    var errorEle = document.querySelector("#firstNameError");
    if (inpEle.value !== "") {
        errorEle.innerHTML = "";
        if (digitChecker.test(userFirstName)) {
            errorEle.innerHTML = "Numbers not allowed in first name";
        } else {
            errorEle.innerHTML = "";
        }
    } else {
        errorEle.innerHTML = "Please enter your first name";
    }
}


function lastNameFocus(inpEle) {
    var userLastName = lastName.value;
    var errorEle = document.querySelector("#lastNameError");
    if (inpEle.value !== "") {
        errorEle.innerHTML = "";
        if (digitChecker.test(userLastName)) {
            errorEle.innerHTML = "Numbers not allowed in last name";
        } else {
            errorEle.innerHTML = "";
        }
    } else {
        errorEle.innerHTML = "Please enter your last name";
    }
}

function emailFocus(inpEle) {
    var errorEle = document.querySelector("#emailError");
    if (inpEle.value !== "") {
        errorEle.innerHTML = "";
        if (!emailChecker.test(inpEle.value)) {
            errorEle.innerHTML = "Invalid email given.";
        } else {
            errorEle.innerHTML = "";
        }
    } else {
        errorEle.innerHTML = "Please enter your email id";
    }
}

function numFocus(inpEle) {
    var userNum = number.value;
    var errorEle = document.querySelector("#contactError");
    if (inpEle.value !== "") {
        errorEle.innerHTML = "";
        if (isNaN(userNum)) {
            errorEle.innerHTML = "Invalid Contact Number";
        } else {
            errorEle.innerHTML = "";
        }
    } else {
        errorEle.innerHTML = "Please enter your Number";
    }
}

function msgFocus(inpEle) {
    var errorEle = document.querySelector("#msgSpan");
    if (inpEle.value !== "") {
        errorEle.innerHTML = "";
    } else {
        errorEle.innerHTML = "Please write your msg here";
    }
}