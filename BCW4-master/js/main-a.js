'use strict';

const firstp = document.querySelector('p');
const secondp = document.querySelector('p:nth-child(2)');
const thirdp = document.querySelector('p:nth-child(3)');

const changeButton = document.querySelector("#change");
changeButton.addEventListener('click', (evt) => {
    if(secondp.classList.contains('red')){
        secondp.classList.replace('red','blue');
    }else{
        secondp.classList.replace('blue','red');
    }
});

const addButton = document.querySelector("#add");
addButton.addEventListener('click', (evt) => {
    firstp.classList.add('red');
});

const toggleButton = document.querySelector("#toggle");
toggleButton.addEventListener('click', (evt) => {
    thirdp.classList.toggle('green');
});