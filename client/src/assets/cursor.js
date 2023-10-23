window.addEventListener('mousemove', function (e) {
    document.getElementById('cursor').style.left = e.pageX;
    document.getElementById('cursor').style.top = e.pageY;
});
