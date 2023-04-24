const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', checkSubmit);

function checkSubmit (evt){
    evt.preventDefault();
    const {elements:{email, password},} = evt.currentTarget;
    if(email.value === '' || password.value === '') {
        alert('Заповни всі поля')
    }
    else {
        const formData = {email:email.value , password:password.value};
        console.log('formData:', formData);
        evt.currentTarget.reset()
    }

}
