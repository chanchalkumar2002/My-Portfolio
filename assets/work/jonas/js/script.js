

var c = document.getElementsByClassName('cursor')[0];

window.addEventListener('mousemove', (e) => {

    c.style.left = e.clientX + 'px';
    c.style.top = e.clientY + 'px';

});

