let value = prompt("Enter a number[1-7]")

if(!isNaN(value)){
    switch(value){
        case '1':
            alert("Sunday");
            break;
        case '2':
            alert("Monday");
            break;
        case '3':
            alert("Tuesday");
            break;
        case '4':
            alert("Wednesday");
            break;
        case '5':
            alert("Thursday");
            break;
        case '6':
            alert("Friday");
            break;
        case '7':
            alert("Saturday");
            break;
        default:
            alert("This is not your day");
    }
}else{
    alert("Please enter the number between 1-7")
}