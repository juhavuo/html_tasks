'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
 <li>
 <figure>
 <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
 <figcaption>
 <h3>Title</h3>
 </figcaption>
 </figure>
 </li>
 */
// After the loop print the HTML into <ul> element using innerHTML.
const showImages = () => {
  const ul = document.querySelector('ul');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((image) => {
      html +=
          `<li>
          <figure>
            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
            <figcaption>
                <h3>${image.mediaTitle}</h3>
            </figcaption>
          </figure>
        </li>`;
    });
    ul.innerHTML = html;

    // no links
    imgActions();
  });
};

showImages();

const imgActions = () => {
    //select all a elements inside ul
    const popupThingy = document.querySelector('.lightbox');
    let image = document.querySelector('.lightbox img');
    const closingX = document.querySelector('.lightbox a');
    const main = document.querySelector('main');
    const aside = document.querySelector('aside');
    const header = document.querySelector('header');

    popupThingy.classList.add('hidden');
    const imgArray = document.querySelectorAll('img');
    imgArray.forEach((elementA) => {
      elementA.addEventListener("click", (clicky) => {
        clicky.preventDefault();
        popupThingy.classList.remove('hidden');
        image.src = elementA.src;
        main.classList.add('dim');
        aside.classList.add('dim');
        header.classList.add('dim');

      });
      closingX.addEventListener("click", (closy) => {
          popupThingy.classList.add('hidden');
          main.classList.remove('dim');
          aside.classList.remove('dim');
          header.classList.remove('dim');
      });
    });
    //loop links
    //when link is clicked
    //prevent default action
    //get href value of link
    //set modal image src to href value
    //display (use lightbox class)
}



