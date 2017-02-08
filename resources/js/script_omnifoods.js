$(document).ready(function() {
  
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });
});



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