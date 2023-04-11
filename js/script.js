
// aos code here

AOS.init();

// type js css here

var c = document.querySelector('.ck-text');

window.addEventListener('load', ()=>{

    c.classList.add('text-ani');

});

new Typed('#name',{
    strings : ['Chanchal_Kumar'],
    typeSpeed : 150,
    delaySpeed : 100,
    backSpeed : 100,
    loop : true
});

// change theme code here

var th = document.getElementsByTagName('body')[0];

var sun = document.getElementsByClassName('fa-sun')[0];

var moon = document.getElementsByClassName('fa-moon')[0];

sun.addEventListener('click', ()=> {

    th.classList.add('theme');

    sun.style.display = 'none';

    moon.style.display = 'block';

});

moon.addEventListener('click', ()=> {

    th.classList.remove('theme');

    sun.style.display = 'block';

    moon.style.display = 'none';

});

// portfolio all responsive button code here

$(document).ready(function (){

    $('#a').click(function (){
        
        $('.all').css('display','block');

    });

    $('#r').click(function (){
        
        $('.all').not('.res').css('display','none');

    });

});