$(document).ready(function(){
	$('.header-navbar__btn').on('click',function(){
    $(this).toggleClass('header-navbar__btn--active');
    $('.header-navbar__list').stop(true, true).slideToggle(500);
    ('header-navbar__btn--active');
	});
});


$window.resize(function(){
  if ($window.width() > 768){
    $('header-navbar__list').removeAtr('style');
    $('header-navbar__btn').removeClass('header-navbar__btn--active');
  }

})