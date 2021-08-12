const signupForm = document.querySelector("form.signup_form");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup_link a");
var emailChecker = /^[a-z\.]{3,15}@[a-z0-9]{3,15}\.[a-z]{2,10}$/;
var passChecker = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

//onblur signup form
function newUserEmail(inpEle) {
    var validIcon = document.querySelector("#validNewUser");
    if (inpEle.value !== "") {
        if (!emailChecker.test(inpEle.value)) {
            validIcon.className = "fas fa-times-circle";
            return false;
        } else {
            validIcon.className = "fas fa-check-circle";
        }
    } else {
        validIcon.className = "fas fa-times-circle";
        return false;
    }
}

function newUserPass(inpEle) {
    var validIcon = document.querySelector("#validNewPass");
    if (inpEle.value !== "") {
        if (!passChecker.test(inpEle.value)) {
            validIcon.className = "fas fa-times-circle";
            return false;
        } else {
            validIcon.className = "fas fa-check-circle";
        }
    } else {
        validIcon.className = "fas fa-times-circle";
        return false;
    }
}


//checking password strength
$("#newPass").keyup(function() {
    var dInput = $('#newPass').val();
    if (dInput.length < 6) {
        $("#strength").text("Weak Password");
    } else if (dInput.length > 6) {
        $("#strength").text("Strong Password");
    }
});

$(document).ready(function() {
    //for signup form
    document.querySelector("#signBtn").onclick = checkEmptyfields;

    function checkEmptyfields() {
        var newUser = document.querySelector("#newEmail");
        var newuserPass = document.querySelector("#newPass");
        if (newUser.value == "" || newuserPass.value == "") {
            alert("All fields are required!");
            return false;
        } else {
            alert("Registered");
        }
    }

});