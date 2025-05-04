

let date = new Date();
let time = date.getTime();
console.log(time)
const target = document.querySelector('.target');
const scoreHolder = document.getElementById('score');

target.addEventListener('click', () => {

    target.classList.add('hide');

    let score = JSON.parse(sessionStorage.getItem('score'));
    score += 1;
    sessionStorage.setItem('score', score);

    scoreHolder.textContent = "Score: " + score;


    setTimeout(function() 
    {
        target.classList.remove('hide')
    }, 50);
    
    let val = Math.floor(Math.random() * 90);
    let val2 = Math.floor(Math.random() * 90);
    console.log(val);
    console.log(val2);
    target.style.top = val + "%"
    target.style.left = val2 + "%"

});


window.addEventListener('DOMContentLoaded', () => {
    let score = JSON.parse(sessionStorage.getItem('score'));
    scoreHolder.textContent = "Score: " + score;
});