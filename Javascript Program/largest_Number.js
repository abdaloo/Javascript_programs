//Write a program that takes three numbers as input and prints the largest number using if-else.


let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");
let thirdNumber = prompt("Enter third number");

if(!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)){

    if(firstNumber > secondNumber){
        if(firstNumber > thirdNumber){
            alert(`${firstNumber} is greater`);
        }else{
            alert(`${thirdNumber} is greater`);
        }
    }else {
        if(secondNumber > thirdNumber){
            alert(`${secondNumber} is greater`);
        }else{
            alert(`${thirdNumber} is greater`);
        }
    }
}else{
    alert("Sorry, Please enter all three values in Number");
}


