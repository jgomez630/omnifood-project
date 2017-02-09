
/*For Sticky Nav*/
$(document).ready(function() {
  
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });
});

/*Scroll on buttons*/
$('.js--scroll-to-plans').click(function(){
  $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
});

$('.js--scroll-to-start').click(function(){
  $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
});

/*Navigation scroll*/



/*var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})*/




/* jQuery test
$(document).ready(function(){
  
  $('h1').click(function(){
    $(this).css('background-color','#ff0000');  
  })
               
*/