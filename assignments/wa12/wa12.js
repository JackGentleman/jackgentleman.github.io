function minus () {
    if (outputInt > 0) {
        outputInt -= 1;
        output.textContent = outputInt;
    }
}

function plus () {
    if (outputInt < 9999999999) {
        outputInt += 1;
        output.textContent = outputInt;
    }
}

function reset () {
    outputInt = 1000000000
    output.textContent = outputInt;
}

function submit () {
    alert(output.textContent);
}

function randomGen (min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function random () {
    outputInt = randomGen(0, 9999999999);
    output.textContent = outputInt;
}

let slider = document.getElementById("myRange");
let sliderOutput = document.querySelector(".slider-output");
function sliderSubmit () {
    sliderOutput.textContent = slider.value;
}

const output = document.querySelector(".output");
let outputInt = parseInt(output.textContent);

const minusButton = document.querySelector(".minus-button").addEventListener("click", minus);
const plusButton = document.querySelector(".plus-button").addEventListener("click", plus);
const resetButton = document.querySelector(".reset-button").addEventListener("click", reset);
const submitButton = document.querySelector(".submit-button").addEventListener("click", submit);
const randomButton = document.querySelector(".random-button").addEventListener("click", random);
const sliderSubmitButton = document.querySelector(".slider-submit-button").addEventListener("click", sliderSubmit);

// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value);
// }