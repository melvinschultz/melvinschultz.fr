// MENU
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

// SMOOTHSCROLL
/* dans le 2eme [href=#] mettre le nom de l'id a exclure de la fonction smoothscroll */
$(function() {
  $('a[href*=#]:not([href=#fb],[href=#tw],[href=#ldin])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -10
        }, 1500);
        return false;
      }
    }
  });
});

// INNER TEL
var tel = document.getElementById('phone');

tel.addEventListener('click', function() {
  this.innerHTML = '<i class="fa fa-phone"></i> ' + 'Non disponible';
},false);

// INNER MAIL
var mail = document.getElementById('adrMail');

mail.addEventListener('click', function() {
  this.innerHTML = '<i class="fa fa-envelope"></i> ' + 'melvinschultzpro@gmail.com';
},false);

// Changement d'affichage d'expérience pro
$(document).ready(function() {
  $('#pois').click(function(){
      $('#poissonnerie').css('display', 'flex');
      $('#laGrandeRecre').hide();
      $('#ecoleUpTo').hide();
  });
  $('#lgr').click(function(){
      $('#laGrandeRecre').css('display', 'flex');
      $('#poissonnerie').hide();
      $('#ecoleUpTo').hide();
  });
  $('#upto').click(function(){
      $('#ecoleUpTo').css('display', 'flex');
      $('#laGrandeRecre').hide();
      $('#poissonnerie').hide();
  });
});

// Changement affichage hobbies
$(document).ready(function() {
  $('#ext').click(function(){
      $('#spv').css('display', 'flex');
      $('#jeuxVideos').hide();
      $('#connected').hide();
      $('#sortir').hide();
      $('#voyage').hide();
      $('#cinephile').hide();
  });
  $('#game').click(function(){
      $('#jeuxVideos').css('display', 'flex');
      $('#spv').hide();
      $('#connected').hide();
      $('#sortir').hide();
      $('#voyage').hide();
      $('#cinephile').hide();
  });
  $('#pc').click(function(){
      $('#connected').css('display', 'flex');
      $('#spv').hide();
      $('#jeuxVideos').hide();
      $('#sortir').hide();
      $('#voyage').hide();
      $('#cinephile').hide();
  });
  $('#friends').click(function(){
      $('#sortir').css('display', 'flex');
      $('#spv').hide();
      $('#jeuxVideos').hide();
      $('#connected').hide();
      $('#voyage').hide();
      $('#cinephile').hide();
  });
  $('#globe').click(function(){
      $('#voyage').css('display', 'flex');
      $('#spv').hide();
      $('#jeuxVideos').hide();
      $('#connected').hide();
      $('#sortir').hide();
      $('#cinephile').hide();
  });
  $('#ticket').click(function(){
      $('#cinephile').css('display', 'flex');
      $('#spv').hide();
      $('#jeuxVideos').hide();
      $('#connected').hide();
      $('#sortir').hide();
      $('#voyage').hide();
  });
});
