var carouselIndex = 0;
showCarousel();

function showCarousel() {
  var i;
  var carousel = document.getElementsByClassName("myCarousel");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }
  carouselIndex++;
  if (carouselIndex >carousel.length) {carouselIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carousel[carouselIndex-1].style.display = "block";
  dots[carouselIndex-1].className += " active";
  setTimeout(showCarousel, 3000); 
}
