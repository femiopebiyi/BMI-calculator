const heightInput  = document.querySelector('#height');
const weightInput  = document.querySelector('#weight');
const resultDisplay = document.querySelector('p');
const computeBMI  = document.querySelector('button');

function checkIfObese (BMI){
    if(BMI<= 18.5){
        resultDisplay.innerHTML = `Your BMI is: ${BMI}. you're underweight please eat some food`
    } else if(BMI > 18.5 && BMI <= 24.9){
        resultDisplay.innerHTML = `Your BMI is: ${BMI}. congrats you're normal weight`
    } else if(BMI> 24.9 && BMI <= 29.9){
        resultDisplay.innerHTML = `Your BMI is: ${BMI}. you're pushing it now, slow down on dem Mcdonalds`
    } else{
        resultDisplay.innerHTML = `Your BMI is: ${BMI}. my brother in christ you are obese`
    }
}

function calculateBMI (){
    let heightNum = Number(heightInput.value);
    let weightNum = Number(weightInput.value);

    let BMI = (weightNum/((heightNum*heightNum)/10000)).toFixed(2)

    checkIfObese(BMI)
    
}

computeBMI.addEventListener('click', function(){
    calculateBMI()
})

document.body.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        calculateBMI()
    }
})