// Extracting things from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message
function showError(input, message) {
    // Adding new class to the existing of the parent
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    // changing the error mess of HTML to our custome error message
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} is not valid`);
    }
}

// Checking for inputs
function checkRequired(inputArr) {
    inputArr.forEach(function(input) { 
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// For checking length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} should be greater than ${min}`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} should be greater less than ${max}`);
    } else {
        showSuccess(input);
    }
}

// For making each 1st letter cap
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// For checking password
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `${getFieldName(input2)} doesn't match`);
    } 
}


// Adding Event listner to the form when it will be submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    // Check length of username, password, email
    checkLength(username, 3, 15);
    checkLength(password, 4, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);

    // For username
    // If nothing entered in username field
    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }

    // // Email
    // if (email.value === '') {
    //     showError(email, 'Email is required');
    // } else if (!isValidEmail(email.value)) {        // if email passed is not valid
    //     showError(email, 'email is not valid');
    // } else {
    //     showSuccess(email);
    // }

    // // For Password
    // if (password.value === '') {
    //     showError(password, 'Password is required');
    // } else {
    //     showSuccess(password);
    // }

    // // for Confirm password
    // if (password2.value === '') {
    //     showError(password2, 'Confirm password is required');
    // } else {
    //     showSuccess(password2); 
    // }
});


































