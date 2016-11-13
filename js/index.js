var images = document.getElementsByTagName('img');
var imgArea = document.getElementById('slider');
var btnNext = document.getElementById('next');
var btnPrev = document.getElementById('previous');
var i = 0;
btnNext.onclick = function () {
    images[i].className = '';
    i++;
    if(i >= images.length){
        i = 0;
    }
    images[i].classList.add('active');
}
btnPrev.onclick = function () {
    images[i].className = '';
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].classList.add('active');
}

// console.dir(images);
// console.dir(imgArea);
// console.dir(btnNext);
// console.dir(btnPrev);