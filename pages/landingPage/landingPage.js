const navbar = document.querySelector("#navbar");   
window.onscroll = () => {
    if (window.scrollY > 300 && window.innerWidth < 768) {
       navbar.classList.add("nav-active");
    } else {
        navbar.classList.remove('nav-active');
    }
};

// caurosel
/*
    Carousel
*/

$(".carousel.carousel-multi-item.v-2 .carousel-item").each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < 4; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));
  }
});