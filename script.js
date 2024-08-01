 let menu = document.querySelector('#menu-bars');
 let navbar = document.querySelector('.navbar');

 menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
 }


   var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop:true,
      autoplay:{
        delay:3000,
        disableOnInteraction:false,
      }
    });
 
 window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

 }

 var swiper = new Swiper(".review-slider", {
  slidesPreview: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPreView: 1,
        },
      700: {
        slidesPreView: 2,
       },
      1050: {
        slidesPreView: 3,
  },
},
autoplay:{
  delay:5000,
  disableOnInteraction:false,
}
});
    