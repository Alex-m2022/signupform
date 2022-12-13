let form = document.getElementById('form')
let firstname = document.getElementById('firstname')
let email = document.getElementById('email')
let password = document.getElementById('password')
let lastname = document.getElementById('lastname')
let phonenumber = document.getElementById('phonenumber')
let confirmpassword = document.getElementById('confirmpassword')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    // first get the values from the inputs 
    let firstnameValue = firstname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let lastnameValue = lastname.value.trim()
    let phonenumberValue = phonenumber.value.trim()
    let confirmpasswordValue = confirmpassword.value.trim()

    if (firstnameValue === '') {
        // show error
        // add error class 
        setErrorFor(firstname, 'first name cannot be left blank')
    } else {
        // add success class 
        setSuccessFor(firstname)
    }

    if (lastnameValue === '') {
        setErrorFor(lastname, 'last name cannot be left blank')
    } else {
        setSuccessFor(lastname)
    }

    if (emailValue === '') {
        setErrorFor(email, 'email cannot be left blank')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'not a valid email')
    } else {
        setSuccessFor(email)
    }

    if (phonenumberValue === '') {
        setErrorFor(phonenumber, 'phone number cannot be left blank')
    } else if (phonenumberValue.length < 11) {
        setErrorFor(phonenumber, 'phone number must contain 11 digits') 
    } else if (phonenumberValue.length < 11) {
        setErrorFor(phonenumber, 'phone number cannot contain more than 11 digits')
    } else {
        setSuccessFor(phonenumber)
    }

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if (passwordValue.length < 8 ) {
        setErrorFor(password, 'password cannot be less than 8 characters')
	} else {
        setSuccessFor(password)
    }

    if(confirmpasswordValue === '') {
		setErrorFor(confirmpassword, 'confirm password cannot be blank');
	} else if(passwordValue !== confirmpasswordValue) {
		setErrorFor(confirmpassword, 'Passwords does not match');
	} else{
		setSuccessFor(confirmpassword);
	}
	
}

function setErrorFor(input, message) {
    let formcontrol = input.parentElement
    let small = formcontrol.querySelector('small')

    // add error message 
    small.textContent = message

    // add error class
    formcontrol.className = 'formcontrol error'
}

function setSuccessFor(input) {
    let formcontrol = input.parentElement
    formcontrol.className = 'formcontrol success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}