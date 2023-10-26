const heightInput  = document.querySelector('#height');
const weightInput  = document.querySelector('#weight');
const resultDisplay = document.querySelector('p');
const computeBMI  = document.querySelector('.compute');
let info = document.querySelectorAll('li')
const usUnits = document.querySelector("#us-units")
const metricUnits = document.querySelector("#metric-units")

function checkIfObese (BMI){
    if(BMI<= 18.5){
        resultDisplay.innerHTML = `Your BMI is: <span>${BMI}</span>`
    } else if(BMI>=18.5 && BMI<=24.9){
        resultDisplay.innerHTML = `Your BMI is: <span>${BMI}</span>`
    } else if(BMI>=25 && BMI<=29.9){
        resultDisplay.innerHTML = `Your BMI is: <span>${BMI}</span>`
    } else{
        resultDisplay.innerHTML = `Your BMI is: <span>${BMI}</span>`
    }
}


function calculateBMI (){
    let heightNum = Number(heightInput.value);
    let weightNum = Number(weightInput.value);

    let BMI = (weightNum/((heightNum*heightNum)/10000)).toFixed(1)

        
        checkIfObese(BMI)
    

    if(BMI< 18.5){
        info[0].classList.add('match')
        info[1].classList.remove('match')
        info[2].classList.remove('match')
        info[3].classList.remove('match')
    } else if(BMI>=18.5 && BMI<=24.9){
        info[1].classList.add('match')
        info[0].classList.remove('match')
        info[2].classList.remove('match')
        info[3].classList.remove('match')
    } else if(BMI>=25 && BMI<=29.9){
        info[2].classList.add('match')
        info[1].classList.remove('match')
        info[3].classList.remove('match')
        info[0].classList.remove('match')
    } else if(BMI>=30){
        info[3].classList.add('match')
        info[0].classList.remove('match')
        info[1].classList.remove('match')
        info[2].classList.remove('match')
    }

    
}

computeBMI.addEventListener('click', function(){
    if(weightInput.placeholder === 'kilograms'){
        if(isNaN(heightInput.value * 5) || isNaN(weightInput.value * 5)){
        resultDisplay.innerHTML = 'Please input value in numbers only!!'
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
        removeMatch()
    }else if(heightInput.value === '' || weightInput.value === ''){
        resultDisplay.innerHTML = `don't leave any input empty!!`
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
        removeMatch()
    } else{
        calculateBMI()
    }
    } else{
        if(isNaN(heightInput.value * 5) || isNaN(weightInput.value * 5)){
        resultDisplay.innerHTML = 'Please input value in numbers only!!'
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
        removeMatch()
    }else if(heightInput.value === '' || weightInput.value === ''){
        resultDisplay.innerHTML = `don't leave any input empty!!`
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
        removeMatch()
    } else{
        calculateBMIUS()
    }
    }
    
    
    
    
})

document.body.addEventListener('keypress', function(event){

    if (event.key === 'Enter'){
        if(weightInput.placeholder === 'kilograms'){
        if(isNaN(heightInput.value * 5) || isNaN(weightInput.value * 5)){
        resultDisplay.innerHTML = 'Please input value in numbers only!!'
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
        removeMatch()
    }else if(heightInput.value === '' || weightInput.value === ''){
        resultDisplay.innerHTML = `don't leave any input empty!!`
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
        removeMatch()
    } else{
        calculateBMI()
    }
    } else{
        if(isNaN(heightInput.value * 5) || isNaN(weightInput.value * 5)){
        resultDisplay.innerHTML = 'Please input value in numbers only!!'
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
        removeMatch()
    }else if(heightInput.value === '' || weightInput.value === ''){
        resultDisplay.innerHTML = `don't leave any input empty!!`
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
        removeMatch()
    } else{
        calculateBMIUS()
    }
    }
    
    }
})



const labels = document.querySelectorAll('label')


metricUnits.classList.add('clicked')
metricUnits.addEventListener ('click', function(){
    usUnits.classList.remove('clicked');
    metricUnits.classList.add('clicked');
    labels[0].innerHTML = 'Your Height(cm)';
    labels[1].innerHTML = 'Your Weight(kg)';
    heightInput.placeholder = 'centimetres';
    weightInput.placeholder = 'kilograms';
    heightInput.value = '';
    weightInput.value = '';
    resultDisplay.innerHTML = 'Your BMI:'
    removeMatch()
})

function removeMatch (){
    info.forEach(function(unitInfo){
        unitInfo.classList.remove('match')
    })
}

usUnits.addEventListener ('click', function(){
    usUnits.classList.add('clicked');
    metricUnits.classList.remove('clicked');
    labels[0].innerHTML = 'Your Height(ft)';
    labels[1].innerHTML = 'Your Weight(lb)';
    heightInput.placeholder = 'feets';
    weightInput.placeholder = 'pounds';
    heightInput.value = ''
    weightInput.value = ''
    resultDisplay.innerHTML = 'Your BMI:'
    removeMatch()

})




function calculateBMIUS (){
    let heightNum = Number(heightInput.value);
    let weightNum = Number(weightInput.value);
    let heightInInches = heightNum*12

    

    let BMI = ((weightNum/(heightInInches*heightInInches)) * 703 ).toFixed(1)

    checkIfObese(BMI)


    if(BMI< 18.5){
        info[0].classList.add('match')
        info[1].classList.remove('match')
        info[2].classList.remove('match')
        info[3].classList.remove('match')
    } else if(BMI>=18.5 && BMI<=24.9){
        info[1].classList.add('match')
        info[0].classList.remove('match')
        info[2].classList.remove('match')
        info[3].classList.remove('match')
    } else if(BMI>=25 && BMI<=29.9){
        info[2].classList.add('match')
        info[1].classList.remove('match')
        info[3].classList.remove('match')
        info[0].classList.remove('match')
    } else if(BMI>=30){
        info[3].classList.add('match')
        info[0].classList.remove('match')
        info[1].classList.remove('match')
        info[2].classList.remove('match')
    }
}


// computeBMI.addEventListener('click', function(){
//     if(weightInput.placeholder === 'pounds'){
//         calculateBMIUS()
//     }
// })