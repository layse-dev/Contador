var CURRENT_NUMBER = document.getElementById('currentNumber');
var count = 0;

function increment () {
    count = count + 1;
    CURRENT_NUMBER.innerHTML = count;

    if (count >= 0) {
        CURRENT_NUMBER.style.color = 'white';
    }
    if (count >= 100) {
        count = 100;
        CURRENT_NUMBER.innerHTML = count;
    }
}

function decrement () {
    count = count - 1;
    CURRENT_NUMBER.innerHTML = count;

    if (count < 0) {
        CURRENT_NUMBER.style.color = '#FF242E';
    } 
}


