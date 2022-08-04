import validator from './validator.js';

let validation = document.getElementById('btnValidator');
let cardNumber = document.getElementById('cardNumber');
let ccv = document.getElementById('ccvText');
let expirationDate = document.getElementById('date');
let showMessage = document.getElementById('validationMessage');

//boton de validar
//validation.addEventListener('click', validateForm()
    // function(){
    //     let valueCN = cardNumber.value;
    //     let maskifyValue = validator.maskify(valueCN);
    //     document.getElementById('cardNumber').value = maskifyValue;
    //     console.log(validator.isValid(valueCN));
    //     console.log(validator.maskify(valueCN));
    // }
//);

//Solo ingrese números
cardNumber.addEventListener('keypress', function (e) {
    if (!onlyNumbers(event)) {
        e.preventDefault();
    }
});
function onlyNumbers(e) {
    let key = e.charCode;
    //console.log(key);
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
            showMessage.innerHTML = 'Transaction Aproved';

         } else {
            showMessage.innerHTML = 'Transaction denied';
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

// function validateForm(){
//     if(valueCN ==''){
//         return alert('Ingresa un número de tarjeta');
//     } if (valueCV < 16){
//         return alert('Ingresa los 16 números válidos');
//     } 


// }



console.log(validator);


