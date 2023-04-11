
var rv = document.getElementsByClassName('rgt-vid')[0];

rv.addEventListener('mouseover', () => {

    rv.play();

});

rv.addEventListener('mouseout', () => {

    rv.pause();

});

var lv = document.getElementsByClassName('lft-vid')[0];

lv.addEventListener('mouseover', () =>{

    lv.play();

});

lv.addEventListener('mouseout', () =>{

    lv.pause();

});

var cur = document.getElementsByClassName('cursor')[0];

window.addEventListener('mousemove', (e) =>{

    cur.style.left = e.clientX + 'px';
    cur.style.top = e.clientY + 'px';

});