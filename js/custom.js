// initializing service slider
$('.service-slider').slick({
  dots: true,
  arrows:true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//initializing launched project slider
$('.launchedprojects-slider').slick({
  dots: true,
  arrows:true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// initializing team slider
$('.sliders-row').slick({
  dots: true,
  arrows:true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//initializing launched rating slider
$('.our-reviews-slider').slick({
  dots: true,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

//initializing launched alithemes-slider
$('.alithemes-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//menu toggle 
$( ".responsive-button" ).click(function(){
  $( ".nav" ).slideToggle();
});
function myFunction(x) {
  x.classList.toggle("change");
}
// scroll 
$('html, body').ready(function () {
  $(".testimonial-button").click(function () {
      alert("Page not avaliable");
  });
})
$(".Home").click(function () {
  $('html, body').animate({
      scrollTop: $(".banner").offset().top
  }, 1000);
});
$(".About").click(function () {
  $('html, body').animate({
      scrollTop: $(".aboutus-row").offset().top
  }, 1000);
});
$(".Service").click(function () {
  $('html, body').animate({
      scrollTop: $(".services").offset().top
  }, 1000);
});
$(".Projects").click(function () {
  $('html, body').animate({
      scrollTop: $(".launched-projects").offset().top
  }, 1000);
});
$(".Team").click(function () {
  $('html, body').animate({
      scrollTop: $(".teams-row").offset().top
  }, 1000);
});
$(".Testimonials").click(function () {
  $('html, body').animate({
      scrollTop: $(".our-reviews-row").offset().top
  }, 1000);
});