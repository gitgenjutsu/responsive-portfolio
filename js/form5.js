const loginForm = document.querySelector("form.form");
const signupForm = document.querySelector("form.signup_form");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup_link a");
const loginText = document.querySelector(".title_text .login");
var emailChecker = /^[a-z\.]{3,15}@[a-z0-9]{3,15}\.[a-z]{2,10}$/;
var passChecker = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


//for login form

document.querySelector("#logBtn").onclick = checkEmptyVal;

function checkEmptyVal() {
    var user = document.querySelector("#regEmail");
    var pass = document.querySelector("#regPass");
    if (user.value == "" || pass.value == "") {
        alert("All fields are required!");
        return false;
    } else {
        alert("Logged in successfully");
    }
}

//onBlur login form
function emailFocus(inpEle) {
    var validIcon = document.querySelector("#validEmail");
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

function passFocus(inpEle) {
    var validIcon = document.querySelector("#validPass");
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

//for signup form
document.querySelector("#signBtn").onclick = checkEmptyfields;

function checkEmptyfields() {
    var newUser = document.querySelector("#newEmail");
    var newuserPass = document.querySelector("#newPass");
    var cnfpass = document.querySelector("#cnfPass");
    if (newUser.value == "" || newuserPass.value == "" || cnfpass.value == "") {
        alert("All fields are required!");
        return false;
    } else {
        alert("Registered");
    }
}


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

function confirmPass(inpEle) {
    var newPass = document.querySelector("#newPass");
    var cnfPass = document.querySelector("#cnfPass");
    var validIcon = document.querySelector("#validConfPass");

    if (inpEle.value !== "") {
        if (passChecker.test(inpEle.value)) {
            if (newPass.value === cnfPass.value) {
                validIcon.className = "fas fa-check-circle";
            } else {
                validIcon.className = "fas fa-times-circle";
                alert("Password didn't matched!");
                return false;
            }
        }
    } else {
        validIcon.className = "fas fa-times-circle";
        return false;
    }
}


//sliding login & signup form
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() => {
    signupBtn.click();
});




window.onresize = popFormCenter;

function popFormCenter() {
    var myModal = document.querySelector(".contact_box");
    var wWidth = window.innerWidth / 2;
    var wHeight = window.innerHeight / 2;
    myModal.style.left = wWidth - 1300 / 2 + "px";
    myModal.style.top = wHeight - 680 / 2 + "px";
}

function popForm() {
    var myModal = document.querySelector(".contact_box");
    var wWidth = window.innerWidth / 2;
    var wHeight = window.innerHeight / 2;
    myModal.style.left = wWidth - 1050 / 2 + "px";
    myModal.style.top = wHeight - 680 / 2 + "px";
}
popForm();