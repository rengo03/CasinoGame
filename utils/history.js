
const initialImage = document.querySelector('.image-placeholder');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');

//construct a array that will retain the book type according to the legend below;
//                        0 1 2 3 4
let history = [0,0,0,0,0];
//0=noResultYet 
//1=spades
//2=heart
//3=clubs
//4=diamond

//we construct a function that moves from left to right one position each element of the array;
function arrayProps(){
    if(clubs === true){
        let position = 5;
        for(let i = 4; i > 0; i--){
            history[i] = history[i-1];
            changeImage(history[i], position);
            position--;
        }
        history[0] = 3;
        changeImage(history[0], 1);
    }else if(heart === true){
        let position = 5;
        for(let i = 4; i > 0; i--){
            history[i] = history[i-1];
            changeImage(history[i], position);
            position--;
        }
        history[0] = 2;
        changeImage(history[0], 1);
    }else if(diamond === true){
        let position = 5;
        for(let i = 4; i > 0; i--){
            history[i] = history[i-1];
            changeImage(history[i], position);
            position--;
        }
        history[0] = 4;
        changeImage(history[0], 1);
    }else if(spades === true){
        let position = 5;
        for(let i = 4; i > 0; i--){
            history[i] = history[i-1];
            changeImage(history[i], position);
            position--;
        }
        history[0] = 1;
        changeImage(history[0], 1);
    }
}

//we build a function that changes the image depending on the type of book retained in history
function changeImage(x, position){
    if(x === 0){
        if(position === 5){
        img5.innerHTML= `<img src="images/back-card.jpg" alt="">`;
        } else if(position === 4){
            img4.innerHTML= `<img src="images/back-card.jpg" alt="">`;
        } else if(position === 3){
            img3.innerHTML= `<img src="images/back-card.jpg" alt="">`;
        } else if(position === 2){
            img2.innerHTML= `<img src="images/back-card.jpg" alt="">`;
        } 
    }
    else if(x === 1){
        if(position === 5){
        img5.innerHTML= `<img src="images/spades.jpg" alt="">`;
        } else if(position === 4){
            img4.innerHTML= `<img src="images/spades.jpg" alt="">`;
        } else if(position === 3){
            img3.innerHTML= `<img src="images/spades.jpg" alt="">`;
        } else if(position === 2){
            img2.innerHTML= `<img src="images/spades.jpg" alt="">`;
        } else if(position === 1){
            img1.innerHTML= `<img src="images/spades.jpg" alt="">`;
        }
    }
    else if(x === 2){
        if(position === 5){
        img5.innerHTML= `<img src="images/heart.jpg" alt="">`;
        } else if(position === 4){
            img4.innerHTML= `<img src="images/heart.jpg" alt="">`;
        } else if(position === 3){
            img3.innerHTML= `<img src="images/heart.jpg" alt="">`;
        } else if(position === 2){
            img2.innerHTML= `<img src="images/heart.jpg" alt="">`;
        } else if(position === 1){
            img1.innerHTML= `<img src="images/heart.jpg" alt="">`;
        }
    }
    else if(x === 3){
        if(position === 5){
        img5.innerHTML= `<img src="images/clubs.jpg" alt="">`;
        } else if(position === 4){
            img4.innerHTML= `<img src="images/clubs.jpg" alt="">`;
        } else if(position === 3){
            img3.innerHTML= `<img src="images/clubs.jpg" alt="">`;
        } else if(position === 2){
            img2.innerHTML= `<img src="images/clubs.jpg" alt="">`;
        } else if(position === 1){
            img1.innerHTML= `<img src="images/clubs.jpg" alt="">`;
        }
    }
    else if(x === 4){
        if(position === 5){
        img5.innerHTML= `<img src="images/diamond.jpg" alt="">`;
        } else if(position === 4){
            img4.innerHTML= `<img src="images/diamond.jpg" alt="">`;
        } else if(position === 3){
            img3.innerHTML= `<img src="images/diamond.jpg" alt="">`;
        } else if(position === 2){
            img2.innerHTML= `<img src="images/diamond.jpg" alt="">`;
        } else if(position === 1){
            img1.innerHTML= `<img src="images/diamond.jpg" alt="">`;
        }
    }
}