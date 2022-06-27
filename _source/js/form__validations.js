// masks
const fieldMasks = {
    "cnpj" : {
        "mask" : "00.000.000/0000-00",
        "field" : ".js-fieldMask__cnpj"
    },
    "phone" : {
        "mask" : "(00)00000-0000",
        "field" : ".js-fieldMask__phone"
    },
    "cep" : {
        "mask" : "00000-000",
        "field" : ".js-fieldMask__cep"
    }
}
function generateMask(data) {
    let options = {mask: data.mask};
    let element = document.querySelectorAll(data.field)
    element.forEach((field) => {
        var mask = IMask(field, options);
    });
}
generateMask(fieldMasks.cnpj);
generateMask(fieldMasks.phone);
generateMask(fieldMasks.cep);

// elements
const cForm = document.querySelectorAll('.c-form');
const cFormFields = {
    "fullName" : document.querySelectorAll('.js-fieldValidation__fullName'),
    "cnpj" : document.querySelectorAll('.js-fieldValidation__cnpj'),
    "phone" : document.querySelectorAll('.js-fieldValidation__phone'),
    "cep" : document.querySelectorAll('.js-fieldValidation__cep'),
    "email" : document.querySelectorAll('.js-fieldValidation__email'),
    "select" : document.querySelectorAll('.js-fieldValidation__select'),
    "check" : document.querySelectorAll('.js-fieldValidation__check'),
}

// validation
function validField(formField, validationType, numOfChar) {
    if (validationType === 'numChars') {
        if (formField.value.length < numOfChar) {
            formField.parentElement.classList.add('js-error');
        } else {
            formField.parentElement.classList.remove('js-error');
        }
    }
    if (validationType === 'email') {
        if ((formField.value.includes('@')) && (formField.value.includes('.'))) {
            formField.parentElement.classList.remove('js-error');
        } else {
            formField.parentElement.classList.add('js-error');
        }
    }
    if (validationType === 'select') {
        if ((formField.value === 'selecione') || (formField.value === 'Selecione')) {
            formField.parentElement.parentElement.classList.add('js-error');
        } else {
            formField.parentElement.parentElement.classList.remove('js-error');
        }
    }
    if (validationType === 'check') {
        formField.parentElement.classList.add('js-error');
        formField.querySelectorAll('input').forEach((check) => {
            if (check.checked) {
                formField.parentElement.classList.remove('js-error');
            }
        });
    }
}

// validation on mouseout
cFormFields.fullName.forEach((field) => {
    field.addEventListener('focusout', function() {
        validField(field, 'numChars', 1);
    })
});
cFormFields.cnpj.forEach((field) => {
    field.addEventListener('focusout', function() {
        validField(field, 'numChars', 18);
    })
});
cFormFields.phone.forEach((field) => {
    field.addEventListener('focusout', function() {
        validField(field, 'numChars', 13);
    })
});
cFormFields.cep.forEach((field) => {
    field.addEventListener('focusout', function() {
        validField(field, 'numChars', 9);
    })
});
cFormFields.email.forEach((field) => {
    field.addEventListener('focusout', function() {
        validField(field, 'email');
    })
});
cFormFields.select.forEach((field) => {
    field.addEventListener('focusout', function() {
        validField(field, 'select');
    })
});

// validation on submit
cForm.forEach((form) => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // validations
        form.querySelectorAll('.js-fieldValidation__fullName').forEach((field) => {
            validField(field, 'numChars', 2)
        });
        form.querySelectorAll('.js-fieldValidation__subject').forEach((field) => {
            validField(field, 'numChars', 2)
        });
        form.querySelectorAll('.js-fieldValidation__msg').forEach((field) => {
            validField(field, 'numChars', 20)
        });
        form.querySelectorAll('.js-fieldValidation__cnpj').forEach((field) => {
            validField(field, 'numChars', 18)
        });
        form.querySelectorAll('.js-fieldValidation__phone').forEach((field) => {
            validField(field, 'numChars', 13)
        });
        form.querySelectorAll('.js-fieldValidation__cep').forEach((field) => {
            validField(field, 'numChars', 9)
        });
        form.querySelectorAll('.js-fieldValidation__email').forEach((field) => {
            validField(field, 'email')
        });
        form.querySelectorAll('.js-fieldValidation__select').forEach((field) => {
            validField(field, 'select')
        });
        form.querySelectorAll('.js-fieldValidation__check').forEach((field) => {
            validField(field, 'check')
        });
    });
})

// sendToRD
function sendLeadToRDStation(form, rdData) {
    // hide component
    form.closest('.c-chatbot__content').classList.remove('is-active');

    // show loader
    document.querySelector('.c-formFeedback__content.--load').classList.remove('u-dnone');

    // send to rd
    fetch(rdStation.url, {
        method: 'POST',
        body: JSON.stringify(rdData)
    })
        .then(res => res.json())
        .then(data => {
            // show/hide feedbacks
            document.querySelector('.c-formFeedback__content.--load').classList.add('u-dnone');
            document.querySelector('.c-formFeedback__content.--success').classList.remove('u-dnone');
            // clean fields
            form.querySelectorAll('input').forEach((field) => {field.value = ''});
            form.querySelectorAll('textarea').forEach((field) => {field.value = ''});
            form.querySelectorAll('select').forEach((field) => {field.value = ''});
        })
        .catch(error => {
            // show/hide feedbacks
            document.querySelector('.c-formFeedback__content.--load').classList.add('u-dnone');
            document.querySelector('.c-formFeedback__content.--error').classList.remove('u-dnone');
        })
}