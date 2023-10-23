const heightInput  = document.querySelector('#height');
const weightInput  = document.querySelector('#weight');
const resultDisplay = document.querySelector('p');
const computeBMI  = document.querySelector('button');
let info = document.querySelectorAll('li')

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
    if(isNaN(heightInput.value * 5) || isNaN(weightInput.value * 5)){
        resultDisplay.innerHTML = 'Please input value in numbers only!!'
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
    }else if(heightInput.value === '' || weightInput.value === ''){
        resultDisplay.innerHTML = `don't leave any input empty!!`
        setTimeout(function(){
            resultDisplay.innerHTML = `Your BMI is:`
        }, 2000)
    } else{
        calculateBMI()
    }
    
    
    
})

document.body.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        if(isNaN(heightInput.value * 5) || isNaN(weightInput.value * 5)){
        resultDisplay.innerHTML = 'Please input value in numbers only!!'
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






// buttons.forEach(function(button){
//     button.addEventListener('click', function(){
//         button.classList.add('clicked')
//         buttons.forEach(function(otherButton){
//             if(otherButton !== button){
//                 otherButton.classList.remove('clicked')
//             }
//         })
//     })
// })
