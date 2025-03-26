let value = prompt("Enter a number");

//using ternory Operator
// (value % 2 == 0)
//  ? alert("Number is even ")
//  : alert("Number is odd");

 //Using if-else
 if(!isNaN(value)){
    if(value % 2 == 0){
       alert("Number is even ");
    }else{
       alert("Number is odd");
    }

 }else{
   alert("Your entered something else, Please enter a Number");
 }