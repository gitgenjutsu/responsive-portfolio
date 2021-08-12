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




function ValidationOfForm() {
    var userFirstName = firstName.value;
    var userLastName = lastName.value;
    var userEmail = email.value;
    var userNum = number.value;
    var userMsg = msg.value;
    var errors = 0;
    var allErrors = "Errors found: <br/>";



    if (userFirstName !== "") {
        if (digitChecker.test(userFirstName)) {
            errors++;
            allErrors += errors + " .Numbers not allowed in Name<br/>";
        }
    } else {
        errors++;
        allErrors += errors + " .Enter Your First Name<br/>";
    }

    if (userLastName !== "") {
        if (digitChecker.test(userLastName)) {
            errors++;
            allErrors += errors + " .Numbers not allowed in Name<br/>";
        }
    } else {
        errors++;
        allErrors += errors + " .Enter Your Last Name<br/>";
    }

    if (userEmail !== "") {
        if (!emailChecker.test(userEmail)) {
            errors++;
            allErrors += errors + " .Invalid Email<br/>";
        }
    } else {
        errors++;
        allErrors += errors + " .Enter Your Email Id<br/>";
    }

    if (userNum !== "") {
        if (isNaN(userNum)) {
            errors++;
            allErrors += errors + " .Enter a valid Number<br/>";
        }
    } else {
        errors++;
        allErrors += errors + " .Enter Your Contact Number<br/>";
    }
    //for gender
    if (!gender[0].checked && !gender[1].checked) {
        errors++;
        allErrors += errors + " .Please select your Gender<br/>";
    }

    //for cities
    if (city.selectedIndex < 1) {
        errors++;
        allErrors += errors + " .Please Select Your City<br/>";
    }

    if (userMsg == "") {
        errors++;
        allErrors += errors + " .Please write something in message box<br/>";
    }

    //for terms & cond.
    if (!terms.checked) {
        errors++;
        allErrors += errors + " .Please select terms & cond.<br/>";
    } else {
        document.querySelector("#checkboxError").style.color = "#111";
    }

    if (errors === 0) {
        document.querySelector("#allErrors").innerHTML = "Data is Valid";
    } else {
        document.querySelector("#allErrors").innerHTML = allErrors;
    }

}
document.querySelector("#send").onclick = ValidationOfForm;