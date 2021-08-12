//1. R - Reading and printing books in a table
var stud = [{
        name: "Mohd Wasim",
        course: "Web Master",
        address: "Badarpur",
        contact: "9820202020",
    },
    {
        name: "Shweta Singh",
        course: "Web Premium",
        address: "Dwarka",
        contact: "9820451020",
    },
    {
        name: "Ritik",
        course: "Web Master",
        address: "Lajpat",
        contact: "9820202545",
    },
    {
        name: "Amar",
        course: "BCA",
        address: "Lajpat Nagar",
        contact: "9820202545",
    },
    {
        name: "Akshay",
        course: "BCA",
        address: "Lajpat Nagar Market",
        contact: "9820202545",
    },
    {
        name: "Roshni",
        course: "MCA",
        address: "Mehrouli",
        contact: "9820202545",
    },
];





//populating students in a table
function printTable() {
    var data = "";
    let i = 0;
    while (i < stud.length) {
        const element = stud[i];

        data += `<tr><td>${i + 1}</td><td>${element.name}</td><td>${
            element.course
          }</td><td>${
            element.address
          }</td><td>${
            element.contact
            }</td></tr>`;
        i++;
    }
    document.querySelector("#tableBody").innerHTML = data;

}

printTable();



//shuffle array
function shuffleArray() {
    let arrayShuffle = function(arr) {
        let newPos, temp;
        for (let i = 0; i < arr.length; i++) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[newPos];
            arr[newPos] = temp;
        }
        return arr;
    };
    arrayShuffle(stud);
    printTable();
}