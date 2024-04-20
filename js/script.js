
/* Nav Section Start */

const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

allEventListners();

function allEventListners() {
 
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

/* Nav Section End */

/* Home Slider Start */

$('.home-section').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite:true,
    dots:false,
    arrows:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        }
      }
    ]
  })

/* Home Slider End */

/* Testimonial Section Start */

$('.testimonial-section').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: false,
    speed:1500,
    autoplaySpeed: 2500,
    infinite:true,
    dots:false,
    arrows:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
})

/* Testimonial Section End */

/* Team Section Start */

$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots:false,
  arrows:false, 
  infinite:true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow:2,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2500,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow:1,
      slidesToScroll:1,
      autoplay: true,
      autoplaySpeed: 2500,
      }
    }
  ]
})

/* Team Section End */

/* scroll to top button start */

myButton = document.getElementById("myBtn")
window.onscroll = function(){
scrollFunction()
}
function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  myButton.style.display = "block"
}else{
  myButton.style.display = "none"
}
}

function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0 
}

/* scroll to top button end */

/* Counter Section Start */

$('.count').counterUp({
    delay:10,
    time:3000
})

/* Counter Section End */

// aos

AOS.init();


