

var btn = document.getElementsByTagName('button')[0];

var left = document.getElementsByClassName('bl-cir-left')[0];
var lfm = document.getElementsByClassName('eye-left')[0];

var right = document.getElementsByClassName('bl-cir-right')[0];
var rgm = document.getElementsByClassName('eye-right')[0];

btn.addEventListener('mouseover', () => {

    lfm.style.backgroundImage = 'url("assets/image/heart.png")';
    lfm.style.backgroundSize = '80% 80%';
    lfm.style.backgroundPosition = 'bottom';
    lfm.style.backgroundRepeat = 'no-repeat';
    left.style.display = 'none';

    rgm.style.backgroundImage = 'url("assets/image/heart.png")';
    rgm.style.backgroundSize = '80% 80%';
    rgm.style.backgroundPosition = 'bottom';
    rgm.style.backgroundRepeat = 'no-repeat';
    right.style.display = 'none';
});

btn.addEventListener('mouseout', () => {

    
    left.style.display = 'block';
    lfm.style.backgroundImage = 'none';
    right.style.display = 'block';
    rgm.style.backgroundImage = 'none';
    
});

var up = document.getElementsByClassName('after-up')[0];

btn.addEventListener('click', () => {

    up.style.top = '-100vh';

});

var mup = document.getElementsByClassName('main-site')[0];

btn.addEventListener('click', () => {

    mup.style.top = '0%';

});