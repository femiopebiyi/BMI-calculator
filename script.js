const heightInput  = document.querySelector('#height');
const weightInput  = document.querySelector('#weight');
const resultDisplay = document.querySelector('p');
const computeBMI  = document.querySelector('button');

function checkIfObese (BMI){
    if(BMI<= 18.5){
        resultDisplay.innerHTML = `Your BMI is: <span>${BMI}</span>`
    } else if(BMI > 18.5 && BMI <= 24.9){
        resultDisplay.innerHTML = `Your BMI is: <span>${BMI}</span>`
    } else if(BMI> 24.9 && BMI <= 29.9){
        resultDisplay.innerHTML = `Your BMI is: <span>${BMI}</span>`
    } else{
        resultDisplay.innerHTML = `Your BMI is: <span>${BMI}</span>`
    }
}

function calculateBMI (){
    let heightNum = Number(heightInput.value);
    let weightNum = Number(weightInput.value);

    let BMI = (weightNum/((heightNum*heightNum)/10000)).toFixed(2)

        
        checkIfObese(BMI)
    

    
    
}

computeBMI.addEventListener('click', function(){
    if(isNaN(heightInput.value * 5) || isNaN(weightInput.value * 5)){
        resultDisplay.innerHTML = 'Please input values in number'
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI:`
        }, 2000)
    }else if(heightInput.value === '' || weightInput.value === ''){
        resultDisplay.innerHTML = `don't leave any input empty!!`
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI:`
        }, 2000)
    } else{
        calculateBMI()
    }
    
    
    
})

document.body.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        if(isNaN(heightInput.value * 5) || isNaN(weightInput.value * 5)){
        resultDisplay.innerHTML = 'Please input values in number'
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI:`
        }, 2000)
    }else if(heightInput.value === '' || weightInput.value === ''){
        resultDisplay.innerHTML = `don't leave any input empty!!`
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI:`
        }, 2000)
    } else{
        calculateBMI()
    }
    
    }
})