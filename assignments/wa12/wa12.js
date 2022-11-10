// function minus () {
//     if (outputInt > 0) {
//         outputInt -= 1;
//         output.textContent = outputInt;
//     }
// }

// function plus () {
//     if (outputInt < 9999999999) {
//         outputInt += 1;
//         output.textContent = outputInt;
//     }
// }

// function reset () {
//     outputInt = 1000000000
//     output.textContent = outputInt;
// }

// function submit () {
//     alert(output.textContent);
// }

// function randomGen (min, max) {
//     const num = Math.floor(Math.random() * (max - min + 1)) + min;
//     return num;
// }

// function random () {
//     outputInt = randomGen(0, 9999999999);
//     output.textContent = outputInt;
// }

// let slider = document.getElementById("myRange");
// let sliderOutput = document.querySelector(".slider-output");
// function sliderSubmit () {
//     sliderOutput.textContent = slider.value;
// }

// const output = document.querySelector(".output");
// let outputInt = parseInt(output.textContent);

// const minusButton = document.querySelector(".minus-button").addEventListener("click", minus);
// const plusButton = document.querySelector(".plus-button").addEventListener("click", plus);
// const resetButton = document.querySelector(".reset-button").addEventListener("click", reset);
// const submitButton = document.querySelector(".submit-button").addEventListener("click", submit);
// const randomButton = document.querySelector(".random-button").addEventListener("click", random);
// const sliderSubmitButton = document.querySelector(".slider-submit-button").addEventListener("click", sliderSubmit);

// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value);
// }

function randomGen (min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function randomGenString () {
    const num = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    if (num == 0)
        return "zero";
    else if (num == 1)
        return "one";
    else if (num == 2)
        return "two";
    else if (num == 3)
        return "three";
    else if (num == 4)
        return "four";
    else if (num == 5)
        return "five";
    else if (num == 6)
        return "six";
    else if (num == 7)
        return "seven";
    else if (num == 8)
        return "eight";
    else if (num == 9)
        return "nine";
}

function numClicked(num) {
    const newButton = document.querySelector("." + randomGenString());
    const oldButton = document.querySelector("." + num);
    const newNum = newButton.value;
    newButton.value = oldButton.value;
    oldButton.value = newNum;
    output.textContent += newNum;
}

function removeLast () {
    const text = output.textContent;
    output.textContent = text.substring(0, text.length-1);
}

function submitTeleport () {
    submitButton.style.position = "absolute";
    submitButton.style.top = randomGen(0, 2000) + "%";
    submitButton.style.left = randomGen(0, 300) + "%";
    console.log(submitButton.style.top + " " + submitButton.style.left);
}

const output = document.querySelector(".output");

const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", () => numClicked(oneButton.className));

const twoButton = document.querySelector(".two");
twoButton.addEventListener("click", () => numClicked(twoButton.className));

const threeButton = document.querySelector(".three");
threeButton.addEventListener("click", () => numClicked(threeButton.className));

const fourButton = document.querySelector(".four");
fourButton.addEventListener("click", () => numClicked(fourButton.className));

const fiveButton = document.querySelector(".five");
fiveButton.addEventListener("click", () => numClicked(fiveButton.className));

const sixButton = document.querySelector(".six");
sixButton.addEventListener("click", () => numClicked(sixButton.className));

const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener("click", () => numClicked(sevenButton.className));

const eightButton = document.querySelector(".eight");
eightButton.addEventListener("click", () => numClicked(eightButton.className));

const nineButton = document.querySelector(".nine");
nineButton.addEventListener("click", () => numClicked(nineButton.className));

const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", () => numClicked(zeroButton.className));

const deleteButton = document.querySelector(".delete-button").addEventListener("click", removeLast);

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", submitTeleport);