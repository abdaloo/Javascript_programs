//Write a program that takes a student's marks as input and prints their grade based on the following criteria:

// 90+ → A

// 80-89 → B

// 70-79 → C

// 60-69 → D

// Below 60 → F


let marks = prompt("Enter your marks","100");

if(!isNaN(marks)){
    if(marks >= 90 && marks <=100){
        alert("Grade A");
    }else if(marks >=80 && marks <=89){
        alert("Grade B");
    }else if(marks >=70 && marks <=79){
        alert("Grade C");
    }else if(marks >=60 && marks <=69){
        alert("Grade D");
    }else {
        alert("Grade F")
    }
}else{
    alert("Sorry, Your entered something else, Please enter Marks in Number");
}
