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
//{3,15} here, 3 is min value 15 max value for ^[a-z]





function ValidationOfForm() {
    var userFirstName = firstName.value;
    var userLastName = lastName.value;
    var userEmail = email.value;
    var userNum = number.value;
    var userMsg = msg.value;
    var errors = 0;


    if (userFirstName == "" || userLastName == "" || userEmail == "" || userNum == "" || userMsg == "" || city.selectedIndex < 1 || !terms.checked || !gender[0].checked && !gender[1].checked) {
        alert("All fields are required!");
        errors++;

    }

    if (errors === 0) {
        alert("Submitted");
    }
}
document.querySelector("#send").onclick = ValidationOfForm;


//onblur contact form
function firstuserName(inpEle) {
    var validIcon = document.querySelector("#validFirstName");
    if (inpEle.value !== "") {
        if (digitChecker.test(inpEle.value)) {
            validIcon.className = "fas fa-times-circle";
        } else {
            validIcon.className = "fas fa-check-circle";
        }
    } else {
        validIcon.className = "fas fa-times-circle";
    }
}

function lastuserName(inpEle) {
    var validIcon = document.querySelector("#validLastName");
    if (inpEle.value !== "") {
        if (digitChecker.test(inpEle.value)) {
            validIcon.className = "fas fa-times-circle";
        } else {
            validIcon.className = "fas fa-check-circle";
        }
    } else {
        validIcon.className = "fas fa-times-circle";
    }
}

function userEmail(inpEle) {
    var validIcon = document.querySelector("#validUserEmail");
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

function validContact(inpEle) {
    var validIcon = document.querySelector("#validNumber");
    if (inpEle.value !== "") {
        if (isNaN(inpEle.value)) {
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