let inputValue = prompt("Enter your SIM number");

if(Number(inputValue)){
    let simNumber = inputValue.length;
    if(simNumber == 11){
        let loadedAmount = prompt("How many rupees you want to be loaded to your number?");
        if(Number(loadedAmount)){
            if(loadedAmount < 50){
                alert("Least EasyLoad amount is 50");
            }else{
                let deductedAmount = (loadedAmount/100)*12;
                let recievedAmount = loadedAmount - deductedAmount;
                alert(`You have recieved Rs. ${recievedAmount.toFixed(2)} to ${inputValue} and Rs. ${deductedAmount.toFixed(2)} deduct from your loaded amount.`)
            }
        
        }else{
            alert("Please enter rupees in digits");
        }
    }else{
        alert("Warning: your SIM number must be equal to 11")
    }
}else{
    alert("Please enter a valid number");
}




// if(!isNaN(simNumber) ){
//     let loadedAmount = Number(prompt("How many rupees you want to be loaded to your number?"));
//     if(!isNaN(loadedAmount)){
//         if(loadedAmount < 50){
//             alert("Least EasyLoad amount is 50");
//         }else{
//             let deductedAmount = (loadedAmount/100)*12;
//             let recievedAmount = loadedAmount - deductedAmount;
//             alert(`You have recieved Rs. ${recievedAmount} to ${mobileNumber} and Rs. ${deductedAmount} deduct from your loaded amount.`)
//         }
    
//     }else{
//         alert("Please enter rupees in digits");
//     }
// }else{
//     alert("Please enter your mobile number in digits");
// }

// if(!isNaN(loadedAmount)){
//     if(loadedAmount < 50){
//         alert("Least EasyLoad amount is 50");
//     }else{
//         let deductedAmount = (loadedAmount/100)*12;
//         let recievedAmount = loadedAmount - deductedAmount;
//         alert(`You have recieved Rs. ${recievedAmount} to ${mobileNumber} and Rs. ${deductedAmount} deduct from your loaded amount.`)
//     }

// }else{
//     alert("Please enter rupees in digits");
// }