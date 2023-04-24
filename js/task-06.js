const inputCheck = document.getElementById("validation-input");
inputCheck.addEventListener('blur', checkArea);
function checkArea (){
    if (inputCheck.value.length === 6) {
inputCheck.classList.add('valid')
inputCheck.classList.remove('invalid')
    }
    else if (inputCheck.value.length === 0){
        inputCheck.removeAttribute('class')
    }
    else {
        inputCheck.classList.remove('valid')
        inputCheck.classList.add('invalid')
    }

}