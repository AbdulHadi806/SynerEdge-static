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
  autoplaySpeed: 233300,
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
//initializing launched blogs-slider 
$('.blogs-slider').slick({
  dots: true,
  arrows:true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 233300,
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
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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
  }, 500);
});
$(".About").click(function () {
  $('html, body').animate({
      scrollTop: $(".aboutus-row").offset().top
  }, 500);
});
$(".Service").click(function () {
  $('html, body').animate({
      scrollTop: $(".services").offset().top
  }, 500);
});
$(".Projects").click(function () {
  $('html, body').animate({
      scrollTop: $(".launched-projects").offset().top
  }, 500);
});
$(".Team").click(function () {
  $('html, body').animate({
      scrollTop: $(".teams-row").offset().top
  }, 500);
});
$(".Testimonials").click(function () {
  $('html, body').animate({
      scrollTop: $(".our-reviews-row").offset().top
  }, 500);
});
$('.logo').click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});



const elements = document.querySelectorAll(".count");
  const options = {
    threshold: 0.5
  }
  let Observer = new IntersectionObserver(
    function (entries, Observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                    Counter: $(this).data('value')
                }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {                      
                    $(this).text(this.Counter.toFixed());
                }
            });
          });
         console.log(" I am visible on viewport")
          Observer.unobserve(entry.target);
        }
      });
    }, options);


  elements.forEach(element => {
    Observer.observe(element);
  })



// loader here
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
      "body").style.visibility = "hidden";
      document.querySelector(
      "#loader").style.visibility = "visible";
  } else {
      document.querySelector(
      "#loader").style.display = "none";
      document.querySelector(
      "body").style.visibility = "visible";
  }
};