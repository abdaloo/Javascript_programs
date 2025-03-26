//Write a program that checks if a number is divisible by both 3 and 5.
let value = prompt("Enter a number");

if(!isNaN(value)){
    if(value % 3 == 0 && value % 5 == 0){
        alert("Number is divisible by 3 and 5");
    }else if(value % 3 == 0){
        alert("Number is divisible by 3");
    }else if(value % 5 == 0){
        alert("Number is divisible by ");
    }else{
        alert("Number is not divisible by 3 nor 5 ");
    }
}else{
    alert("You entered something else, please enter a number");
}
