$(document).ready(function () {
	// ===========Featured Owl Carousel============
	if ($(".owl-carousel-featured").length > 0) {
		$(".owl-carousel-featured").owlCarousel({
			items: 4,
			lazyLoad: true,
			pagination: false,
			autoPlay: 2000,
			navigation: true,
			navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
			stopOnHover: true
		});
	}
});

$(document).ready(function () {
		// ===========Tooltip============
  	$('[data-toggle="tooltip"]').tooltip();
      });

$(document).ready(function () {
	// ===========Categories List Page============
	if ($(".categories-list-page").length > 0) {
		$(".categories-list-page").owlCarousel({
			items: 3,
			lazyLoad: true,
			pagination: false,
			navigation: true,
			navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
			autoPlay: 2000,
			stopOnHover: true
		});
	}
});

$(function() {
	// ===========Categories Smooth Scroll============	
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
	// ===========Back To Top============	
	$('body').append('<a href="#" id="back-to-top" data-toggle="tooltip" data-placement="left" title="Back To Top" class="btn btn-info btn-md"><i class="fa fa-chevron-up"></i></a>');
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	}); 
		$('#back-to-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
		});
});


$(document).ready(function(){
	// ===========Fixed Categories Nav============	
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('.fixed-categories-nav').fadeIn();
		} else {
			$('.fixed-categories-nav').fadeOut();
		}
	}); 
		$('.fixed-categories-nav').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
		});
});






$(document).ready(function() {
	// ===========Single Ads Slider============	
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
	singleItem : true,
	slideSpeed : 1000,
	pagination: false,
	navigation: true,
	navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	autoPlay: 1500,
	afterAction : syncPosition,
	responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
	items : 4,
	itemsDesktop      : [1199,10],
	itemsDesktopSmall     : [979,10],
	itemsTablet       : [768,8],
	itemsMobile       : [479,4],
	pagination:false,
	responsiveRefreshRate : 100,
	afterInit : function(el){
	  el.find(".owl-item").eq(0).addClass("synced");
	}
  });
 
  function syncPosition(el){
	var current = this.currentItem;
	$("#sync2")
	  .find(".owl-item")
	  .removeClass("synced")
	  .eq(current)
	  .addClass("synced")
	if($("#sync2").data("owlCarousel") !== undefined){
	  center(current)
	}
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
	e.preventDefault();
	var number = $(this).data("owlItem");
	sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
	var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
	var num = number;
	var found = false;
	for(var i in sync2visible){
	  if(num === sync2visible[i]){
		var found = true;
	  }
	}
 
	if(found===false){
	  if(num>sync2visible[sync2visible.length-1]){
		sync2.trigger("owl.goTo", num - sync2visible.length+2)
	  }else{
		if(num - 1 === -1){
		  num = 0;
		}
		sync2.trigger("owl.goTo", num);
	  }
	} else if(num === sync2visible[sync2visible.length-1]){
	  sync2.trigger("owl.goTo", sync2visible[1])
	} else if(num === sync2visible[0]){
	  sync2.trigger("owl.goTo", num-1)
	}
	
  }
 
});

