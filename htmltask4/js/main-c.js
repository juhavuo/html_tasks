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
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const showImages = () => {
    const ul = document.querySelector('ul');
    fetch('images.json')
        .then((responce) => {
            return responce.json();
        })
        .then((json) => {
            json.forEach((image) => {
                let liE = document.createElement("li");
                let imgE = document.createElement("IMG");
                let figureE = document.createElement("figure");
                let figurecaptionE = document.createElement("figcaption");
                let figCE = document.createTextNode(image.mediaTitle);
                let aE = document.createElement("a");
                aE.href =`img/original/${image.mediaUrl}`;
                imgE.src =`img/thumbs/${image.mediaUrl}`;
                aE.appendChild(imgE);
                figurecaptionE.appendChild(figCE);
                figureE.appendChild(aE);
                figureE.appendChild(figurecaptionE);
                liE.appendChild(figureE);
                ul.appendChild(liE);
            });

        });
};

showImages();