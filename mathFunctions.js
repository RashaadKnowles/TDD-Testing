
function addTwoNumbers(a,b){
    if(typeof a !== 'number' || isNaN(a) || typeof b !== "number" || isNaN(b)){
        throw new Error("Invalid")
    }
    return a+b
}


function subtractTwoNumbers(a,b){

}

function multiplyTwoNumbers(a,b){

}


function divideTwoNumbers(a,b){

}





export {addTwoNumbers, subtractTwoNumbers,divideTwoNumbers,multiplyTwoNumbers}