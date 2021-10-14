function conclusion(){
    if(rosu === rosuAles && negru ===negruAles){
        score.innerHTML = parseInt(score.innerHTML) * 2;
        double.innerHTML = parseInt(double.innerHTML) * 2
    }
    else{
        score.innerHTML = '0';
        double.style.setProperty('font-size', '2rem' );
        double.innerHTML = 'Retry:D';
        money.innerHTML = '';
        black.disabled = true;
        red.disabled = true;
    }
}