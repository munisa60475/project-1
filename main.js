
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  slides: true,
  loop: false,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

});




let accord = document.getElementsByClassName("accordion");
let text = document.getElementsByClassName("ac-text");

for(let i=0; i<accord.length; i++){
  accord[0].onclick = function(){
    for(let a=0; a<accord.length;a++){
      if(a == i){
        accord[a].classList.toggle("bg")
      }else{
        text[a].classList.remove("show");
        accord[a].classList.remone("bg");

      }
    }

    text[i].classList.toggle("show");

  }
};



// karusel

var swiper = new Swiper(".mySwiperTwo", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: 
  {
    delay: 6000,
  },
  speed: 2000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




// son o'zgarishi

let value = document.querySelectorAll(".number");
let interval = 3000

value.forEach((value) => {

    let startValue = 0;
    let endValue = value.getAttribute("data-val");
    let duration = interval/endValue;

    let result = setInterval(function(){
        startValue += 1
        value.textContent = startValue

        if(startValue == endValue){
            clearInterval(result)
        }
    }, duration)
})





