// acordeon
$(document).ready(function() {
    $('.accordion ul').css({display:"none"});    
    $('.accordion:has("ul")').click(function() {
            if ($("ul",this).css("display") == "none") {
                    
                    $("ul",this).slideDown(1000);
                } else {
                    $(".accordion ul").slideUp(1000);
                }
                return true;
        });
});

/*prev = document.querySelector("#prev");
next = document.querySelector("#nexty");
slideImg = document.querySelector('.slider-img img')
imgLi = document.querySelector('.slider-small-img li img')

next.onclick = function () {
    let currentSlide = document.querySelector('.slider .slider-small-img li.active ');
    currentSlide.classList.remove('active');
    
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        nextSlide.classList.add('active');
    } else {
        nextSlide = document.querySelector('.slider .slider-small-img li');
        nextSlide.classList.add('active');
    }

    slideImg.src = nextSlide.querySelector('img').src;
}
prev.onclick = function () {
    let currentSlide = document.querySelector('.slider .slider-small-img li.active ');
    currentSlide.classList.remove('active');
    
    let prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
        prevSlide.classList.add('active');
    } else {
        prevSlide = document.querySelector('.slider .slider-small-img li:last-child');
        prevSlide.classList.add('active');
    }

    slideImg.src = prevSlide.querySelector('img').src;
}
imgLi.onclick = function () {
    let currentSlide = document.querySelector('.slider .slider-small-img li.active ');
    currentSlide.classList.remove('active');
    
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        nextSlide.classList.add('active');
    } else {
        nextSlide = document.querySelector('.slider .slider-small-img li');
        nextSlide.classList.add('active');
    }

    slideImg.src = nextSlide.querySelector('img').src;
}*/

// jQuery
slider = $('.slider');
$('#prev').on('click', function () {
    let prev = $('.slider .slider-small-img li.active').prev();
    $('.slider .slider-small-img li.active').removeClass('active');
    if (!prev.length) {
        prev = $('.slider .slider-small-img li:last-child');
    }
    prev.addClass('active');
    $('.slider-img img').attr('src', prev.find('img').attr('src'));
});

$('#nexty').on('click', function () {
    let next = $('.slider .slider-small-img li.active').next();
    $('.slider .slider-small-img li.active').removeClass('active');
    if (!next.length) {
        next = $('.slider .slider-small-img li:first-child');
    }
    next.addClass('active');
    $('.slider-img img').attr('src', next.find('img').attr('src'));
});

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

