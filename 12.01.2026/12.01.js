const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnBigger = document.getElementById('btnBigger');


//========== Bigger Number ==========
btnBigger.addEventListener('click', function(){
  const value1 = num1.value;
  const value2 = num2.value;
    if (value1 > value2) {
        result = `${value1} is bigger than ${value2}`;
    } else if (value2 > value1) {
        result = `${value2} is bigger than ${value1}`;
    } else {
        result = `Numbers are equal`;
    }
    alert(result);
});


const price = document.getElementById('price'); 
const discount = document.getElementById('discount');
const btnDiscount = document.getElementById('btnDiscount');

//========== Discounted Calculator ==========
const priceInput = document.getElementById("price");
const discountInput = document.getElementById("discount");

btnDiscount.addEventListener('click', function () {
    const price = parseFloat(priceInput.value);
    const discount = parseFloat(discountInput.value);

    const discountedPrice = price * discount / 100;

    alert(`The discounted price is ${discountedPrice}`);
});


//========== Username Validator ==========
const username = document.getElementById('username');
const btnValidate = document.getElementById('btnValidate');

btnValidate.addEventListener('click', function () {
    if (username.value.length < 6) {
        alert("Username must be 6 characters long.");
    } else {
        alert(`Username is ${username.value}`);
    }
});


const fontSelect = document.getElementById('fontSelect');
const textBox = document.getElementById('textBox');

fontSelect.addEventListener('change', function () {
    const selectedFont = fontSelect.value;
    textBox.style.fontFamily = selectedFont;
});