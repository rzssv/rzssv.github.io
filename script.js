let intro = document.querySelector('.intro');
let txt = document.querySelector('.intro-txt');

window.addEventListener('DOMContentLoaded', () => {
    txt.classList.add("active");
    setTimeout(function () { txt.classList.remove("active") }, 2000);
    setTimeout(function () { txt.classList.add("fade") }, 1000);
    setTimeout(function () { intro.style.top = "-100vh" }, 1500);
});

let nav = document.getElementById("mobile-nav");
function mobileNavOpen() {
    nav.classList.add("active");
}
function mobileNavClose() {
    nav.classList.remove("active");
}

let setting = document.getElementById("settings");
function settingsOpen() {
    setting.classList.add("active");
}
function settingsClose() {
    setting.classList.remove("active");
}

let body = document.body;
let header = document.getElementsByTagName("header")[0];
let burger = document.getElementById("hamburger");
const collection = document.getElementsByClassName("close");
const columns = document.getElementsByClassName("column");
let footer = document.getElementsByTagName("footer")[0];
let slideshowcon = document.getElementsByClassName("slideshow-container")[0];
let headerTxt = document.getElementById("header");
let imgTxt = document.getElementsByClassName("image-text");
let numberTxt = document.getElementsByClassName("number");
function darkMode() {
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    setting.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    burger.classList.toggle("dark-mode");
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < columns.length; i++) {
        columns[i].classList.toggle("dark-mode");
    }
    footer.classList.toggle("dark-mode");
    slideshowcon.classList.toggle("dark-mode");
    headerTxt.classList.toggle("dark-mode");
    for (let i = 0; i < imgTxt.length; i++) {
        imgTxt[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < numberTxt.length; i++) {
        numberTxt[i].classList.toggle("dark-mode");
    }
}

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        'linear'
    )
})

let topButton = document.getElementById("topButton");
function userScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.opacity = 1;
        topButton.style.cursor = "pointer";
    } else {
        topButton.style.opacity = 0;
        topButton.style.cursor = "default";
    }
}
function gotoTop() {
    $(document.body).animate({scrollTop: 0});
    $(document.documentElement).animate({scrollTop: 0});
}

window.onscroll = function() {userScroll()};

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline-block";
  dots[slideIndex-1].className += " active";
}