$(document).ready(function() {
	$(window).scroll(function() {
      var top = $(document).scrollTop();
      if (top > 200) {
      	$("header").addClass('header_scroll');
      } 
      else {
      	$("header").removeClass('header_scroll');
      };
      // если моб. меню открыто, закрыть
		if ($("nav.mobile-menu").hasClass('mob-menu-open')) {
	   	$("nav.mobile-menu").removeClass('mob-menu-open');
	   	$("nav.mobile-menu").animate({left:"-250px"},300);
	   	$("nav.mobile-menu .open-but").animate({left:"0px"},300);
		}
   });

// last-child для ie
$(".services .services__item:last-child").css("margin","0");

//моб. меню
$(".open-but").click(function() {
	if ($("nav.mobile-menu").hasClass('mob-menu-open')) {
   	$("nav.mobile-menu").removeClass('mob-menu-open');
   	$("nav.mobile-menu").animate({left:"-250px"},300);
   	$("nav.mobile-menu .open-but").animate({left:"0px"},300);
	} else {
   	$("nav.mobile-menu").addClass('mob-menu-open');
   	$("nav.mobile-menu").animate({left:"0px"},300);
   	$("nav.mobile-menu .open-but").animate({left:"250px"},300);
	};
});


});