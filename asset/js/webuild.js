let searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form');
let contactInfo = document.querySelector('.contact-info');
let nav = document.querySelector('.nav');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
    nav.classList.remove('active');
}


document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
    nav.classList.remove('active');


}

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.toggle('active')
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    nav.classList.remove('active');
}

document.querySelector('#close-info').onclick = () =>{
    contactInfo.classList.remove('active')
}

document.querySelector('#menu-btn').onclick = () =>{
  nav.classList.toggle('active');
  loginForm.classList.remove('active');
  contactInfo.classList.remove('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
 }

 var swiper = new Swiper(".home-slider", {
  loop:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
       640: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       991: {
         slidesPerView: 3,
       },
    },
 });
