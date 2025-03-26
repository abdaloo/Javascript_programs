//Write a program to check if a given number is positive, negative, or zero.

let value = prompt("Enter a Number");

if(!isNaN(value)){
    if(value > 0){
        alert("Number is positive");
    } else if(value < 0){
        alert("Number is negative");
    } else{
        alert("Number is Zero")
    }
}else{
    alert("Sorry, Please enter a Number");
}