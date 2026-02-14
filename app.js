let name = "Jeremy";
let score = 89;
let grade = "b";
let age = 21;
// My listed Variables, I figured out how to display results on html too :)

let upperGrade = grade.toUpperCase();   // String Method 

let roundedScore = score.toFixed(1);   // Number Method 


let finalMessage = "Name: " + name +
     " / Age: " + age +
     " / Score: " + roundedScore +
     " / Grade: " + upperGrade;

console.log(finalMessage);    // Concatenated string variable

let ageStatus;
if (age >= 21) {    // If Conditional Statement
    ageStatus = "Can legally drink";
} else {
    ageStatus = "Can not legally drink.";
}

console.log(ageStatus);

let Comment;
switch (upperGrade) {     // Switch Statement 
    case "A":
    Comment = "Keep up the good work!";
        break;
    case "B":
    Comment = "Keep turning in your work";
        break;
    case "C":
    Comment = "C's get degrees.";
        break;
    default:
    Comment = "your cooked.";
}

console.log(Comment);

// Output everything to the page
document.getElementById("results").innerHTML =
    finalMessage + "<br>" + ageStatus + "<br>" + Comment;
