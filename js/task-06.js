const inputCheck = document.getElementById("validation-input");
const dataLengthValue = inputCheck.getAttribute('data-length');

inputCheck.addEventListener('blur', checkArea);

function checkArea (){
    if (inputCheck.value.length === parseInt(dataLengthValue)) {
inputCheck.classList.add('valid');
inputCheck.classList.remove('invalid');
    }

    else if (inputCheck.value.length === 0){
        inputCheck.removeAttribute('class');
    }

    else {
        inputCheck.classList.remove('valid');
        inputCheck.classList.add('invalid');
    }

}