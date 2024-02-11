const hamburger = document.getElementById("hamburger")
const navlist = document.getElementById("navlist")

hamburger.addEventListener("click", ()=>{
    navlist.classList.toggle("navlist-active")
})



// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   autoplay:{
//     delay: 2300
//   },
//   breakpoints:{
//     1200:{
//         slidesPerView:3,
//     }, 
//     800:{
//         slidesPerView:2,
//     },
//     575:{
//         slidesPerView:1,
//     }
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


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
