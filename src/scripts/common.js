'use strict';
/*
function openContent (target) {
    var wrapper = document.getElementsByClassName(target)[0];

    if (!hasClass(wrapper, 'open')) { wrapper.className += ' open'; }

    window.onclick = function(event) {
        if (event.target == wrapper) {
            wrapper.classList.remove('open');
        }
    }
}

function closeButton (target) {    
    var wrapper = document.getElementsByClassName(target)[0];
    
    wrapper.classList.remove('open');
}

function getIndex(item, set) {   
    var list = item.parentNode.parentNode.getElementsByTagName("a");
    var listLenght = list.length;
    var index;
    
    if (typeof(set)==='undefined') set = false;
    
    for (var i = 0; i < listLenght; i++) {
        if (list[i] == item) {
            index = i;
        }
    }

    for (var i = 0; i < listLenght; i++) {
        if (i <= index && set) {
            if (!hasClass(list[i], 'active')) { list[i].className += ' active'; }
        } else {
            list[i].classList.remove('active');
        }
    }

    if (set == false) { item.className += ' active'; }
}

function hasClass(obj, classy) {
    return (' ' + obj.className + ' ').indexOf(' ' + classy + ' ') > -1;
}

var slideIndex = 1;
showSlides(slideIndex);

function slideArrows(dir) {
    showSlides(slideIndex += dir);
}

function currentSlide(dir) {
    showSlides(slideIndex = dir);
}

function showSlides(dir) {
    var slides = document.getElementsByClassName("slide");
    var i;
    
    if (dir > slides.length) { slideIndex = 1 } 
    if (dir < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active')
        }
    
    if (!hasClass(slides[slideIndex-1], 'active')) { slides[slideIndex-1].className += ' active'; }
}
*/