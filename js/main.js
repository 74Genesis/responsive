$(document).ready(function() {
	$(window).scroll(function() {
      var top = $(document).scrollTop();
      if (top > 200) {
      	$("header").addClass('header_scroll');
      } 
      else {
      	$("header").removeClass('header_scroll');
      };
   });
});