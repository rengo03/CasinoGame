const imagePlaceholder = document.querySelector('#image-placeholder');

const red = document.querySelector('#red');
const black = document.querySelector('#black');
const money = document.querySelector('.money');
let rosuAles = false;
let negruAles = false;
let rosu = false;
let negru = false;

red.addEventListener('click', function(){
    rosuAles = true;
    negruAles = false;

    randomImage();
    conclusion();
    arrayProps();

})

black.addEventListener('click', function(){
    negruAles = true;
    rosuAles = false;
    
    randomImage();
    conclusion();
    arrayProps();

})