// mobile side menu
$(document).ready(function(){
  $('.sidenav').sidenav();
});

//parallax hero image
$(document).ready(function(){
  $('.parallax').parallax();
});

// hide nav on landing page only
$(window).scroll(function() {
  if ($(this).scrollTop() >= $('#main').offset().top) {
    $('#navbar-fixed').removeClass("nav-hide");
  }else {
    $('#navbar-fixed').addClass("nav-hide");
  }
});

// close sidenav on click
$(document).ready(function(){
    $('.sidenav')
        .sidenav()
        .on('click tap', 'li a', () => {
            $('.sidenav').sidenav('close');
        });
});

// hero image full screen sizing
$(document).ready(function($){
 // Defining a function to set size for #hero
	function fullscreen(){
		$('#hero').css({
            width: $(window).width(),
            height: $(window).height()
        });
	}
  
	fullscreen();

  // Run the function in case of window resize
  $(window).resize(function() {
       fullscreen();
    });

});
