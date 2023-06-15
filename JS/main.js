$('.carousel').carousel({
    interval: false
   
  })

  let nav = document.querySelector('.navigation');
  window.addEventListener('scroll', function(){
      let position = window.scrollY > 100;
      nav.classList.toggle('fixed-top', position);
      nav.classList.toggle("active", position);
  });