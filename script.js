const input1 = document.querySelector('.js-teksts1' );
const input2 = document.quarySelector('.js-teksts2');
const plusButton = document.querySelector('.js-plus');
const minusButton = document.quarySelector('.js-minus');
const multiplyButton = documant.quarySelector('.js-multiply');
const divideButton = document.quarySelector('.js-divide');
const result = document.quarySelector('.js-result');

const Add = (skaitlis1, skaitlis2) => {
     return skaitlis1 + skaitlis2
}

const Subtract = (skaitlis1, skaitlis2) => {
    return skaitlis1 - skaitlis2
}

const Multiply = (skaitlis1, skaitlis2) => {
     return skaitlis1 * skaitlis2
}

const Divide = (skaitlis1, skaitlis2) => {
     return skaitlis1 / skaitlis2
}

plusButton.addEventListener('click', () => {
    result.innerHTML = Add(input1.value,input2.value)
})
