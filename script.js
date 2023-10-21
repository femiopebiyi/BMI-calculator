const heightInput  = document.querySelector('#height');
const weightInput  = document.querySelector('#weight');
const resultDisplay = document.querySelector('p');
const computeBMI  = document.querySelector('button');

function calculateBMI (){
    let heightNum = Number(heightInput.value);
    let weightNum = Number(weightInput.value);

    let BMI = (weightNum/((heightNum*heightNum)/10000)).toFixed(2)

    resultDisplay.innerHTML = `Your BMI is: ${BMI}`
}

computeBMI.addEventListener('click', function(){
    calculateBMI()
})

document.body.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        calculateBMI()
    }
})