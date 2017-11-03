'use strict';

// check for required fields
// select input elements
const inputs = document.querySelectorAll('input');
let formOK = 0;

const checkAttribute = (elements, attr, func) => {
    elements.forEach((element) => {
        if(element.hasAttribute(attr)){
            func(element);
        }
    });
};

const checkEmpty = (element) => {
    if(element.value === ''){
        formOK++;
        element.setAttribute('style','border: red solid 1px');
    }else{
        formOK--;
        element.removeAttribute('style');
    }
}

const checkPattern = (element) => {
    const pattern = new RegExp(element.getAttribute('pattern'), 'i');
    console.log(pattern);
    const value = element.value;
    if (!pattern.test(value)){
        formOK++;
        element.setAttribute('style','border: yellow solid 1px');
    }else{
        formOK--;
        element.removeAttribute('style');
    }
};

const form = document.querySelector('form');

form.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    formOK = 0;
    checkAttribute(inputs,'required', checkEmpty);
    checkAttribute(inputs, 'pattern', checkPattern);
    if(formOK === -8){ 
        form.submit();
    }
    console.log(formOK);
});

