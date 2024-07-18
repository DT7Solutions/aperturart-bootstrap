function save_contactdata(){

    var name = document.getElementById("c_name").value;
    var email= document.getElementById("c_email").value;
    var phone = document.getElementById("c_phone").value;
    var feedback =  document.getElementById("c_feedback").value;
    var message =  document.getElementById("c_message").value;

    if (!validateName(name) || !validateEmail(email) || !validatePhone(phone) || !validateFeedback(feedback) || !validateMessage(message)) {
        return;
    }

        // Form data object
    var parms = {
        name: name,
        email: email,
        phone: phone,
        feedback: feedback,
        message: message
    };

    emailjs.send('service_inugbpo', 'template_7wpudmf', parms)
        .then(function(response) {
            // console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById("form-submit2").reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message.');
    });
}


// Validation functions
function validateName(name) {
    if (!name) {
        alert('Please enter your name.');
        return false;
    }
    return true;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !re.test(String(email).toLowerCase())) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

function validatePhone(phone) {
    if (!phone) {
        alert('Please enter your phone number.');
        return false;
    }
    return true;
}



function validateFeedback(feedback) {
    if (!feedback) {
        alert('Please enter your feedback.');
        return false;
    }
    return true;
}

function validateMessage(message) {
    if (!message) {
        alert('Please enter your message.');
        return false;
    }
    return true;
}






function sendMessage() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var selecttype = document.getElementById('selecttype').value;
    var message = document.getElementById('message').value;

    // Validate form data
    if (!validateName(name) || !validateEmail(email) || !validatePhone(phone) || !validateSelectType(selecttype) || !validateMessage(message)) {
        return;
    }

    // Form data object
    var formData = {
        name: name,
        email: email,
        phone: phone,
        selecttype: selecttype,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_inugbpo', 'template_38ycg6y', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById("form-send").reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message.');
        });
}

// Validation functions
function validateName(name) {
    if (!name) {
        alert('Please enter your name.');
        return false;
    }
    return true;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !re.test(String(email).toLowerCase())) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

function validatePhone(phone) {
    if (!phone) {
        alert('Please enter your phone number.');
        return false;
    }
    return true;
}

function validateSelectType(selecttype) {
    if (!selecttype || selecttype === 'select') {
        alert('Please select a package type.');
        return false;
    }
    return true;
}

function validateMessage(message) {
    if (!message) {
        alert('Please enter your message.');
        return false;
    }
    return true;
}




