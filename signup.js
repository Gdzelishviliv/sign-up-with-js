document.addEventListener('DOMContentLoaded', function () {
    const firstName = document.querySelector('#fname');
    const lastName = document.querySelector('#lname');
    const email = document.querySelector('#gmail');
    const password = document.querySelector('#pass');

    const submitButton = document.querySelector('.card-btn');
    
    const nameValidator = ()=>{
        let icns = document.querySelector(`.icn-1`);
        const val = firstName.value;
        const alert = document.querySelector('.alert');
        if(val.length<1){
        firstName.style.borderColor = `var(--red)`;
        alert.innerText ='First Name cannot be empty';
        alert.style.display ='inherit';
        icns.classList.add('active');
    }
    else {
        firstName.style.borderColor = 'var(--green)';
        alert.style.display = 'none';
        icns.classList.remove('active');
    }
};
const lastNameValidator = ()=>{
    let icns = document.querySelector(`.icn-2`);
    const val = lastName.value;
    const alert = document.querySelector('.alert-lastname');
    if(val.length<1){
        lastName.style.borderColor = `var(--red)`;
        alert.innerText ='Last Name cannot be empty';
        alert.style.color =`var(--red)`;
        alert.style.display ='inherit';
        icns.classList.add('active');
    }
    else {
        lastName.style.borderColor = 'var(--green)';
        alert.style.display = 'none';
        icns.classList.remove('active');
    }
    };
    const validateEmail = ()=>{
        let icns = document.querySelector(`.icn-3`);
        const val = email.value;
        const alert = document.querySelector('.alert-gmail');
        if(val.length<1){
            email.style.borderColor =`var(--red)`;
            email.placeholder= 'email@example/com'
            email.placeholder.color=`var(--red)`
            alert.innerText ='Looks like this is not an email';
            alert.style.color =`var(--red)`;
            alert.style.display ='inherit';
            icns.classList.add('active');
        }
        else{
            email.style.borderColor = `var(--green)`;
            alert.style.display = 'none';
            icns.classList.remove('active');
        }
    };
    const validatePassword = ()=>{
        let icns = document.querySelector(`.icn-4`);
        const val = password.value;
        const alert = document.querySelector('.alert-pass');
        if(val.length<1){
            password.style.borderColor =`var(--red)`;
            alert.innerText ='Password cannot be empty';
            alert.style.color =`var(--red)`;
            alert.style.display ='inherit';
            icns.classList.add('active');
        }
        else{
            password.style.borderColor = `var(--green)`;
            alert.style.display = 'none';
            icns.classList.remove('active');
        }
    }
    
   submitButton.addEventListener('click',() =>{
    nameValidator();
    lastNameValidator();
    validateEmail();
    validatePassword();
   })
});
