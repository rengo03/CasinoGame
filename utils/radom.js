let clubs = false;
let heart = false;
let diamond = false;
let spades = false;

function randomImage(){
    if(Math.random() <= 0.25){
        imagePlaceholder.innerHTML = '<img src="images/clubs.jpg" alt="">';
        setTimeout(function(){
            imagePlaceholder.innerHTML = '<img src="images/back-card.jpg" alt="">';
         }, 1000);
        negru = true;
        rosu = false;
        
        clubs = true;
        heart = false;
        diamond = false;
        spades = false;
    }
    else if((Math.random() > 0.25) && (Math.random() <= 0.5) ){
        imagePlaceholder.innerHTML = '<img src="images/diamond.jpg" alt="">';
        setTimeout(function(){
            imagePlaceholder.innerHTML = '<img src="images/back-card.jpg" alt="">';
         }, 1000);
        rosu = true;
        negru = false;

        clubs = false;
        heart = false;
        diamond = true;
        spades = false;
    }
    else if((Math.random() > 0.5) && (Math.random() <= 0.75)){
        imagePlaceholder.innerHTML = '<img src="images/heart.jpg" alt="">';
        setTimeout(function(){
            imagePlaceholder.innerHTML = '<img src="images/back-card.jpg" alt="">';
         }, 1000);
        negru = false;
        rosu = true;

        clubs = false;
        heart = true;
        diamond = false;
        spades = false;
    }
    else{
        imagePlaceholder.innerHTML = '<img src="images/spades.jpg" alt="">';
        setTimeout(function(){
            imagePlaceholder.innerHTML = '<img src="images/back-card.jpg" alt="">';
         }, 1000);
        rosu = false;
        negru = true;

        clubs = false;
        heart = false;
        diamond = false;
        spades = true;
    }
}