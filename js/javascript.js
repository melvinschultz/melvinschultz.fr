$(document).ready(function() {
  $('#burger').click(function(){
      $('#blocMenu').attr('class', '');
      $('#burger').hide(300);
  });
  $('#chevron').click(function(){
      $('#blocMenu').attr('class', 'fermer');
      $('#burger').show(300);
  });
  $('#blocMenu').mouseleave(function(){
    $('#blocMenu').attr('class', 'fermer');
    $('#burger').show(300);
  });
  $('.lien').click(function(){
      $('#blocMenu').attr('class', 'fermer');
      $('#burger').show(300);
  });
});


/* dans le 2eme [href=#] mettre le nom de l'id a exclure de la fonction smoothscroll */
$(function() {
  $('a[href*=#]:not([href=#fb],[href=#tw],[href=#ldin])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -10
        }, 2000);
        return false;
      }
    }
  });
});
