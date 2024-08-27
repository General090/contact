
const radioButtons = document.querySelectorAll('input[name="radio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('click', () => {
        radioButtons.forEach(rb => {
            if (rb !== radio) {
                rb.checked = false;
            }
        })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the input fields and error message containers
        const firstnameField = document.getElementById('firstname');
        const lastnameField = document.getElementById('lastname');
        const emailField = document.getElementById('email');
        const radioButtons = document.querySelectorAll('input[name="radio"]');
        const messageField = document.getElementById('textarea');
        const consentField = document.getElementById('consent');

        const firstNameError = document.getElementById('firstNameError');
        const lastNameError = document.getElementById('lastNameError');
        const emailError = document.getElementById('emailError');
        const queryError = document.getElementById('queryError');
        const textError = document.getElementById('textError');
        const consentError = document.getElementById('consentError');

        // Clear previous error messages and remove red border classes
        firstNameError.textContent = '';
        lastNameError.textContent = '';
        emailError.textContent = '';
        queryError.textContent = '';
        textError.textContent = '';
        consentError.textContent = '';

        firstnameField.classList.remove('border-red-500');
        lastnameField.classList.remove('border-red-500');
        emailField.classList.remove('border-red-500');
        messageField.classList.remove('border-red-500');
        consentField.classList.remove('border-red-500');
        radioButtons.forEach(rb => rb.parentNode.classList.remove('border-red-500'));

        let isValid = true;

        // Validate fields
        if (firstnameField.value.trim() === '') {
            firstNameError.textContent = 'This field is required.';
            firstnameField.classList.add('border-red-500');
            isValid = false;
        }
        if (lastnameField.value.trim() === '') {
            lastNameError.textContent = 'This field is required.';
            lastnameField.classList.add('border-red-500');
            isValid = false;
        }
        if (emailField.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            emailField.classList.add('border-red-500');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailField.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            emailField.classList.add('border-red-500');
            isValid = false;
        }
        if (!document.querySelector('input[name="radio"]:checked')) {
            queryError.textContent = 'Please select a query type.';
            radioButtons.forEach(rb => rb.parentNode.classList.add('border-red-500'));
            isValid = false;
        }
        if (messageField.value.trim() === '') {
            textError.textContent = 'This field is required.';
            messageField.classList.add('border-red-500');
            isValid = false;
        }
        if (!consentField.checked) {
            consentError.textContent = 'To submit this form, please consent to being contacted.';
            consentField.classList.add('border-red-500');
            isValid = false;
        }

        if (isValid == false){
            alert("fill in your details")
        }
        
            
    });

    document.getElementById("showAlert").addEventListener("click", function() {
        document.getElementById("customAlert").classList.remove("hidden");
    });
});



    





