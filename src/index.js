import validator from './validator.js';

let validation = document.getElementById('btnValidator');
let cardNumber = document.getElementById('cardNumber');
let ccv = document.getElementById('ccvText');
let expirationDate = document.getElementById('date');
let showMessage = document.getElementById('validationMessage');


//Solo ingrese números
cardNumber.addEventListener('keypress', function (e) {
    if (!onlyNumbers(event)) {
        e.preventDefault();
    }
});
function onlyNumbers(e) {
    let key = e.charCode;
    return key >= 48 && key <= 57;
}

function validateForm() {
    let dataCCV = ccv.value;
    let dataDate = expirationDate.value;
    let valueCN = cardNumber.value;
    if (valueCN === ''){
        return alert('ingresa algo, credit card number');
    } else {
        let maskifyValue = validator.maskify(valueCN);
         document.getElementById('cardNumber').value = maskifyValue;

         let validation = validator.isValid(valueCN);

         if (validation == true){
            showMessage.innerHTML = 'Transaccción Aprovada';

         } else {
            showMessage.innerHTML = 'Transacción Denegada';
         }

    if (dataCCV === ''){
        return alert('ingresa un número de cuenta');
    }

    if (dataDate === ''){
        return alert('ingresa algo, date');
    }

    
    }

}
validation.addEventListener('click', validateForm);
console.log(validator);


