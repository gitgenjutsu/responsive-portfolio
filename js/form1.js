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
    var errors = 0;



    if (userFirstName == "") {
        document.querySelector("#firstNameError").innerHTML = "Enter Your First Name";
        errors++;

    } else if (digitChecker.test(userFirstName)) {
        document.querySelector("#firstNameError").innerHTML = "Numbers not allowed in Name";
        errors++;

    } else {
        document.querySelector("#firstNameError").innerHTML = "";
    }

    if (userLastName == "") {
        document.querySelector("#lastNameError").innerHTML = "Enter Your Last Name";
        errors++;
    } else if (digitChecker.test(userLastName)) {
        document.querySelector("#lastNameError").innerHTML = "Numbers not allowed in Name";
        errors++;

    } else {
        document.querySelector("#lastNameError").innerHTML = "";
    }

    if (userEmail !== "") {
        document.querySelector("#emailError").innerHTML = "";
        if (!emailChecker.test(userEmail)) {
            document.querySelector("#emailError").innerHTML = "Invalid Email";
            errors++;
        }
    } else {
        document.querySelector("#emailError").innerHTML = "Enter Your Email Id";
        errors++;
    }

    if (userNum !== "") {
        if (isNaN(userNum)) {
            document.querySelector("#contactError").innerHTML = "Enter a valid Number";
            errors++;
        } else {
            document.querySelector("#contactError").innerHTML = "";
        }
    } else {
        document.querySelector("#contactError").innerHTML = "Enter Your Contact Number";
        errors++;
    }

    if (userMsg !== "") {
        document.querySelector("#msgSpan").innerHTML = "";
    } else {
        document.querySelector("#msgSpan").innerHTML = "Please say hello to me";
        errors++;
    }

    //for cities
    if (city.selectedIndex < 1) {
        document.querySelector(".cityError").style.color = "#f00";
        document.querySelector("#cityError").innerHTML = "Please Select Your City";
        errors++;
    } else {
        document.querySelector(".cityError").style.color = "#111";
    }

    //for terms & cond.
    if (!terms.checked) {
        document.querySelector("#checkboxError").style.color = "#f00";
        errors++;
    } else {
        document.querySelector("#checkboxError").style.color = "#111";
    }

    //for gender
    if (!gender[0].checked && !gender[1].checked) {
        document.querySelector("#genderError").innerHTML = "Please select your Gender";
        errors++;
    } else {
        document.querySelector("#genderError").innerHTML = "";
    }

    if (errors === 0) {
        alert("Submitted");
    }

}
document.querySelector("#send").onclick = ValidationOfForm;