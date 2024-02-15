const form = document.querySelector(`form`);
const email = document.querySelector(`#email`);
const signUpButton = document.querySelector(`input[type="submit"]`);
const upperLower = /^[a-zA-Z]+$/;

function validateName(name, spanId) {
    if (name.length > 14 || name.length < 2) {
        document.getElementById(spanId).textContent =
            "The First Name entered is either too short or too long.";
    } else if (!upperLower.test(name)) {
        document.getElementById(spanId).textContent =
            "Only lower and upper case letters are allowed";
    } else {
        document.getElementById(spanId).textContent = "";
    }
}

function validateFirstName() {
    const name = document.getElementById("firstName").value;
    validateName(name, "firstNameError");
}

function validateLastName() {
    const name = document.getElementById("lastName").value;
    validateName(name, "lastNameError");
}

const validateEmail = (value) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}

const changeEmailStyling = (invalid) => {
    //set the field border to red 
    if (invalid)
        email.style.borderColor = 'red';
    else 
    email.style.borderColor = 'black';
    
}

const createEmailValidationMessage = (message) => {
    const errorMessage = document.createElement(`p`);
    errorMessage.appendChild(document.createTextNode(message));
    return errorMessage;
}

const setValidationTip = () =>
{
    if (!document.querySelector(`#emailError>p`)) {
        const errorParent = document.querySelector(`#emailError`);
    errorParent.appendChild(createEmailValidationMessage(`Email must have at least 1 @ sign, then one or more characters, followed by a . character then one or more characters`));
    }
}

const deleteValidationTip = () => {
    const errorParent = document.querySelector(`#emailError`);
    errorParent.removeChild(document.querySelector(`#emailError>p`));
}

email.addEventListener(`blur`, (e) => {
    console.log(e.target.value);
    if (!validateEmail(e.target.value))
    {
        setValidationTip();
        changeEmailStyling(true);
    }
    else {
        deleteValidationTip();
        changeEmailStyling(false);
    }
});



