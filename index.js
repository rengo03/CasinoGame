const min = 10;
const max = 100;
let score = document.querySelector('#credit');
let double = document.querySelector('#double');
//random credit generation in the range of 10-99$
let credit = Math.random()*(max-min+1)+min;
credit = parseInt(credit);
score.innerHTML = credit;
double.innerHTML = credit*2;
// Refresh = retry
const retry = document.querySelector('#retry');

retry.addEventListener('click', function(){
    window.location.reload();
})
