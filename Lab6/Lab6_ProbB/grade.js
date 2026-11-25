// Error 1  (grade.html, Line 9):  checkMark() change to return checkMark()
// Error 2  (grade.html, Line 17): showtable() change to showTable()
// Error 3  (grade.html, Line 19): grades.js change to grade.js
// Error 4  (grade.js, Line 5):    = change to ===
// Error 5  (grade.js, Line 9):    isNan change to isNaN
// Error 6  (grade.js, Line 14):   && change to ||
// Error 7  (grade.js, Line 28):   getElementByID change to getElementById
// Error 8  (grade.js, Line 30):   colour change to color
// Error 9  (grade.js, Line 31):   return true change to return false
// Error 10 (grade.js, Line 38):   i = 1 change to i = 0
// Error 11 (grade.js, Line 42):   innerHtml change to innerHTML

function checkMark() {
    let name = document.forms["gradeForm"]["name"].value.trim();
    let mark = document.forms["gradeForm"]["mark"].value.trim();

    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }
    // check for an empty mark (isNaN("") is false, so it must be checked first)
    if (mark === "") {
        alert("Mark field cannot be empty.");
        return false;
    }
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }
    mark = parseInt(mark);
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }
    let grade;
    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 65) {
        grade = "B";
    } else if (mark >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }
    let result = document.getElementById("result");
    result.innerHTML = name + " got grade " + grade;

    // result color depends on the grade
    if (grade === "A" || grade === "B") {
        result.style.color = "green";
    } else if (grade === "C") {
        result.style.color = "orange";
    } else {
        result.style.color = "red";
    }

    // show the date and time the grade was checked
    document.getElementById("checkedTime").innerHTML = "Checked on: " + Date();

    return false;  // keep the result on the page
}

function showTable() {
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];
    // header row so the table header can be styled
    let tableHTML = "<table><tr><th>Grade</th><th>Range</th></tr>";
    for (let i = 0; i < grades.length; i++) {
        tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
    }
    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
}

// put a random whole number from 0 to 100 into the mark field
function randomMark() {
    document.getElementById("mark").value = Math.floor(Math.random() * 101);
}