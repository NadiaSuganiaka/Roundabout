const imgCats = [
    'img/cat1.webp', 
    'img/cat2.jpg', 
    'img/cat3.jpg', 
    'img/cat4.webp', 
    'img/cat5.jpg', 
    'img/cat6.jpg', 
    'img/cat7.jpg'
];

let index = 0;

const image = document.querySelector('#image');
const buttonBack = document.querySelector('#back');
const buttonNext = document.querySelector('#next');

buttonBack.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = imgCats.length - 1;   
    }
    image.setAttribute('src', imgCats[index]);
});

buttonNext.addEventListener("click", () => {
    index++;
    if (index >= imgCats.length) {
        index = 0;   
    }
    image.setAttribute('src', imgCats[index]);

});

