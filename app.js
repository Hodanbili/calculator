
// const screenDisplay = document.querySelector('.screen')
//  const buttons = document.querySelectorAll('button')

// let calculation = []
// let accumulativeCalculation

// function calculate(){
//     const value = button.textContent
//     if (value ==="CLEAR"){
//         calculation = []
//         screenDisplay.textContent = '.'
//     }
//     else if (value ==="="){
// screenDisplay.textContent = eval(accumulativeCalculation)
//     }
// else {
//     calculation.push(value)
//     accumulativeCalculation = calculation.join('')
//     screenDisplay.textContent = calculation
// }
    
// }

//  buttons.forEach(buttons => buttons.addEventListener('clicks', () => calculate(button)))

alert('Ok')
console.log('Ok')


 function inputNumber(buttonId, inputNumberId){
    var buttonNumber = document.getElementById(buttonId)
    var inputNumber = document.getElementById(inputNumberId)
    var previousNumber = document.getElementById(inputNumberId).innerHTML
    // write number in the input
    inputNumber.innerText = previousNumber + buttonNumber.innerHTML 
    
 }


