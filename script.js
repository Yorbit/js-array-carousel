const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg", "img/07.jpg", "img/08.jpg", "img/09.jpg", "img/10.jpg"]


const iContainer = document.getElementById('i-container');
let imageActive = 0;

for (let index = 0; index < images.length; index++) {

    const newImg = document.createElement('img');

    newImg.classList.add('block');

    newImg.setAttribute('src', images[index]);

    if (index != 0) {

        newImg.classList.add('d-none');
    }

    iContainer.append(newImg);

}

