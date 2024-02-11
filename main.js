const hamburger = document.getElementById("hamburger")
const navlist = document.getElementById("navlist")

hamburger.addEventListener("click", ()=>{
    navlist.classList.toggle("navlist-active")
})


$('.swiper-wrapper').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 578,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
