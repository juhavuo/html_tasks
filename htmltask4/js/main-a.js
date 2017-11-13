// Create function 'showImages' which
// adds the loaded HTML content to <ul> elemens
'use strict'

const showImages = () => {
    const ul = document.querySelector('ul');
    fetch('images.html').then((response) => {
        return response.text();
    }).then((text) => {
        ul.innerHTML = text;
    });
}

showImages();