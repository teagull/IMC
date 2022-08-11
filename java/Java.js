function start() {
    var buttonCalculateImc = document.querySelector('#botton-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);
    
    var inputWeight = document.querySelector( "#input-weight");
    var inputHeight = document.querySelector( "#input-height");

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    
    handleButtonClick()
    
}

function calculateImc(weight, height) {
    return weight / (height*height);
}

function handleButtonClick () {
    var inputWeight = document.querySelector( "#input-weight");
    var inputHeight = document.querySelector( "#input-height");
    var imcResult = document.querySelector('#imc-resolt');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight,height);
    var formatedImc= imc.toFixed(2).replace('.',',');
    
    imcResult.textContent = formatedImc;

    var tableImc = document.querySelector("#table-imc");

    if( imc >= 16 && imc <= 16.9) {
    tableImc.textContent = "Muito abaixo do Peso"
    } else if (imc >= 17 && imc <= 18.4) {
        tableImc.textContent = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        tableImc.textContent = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        tableImc.textContent = "Acima do Peso"
    } else if (imc >= 30 && imc <= 34.9) {
        tableImc.textContent = "Obesidade Grau I"
    } else if (imc >= 35 && imc <= 40) {
        tableImc.textContent = "Obesidade Grau II"
    } else if (imc > 40) {
        tableImc.textContent = "Obesidade Grau III"
    } else {
        tableImc.textContent = "Inválido"
    }



}
start();