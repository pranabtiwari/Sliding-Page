let checkFullName = document.getElementById('Check-fullname');
let checkEmail = document.getElementById('Check-email');
let checkNumber = document.getElementById('Check-number');
let checkSubmit = document.getElementById('Check-submit');

// Full Name Validation
function fullnamevalidation() {
    let fullname = document.getElementById('user-info').value.trim();
    if (fullname.length < 1) {
        checkFullName.innerHTML = "Full Name is Required!";
        checkFullName.style.color = "red";
        return false;
    }
    if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(fullname)) {
        checkFullName.innerHTML = "Please enter First Name and Last Name";
        checkFullName.style.color = "red";
        return false;
    }
    checkFullName.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkFullName.style.color = "green";
    return true;
}

// Email Validation
function emailValidation() {
    let email = document.getElementById('user-Email').value.trim();
    if (email.length < 1) {
        checkEmail.innerHTML = "Email is Required!";
        checkEmail.style.color = "red";
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        checkEmail.innerHTML = "Invalid Email Format!";
        checkEmail.style.color = "red";
        return false;
    }
    checkEmail.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkEmail.style.color = "green";
    return true;
}

// Phone Number Validation
function phoneValidation() {
    let phone = document.getElementById('user-Phoneno').value.trim();
    if (phone.length < 1) {
        checkNumber.innerHTML = "Phone Number is Required!";
        checkNumber.style.color = "red";
        return false;
    }
    if (!/^\d{10}$/.test(phone)) {
        checkNumber.innerHTML = "Invalid Phone Number! Must be 10 digits.";
        checkNumber.style.color = "red";
        return false;
    }
    checkNumber.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkNumber.style.color = "green";
    return true;
}

// Submit Validation
function validateForm(event) {
    let isFullNameValid = fullnamevalidation();
    let isEmailValid = emailValidation();
    let isPhoneValid = phoneValidation();

    if (!isFullNameValid || !isEmailValid || !isPhoneValid) {
        checkSubmit.innerHTML = "Please correct the errors above!";
        checkSubmit.style.color = "red";
        event.preventDefault(); // Prevents form submission
        return false;
    }

    checkSubmit.innerHTML = "Form Submitted Successfully!";
    checkSubmit.style.color = "green";
    return true; // Allow form submission
}
