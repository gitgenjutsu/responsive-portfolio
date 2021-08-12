//1. R - Reading and printing books in a table
var stud = [{
        id: 0,
        name: "Mohd Wasim",
        course: "Web Master",
        address: "Badarpur",
        contact: "9820202020",
        assignment: "Submitted",
        fees: "paid",
    },
    {
        id: 1,
        name: "Shweta Singh",
        course: "Web Premium",
        address: "Dwarka",
        contact: "9820451020",
        assignment: "Submitted",
        fees: "paid",
    },
    {
        id: 2,
        name: "Ritik",
        course: "Web Master",
        address: "Lajpat",
        contact: "9820202545",
        assignment: "Not Submitted",
        fees: "not paid",
    },
    {
        id: 3,
        name: "Amar Kumar",
        course: "Bca",
        address: "Garhi",
        contact: "8495753618",
        assignment: "Not Submitted",
        fees: "paid",
    },
    {
        id: 4,
        name: "Roshni Kumari",
        course: "Graphics",
        address: "Mehrauli",
        contact: "9147302545",
        assignment: "Not Submitted",
        fees: "paid",
    },
    {
        id: 5,
        name: "Anand",
        course: "Mca",
        address: "Badarpur Border",
        contact: "9542472545",
        assignment: "Not Submitted",
        fees: "paid",
    },
    {
        id: 6,
        name: "K. Jyoti",
        course: "Bca",
        address: "Sangam Vihar",
        contact: "9820207355",
        assignment: "Submitted",
        fees: "not paid",
    },
];


//populating students in a table
function printTable(foundData = stud) {
    var data = "";
    // console.log(foundData.length);
    for (let i = 0; i < foundData.length; i++) {

        data += `<tr>
        <th>${i + 1}</th>
        <td>${foundData[i]["name"]}</td>
        <td>${foundData[i]["course"]}</td>
        <td>${foundData[i]["address"]}</td>
        <td>${foundData[i]["contact"]}</td>
        <td>
            <button  class="editBtn" onClick="onEdit(${foundData[i]["id"]})">Edit</button>
            <button  class="viewBtn" onClick="onView(${foundData[i]["id"]})">View</button>
            <button  class="deleteBtn" onClick="onDelete(${foundData[i]["id"]})" >Delete</button>
        </td>
    </tr>`;

    }
    if (data === "") {
        data = `<tr><h2 class="noRecFound">Students record not found!</h2</tr>`;
    }
    document.querySelector("#tableBody").innerHTML = data;

}
printTable();



//3. D - Deleting  Specific Students
function onDelete(s_id) {
    // let studentName = stud[s_id]["name"];
    console.log(s_id);
    let index = s_id;
    if (confirm((index + 1) + " .Are you sure, you want delete data of " + stud[s_id]["name"] + " ?")) {
        stud.splice(s_id, 1);
        console.log(s_id);
    }
    printTable();

}



















//show suggestion
function showSuggestion() {
    var sugBox = document.querySelector("#inputSugg");
    document.querySelector("#searchData").onkeyup = searchStud;

    //search student
    function searchStud() {
        // console.log("typing");
        // sugBox.className = "inputSuggestion";
        var searchVal = this.value;
        var dataFound = [];
        var arrayLen = stud.length;
        for (i = 0; i < arrayLen; i++) {
            if ((stud[i]["name"].toLowerCase().indexOf(searchVal.toLowerCase()) === 0) ||
                (stud[i]["course"].toLowerCase().indexOf(searchVal.toLowerCase()) === 0) ||
                (stud[i]["address"].toLowerCase().indexOf(searchVal.toLowerCase()) === 0) ||
                (stud[i]["contact"].toLowerCase().indexOf(searchVal.toLowerCase()) === 0) ||
                (stud[i]["assignment"].toLowerCase().indexOf(searchVal.toLowerCase()) === 0) ||
                (stud[i]["fees"].toLowerCase().indexOf(searchVal.toLowerCase()) === 0)
            ) {
                dataFound.push(stud[i]);
            }
        }
        // printTable(dataFound);
        showSugg(dataFound);
    }
}

//populating students in a suggestion
function showSugg(newData = stud) {
    var data = "";
    let i = 0;
    var sugData = [];
    var resultBox = document.querySelector("#inputSugg");

    while (i < newData.length) {
        data += `${newData[i]["name"]}<br>`;
        // resultBox.innerHTML = data;
        sugData.push(newData[i]);
        // document.querySelector("#inputSugg").onclick = check;

        // function check() {
        printTable(sugData);
        // hideSuggestion();
        // }


        i++;
    }
    if (data === "") {
        data = `Students record not found!`;
    }
    // document.querySelector("#inputSugg").innerHTML = data;

}





//hide suggestion
function hideSuggestion() {
    document.querySelector("#searchData").value = "";
    document.querySelector("#inputSugg").style.display = "none";
}



//2. C - ADDING NEW STUDENTS

//selecting form elements
// let studID = document.querySelector("#stud_id");
let stud_name = document.querySelector("#stud_name");
let course = document.querySelector("#course");
let address = document.querySelector("#address");
let contact = document.querySelector("#contact");
let newStud;
let assign = document.getElementsByName("assignment");
let fees = document.getElementsByName("fees");
let alphaNum = /\d/;

//add student function
function addStud() {
    // studIdVal = studID.value;
    nameVal = stud_name.value;
    courseVal = course.value;
    addressVal = address.value;
    contactVal = contact.value;

    submitVal = assign[0].value;
    notSubmitVal = assign[1].value;

    feesSubmitVal = fees[0].value;
    feesNotSubmitVal = fees[1].value;

    let errors = 0;

    //checking for empty values
    // if (studIdVal == "") {
    //     errors++;
    // } else if (!alphaNum.test(studIdVal)) {
    //     alert("Invalid User ID!");
    //     errors++;
    // }

    if (nameVal == "") {
        errors++;
    } else if (alphaNum.test(nameVal)) {
        alert("Invalid User Name!");
        errors++;
    }
    if (courseVal == "") {
        errors++;
    } else if (alphaNum.test(courseVal)) {
        alert("Invalid Course Name!");
        errors++;
    }

    if (addressVal == "") {
        errors++;
    }
    if (contactVal == "") {
        errors++;
    }
    if (!fees[0].checked && !fees[1].checked) {
        errors++;
    }
    if (!assign[0].checked && !assign[1].checked) {
        errors++;
    }

    // console.log(errors);
    if (errors === 0) {
        //checking for duplicate students
        let studFound = false;
        let invalidnum = false;

        for (const key in stud) {
            if (stud[key]["contact"] === contactVal) {
                studFound = true;
                break;
            }
        }


        //checking if valid contact value
        if (isNaN(contactVal)) {
            invalidnum = true;
        }

        //adding a students if unique
        if (!studFound) {
            //adding a student if contact value is correct
            if (!invalidnum) {
                pushStud();
            } else {
                alert("Invalid Mobile number!");
            }
        } else {
            alert("This Student is already enrolled!");
        }


    } else {
        alert("All fields are requierd");
    }
    //pushing new students details to the array
    function pushStud() {
        // alert(feesSubmitVal | feesNotSubmitVal);
        studIdVal = stud.length;
        if ((assign[0].checked && !assign[1].checked)) {
            if (fees[0].checked && !fees[1].checked) {
                newStud = {
                    id: studIdVal,
                    name: nameVal,
                    course: courseVal,
                    address: addressVal,
                    contact: contactVal,
                    assignment: submitVal,
                    fees: feesSubmitVal
                };
            } else {
                newStud = {
                    id: studIdVal,
                    name: nameVal,
                    course: courseVal,
                    address: addressVal,
                    contact: contactVal,
                    assignment: submitVal,
                    fees: feesNotSubmitVal
                };
            }
        }

        // || assign[1].checked
        else if ((!assign[0].checked && assign[1].checked)) {
            if (!fees[0].checked && fees[1].checked) {
                newStud = {
                    id: studIdVal,
                    name: nameVal,
                    course: courseVal,
                    address: addressVal,
                    contact: contactVal,
                    assignment: notSubmitVal,
                    fees: feesNotSubmitVal
                };
            } else {
                newStud = {
                    id: studIdVal,
                    name: nameVal,
                    course: courseVal,
                    address: addressVal,
                    contact: contactVal,
                    assignment: notSubmitVal,
                    fees: feesSubmitVal
                };
            }
        }

        stud.push(newStud);
        printTable();
        resetForm();
        hideForm();
    }
}
document.querySelector("#addStud").onclick = addStud;

//resetting form
function resetForm() {
    stud_name.value = course.value = address.value = contact.value = "";
    // studID.value =
    // document.querySelector("#nameError").innerHTML = "";
    // document.querySelector("#courseError").innerHTML = "";
    // document.querySelector("#addressError").innerHTML = "";
    // document.querySelector("#contactError").innerHTML = "";
    // document.querySelector("#assignmentError").innerHTML = "";
    // document.querySelector("#feesError").innerHTML = "";
    document.getElementsByName("assignment")[0].checked = false;
    document.getElementsByName("assignment")[1].checked = false;
    document.getElementsByName("fees")[0].checked = false;
    document.getElementsByName("fees")[1].checked = false;

}
document.querySelector("#resetForm").onclick = resetForm;







//4. U - editing students details
function onEdit(s_id) {
    studPopup();
    let studToUpdate = stud[s_id];

    //matching the s.no of edit & update btn 
    document.querySelector("#updateDetails").dataset.student = s_id;
    var assignmentValEdit = studToUpdate.assignment;
    var feesValEdit = studToUpdate.fees;

    //showing values in form
    // document.querySelector("#stud_id").value = studToUpdate.id;
    document.querySelector("#stud_name").value = studToUpdate.name;
    document.querySelector("#course").value = studToUpdate.course;
    document.querySelector("#address").value = studToUpdate.address;
    document.querySelector("#contact").value = studToUpdate.contact;

    document.getElementsByName("assignment")[0] = assignmentValEdit;
    document.getElementsByName("fees")[0] = feesValEdit;

    if (assignmentValEdit === "Submitted") {
        document.getElementsByName("assignment")[0].checked = true;
        if (feesValEdit === "paid") {
            document.getElementsByName("fees")[0].checked = true;
        } else {
            document.getElementsByName("fees")[1].checked = true;
        }

    } else if (assignmentValEdit !== "Submitted") {
        // console.log("assign not submit");
        document.getElementsByName("assignment")[1].checked = true;
        if (feesValEdit === "paid") {
            document.getElementsByName("fees")[0].checked = true;
            // console.log("fees paid");
        } else {
            // console.log("fees not paid");
            document.getElementsByName("fees")[1].checked = true;
        }
    }


    //edit & update the table data
    function updateDetails() {
        let studToUpdate = stud[this.dataset.student];
        // studToUpdate.id = document.querySelector("#stud_id").value;
        studToUpdate.name = document.querySelector("#stud_name").value;
        studToUpdate.course = document.querySelector("#course").value;
        studToUpdate.address = document.querySelector("#address").value;
        studToUpdate.contact = document.querySelector("#contact").value;

        if ((assign[0].checked && !assign[1].checked)) {
            // console.log("first");
            studToUpdate.assignment = assign[0].value;
            if (fees[0].checked && !fees[1].checked) {
                // console.log("second");
                studToUpdate.fees = fees[0].value;
            } else {
                // console.log("third");
                studToUpdate.fees = fees[1].value;
            }
        } else if ((!assign[0].checked && assign[1].checked)) {
            // console.log("fourth");
            studToUpdate.assignment = assign[1].value;
            if (!fees[0].checked && fees[1].checked) {
                // console.log("fifth");
                studToUpdate.fees = fees[1].value;
            } else {
                // console.log("sixth");
                studToUpdate.fees = fees[0].value;
            }
        }
        printTable();
        alert("Details Updated Succesfully");
        hideForm();
        resetForm();
    }

    document.querySelector("#updateDetails").onclick = updateDetails;

}

//view more details 
function onView(s_id) {
    document.querySelector("#modal").className = "showModal";

    let studToView = stud[s_id];
    document.querySelector(".assign_info").innerHTML = "Assignment " + studToView.assignment + " and " + " Fees " + studToView.fees + " by " + studToView.name;
}


function closeModal() {
    document.querySelector("#modal").className = "hideModal";
}

document.querySelector("#addStudPopup").onclick = studPopup;

function studPopup() {
    resetForm();
    document.querySelector("#addNewStud").className = "showaddStudModal";
    document.querySelector(".popUp").className = "popUp showaddStudModal";
}

document.querySelector("#close_form").onclick = hideForm;

function hideForm() {
    document.querySelector(".popUp").className = "popUp hideModal";
}
window.onresize = popForm;

function popForm() {
    var myModal = document.querySelector("#addNewStud");
    var wWidth = window.innerWidth / 2;
    var wHeight = window.innerHeight / 2;
    myModal.style.left = wWidth - 550 / 2 + "px";
    myModal.style.top = wHeight - 700 / 2 + "px";
}
popForm();