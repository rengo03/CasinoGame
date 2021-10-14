const imagePlaceholder = document.querySelector('#image-placeholder');

const red = document.querySelector('#red');
const black = document.querySelector('#black');
const money = document.querySelector('.money');
let rosuAles = false;
let negruAles = false;
let rosu = false;
let negru = false;

let clikNumber = 0;

red.addEventListener('click', function(){
    rosuAles = true;
    negruAles = false;

    randomImage();
    conclusion();

    if(clikNumber===0){
        if(clubs === true){
            history = [3,0,0,0,0];
        } else if(heart === true){
            history = [2,0,0,0,0];
        }else if(spades === true){
            history = [1,0,0,0,0];
        }else if(diamond === true){
            history = [4,0,0,0,0];
        }
    }

    if(clikNumber>0){
        arrayProps();
    }
    clikNumber++;
})

black.addEventListener('click', function(){
    negruAles = true;
    rosuAles = false;
    
    randomImage();
    conclusion();

    if(clikNumber===0){
        if(clubs === true){
            history = [3,0,0,0,0];
        } else if(heart === true){
            history = [2,0,0,0,0];
        }else if(spades === true){
            history = [1,0,0,0,0];
        }else if(diamond === true){
            history = [4,0,0,0,0];
        }
    }

    if(clikNumber>0){
        arrayProps();
    }
    clikNumber++;
})