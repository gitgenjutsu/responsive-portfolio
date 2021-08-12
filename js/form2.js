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
    var totalErrors = "";



    if (userFirstName == "") {
        errors++;
        totalErrors += +errors + ". Enter Your First Name\n";

    } else if (digitChecker.test(userFirstName)) {
        errors++;
        totalErrors += +errors + ". Numbers not allowed in Name\n";

    }

    if (userLastName == "") {
        errors++;
        totalErrors += +errors + ". Enter Your Last Name\n";
    } else if (digitChecker.test(userLastName)) {
        errors++;
        totalErrors += +errors + ". Numbers not allowed in Name\n";

    }

    if (userEmail !== "") {
        if (!emailChecker.test(userEmail)) {
            errors++;
            totalErrors += +errors + ". Invalid Email\n";
        }
    } else {
        errors++;
        totalErrors += +errors + ". Enter Your Email Id\n";
    }

    if (userNum !== "") {
        if (isNaN(userNum)) {
            errors++;
            totalErrors += +errors + ". Enter a valid Number\n";
        }
    } else {
        errors++;
        totalErrors += +errors + ". Enter Your Contact Number\n";
    }

    //for gender
    if (!gender[0].checked && !gender[1].checked) {
        errors++;
        totalErrors += +errors + ". Please select your Gender\n";
    }

    //for cities
    if (city.selectedIndex < 1) {
        errors++;
        totalErrors += +errors + ". Please Select Your City\n";
    }

    //for message
    if (userMsg == "") {
        errors++;
        totalErrors += +errors + ". Please write your msg\n";
    }


    //for terms & cond.
    if (!terms.checked) {
        errors++;
        totalErrors += +errors + ". Please accept terms & condt.\n";
    }


    if (errors === 0) {
        alert("Submitted");
    } else {
        alert(totalErrors);
    }

}
document.querySelector("#send").onclick = ValidationOfForm;