(function($){
  'use-strict';

  /*-------------------------------------------------------------------------------
      Open Search
  -------------------------------------------------------------------------------*/
  $(".hm-trigger-search").on('click', function(){
    $('body').toggleClass('hm-search-open');
  });

  /*-------------------------------------------------------------------------------
  	  Home Page Zero Slider
	-------------------------------------------------------------------------------*/
  $(".hm-col-expandable").on('click', function(){
    if($(this).hasClass('expanded')){
      $(this).removeClass('expanded');
      return;
    }
    $(".hm-col").removeClass('expanded');
    $(this).addClass('expanded');
  });

  /*-------------------------------------------------------------------------------
  	  Product Owl Carousel
	-------------------------------------------------------------------------------*/
  if($(".product-slider").length > 0){
    //2 Cols
    $('.has-slider').owlCarousel({
      loop: false,
      margin:15,
      nav:true,
  	  dots:false,
  	  autoplay:false,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:4}
      }
  	});

    //3 Cols
    $('.three-cols-slider').owlCarousel({
      loop: false,
      margin:15,
      nav:true,
  	  dots:false,
  	  autoplay:false,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:3}
      }
  	});

    //2 Cols
    $('.two-cols-slider').owlCarousel({
      loop: false,
      margin:15,
      nav:true,
  	  dots:false,
  	  autoplay:false,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:2}
      }
  	});
  }


  /*-------------------------------------------------------------------------------
  	  Home Page Owl Carousel
	-------------------------------------------------------------------------------*/
  if($(".hm-banner").length > 0){
    $('#home-banner').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
  	  dots:false,
  	  autoplay:true,
      autoplayTimeout:14000,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
      }
  	});
  }

  /*-------------------------------------------------------------------------------
  	  Home Page Shop Banner
	-------------------------------------------------------------------------------*/
  if($(".hm-shop-banner").length > 0){
    $('#hm-shop-banner').owlCarousel({
      loop:false,
      margin:0,
      nav:false,
  	  dots:true,
  	  autoplay:true,
      autoplayTimeout:5000,
      responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
      }
  	});
  }

  /*-------------------------------------------------------------------------------
  	  Cookies
	-------------------------------------------------------------------------------*/
  function setCookie(cname, cvalue){
    document.cookie = cname + "=" + cvalue + ";";
  }

  //Return a particular cookie
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //Checks if a cookie exists
  function checkCookie(cookieToCheck){
    var cookie = getCookie(cookieToCheck);
    if (cookie != "") {
      return true;
    }
    return false;
  }

  /*-------------------------------------------------------------------------------
  	  Sticky Header
	-------------------------------------------------------------------------------*/
  var header = $(".can-sticky");
  var sticky = $(header).height();
  function doSticky(){
    if(window.pageYOffset > sticky) {
      $(header).addClass("sticky");
    } else {
      $(header).removeClass("sticky");
    }
  }

  /*-------------------------------------------------------------------------------
  	  Promo Offer Modal
	-------------------------------------------------------------------------------*/
  function doPromoWindow(){
    if(window.pageYOffset > window.innerHeight/2 && !checkCookie('promo_offer')){
      $(".hm-promo-offer-window").addClass('hm-visible-promo');
    }
  }

  /*-------------------------------------------------------------------------------
  	  Promo Offer Header Strip
	-------------------------------------------------------------------------------*/
  if(!checkCookie('promo_code')){
    $(".hm-promo-offer-strip").addClass('hm-visible-promo');
  }

  /*-------------------------------------------------------------------------------
  	  Init Tooltips
	-------------------------------------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();

  /*-------------------------------------------------------------------------------
  	  Quantity Add/Subtract
	-------------------------------------------------------------------------------*/
  $('.plus').on('click', function () {
  	$(this).prev().val(+$(this).prev().val() + 1);
  });
  $('.minus').on('click', function () {
		if ($(this).next().val() > 1) {
    	if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
  });

  /*-------------------------------------------------------------------------------
  	  Burger Menu Expand
	-------------------------------------------------------------------------------*/
  $(".hm-nav-toggler").on('click', function(){
    $('body').toggleClass('hm-drawer-open');
    if($('body').hasClass('hm-drawer-open')){
      $(".hm-drawer .hm-nav-item").each(function(i) {
        $(this).delay(100 * i).fadeIn(500);
      });
    }
  });

  /*-------------------------------------------------------------------------------
  	  Countdown
	-------------------------------------------------------------------------------*/
  $("#countdown-duration")
 .countdown("2022/01/01", function(event) {
   $("#days").text( event.strftime('%D') );
   $("#hours").text( event.strftime('%H') );
   $("#minutes").text( event.strftime('%M') );
   $("#seconds").text( event.strftime('%S') );
 });

 /*-------------------------------------------------------------------------------
 	  Prevent Popper from using its own X-placement for placing Dropdowns
 	-------------------------------------------------------------------------------*/
 Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;

 /*-------------------------------------------------------------------------------
 	  Perfect Scrollbar
 	-------------------------------------------------------------------------------*/
 var psAside = function(){
   new PerfectScrollbar($('.hm-drawer')[0], {
     maxScrollbarLength : 700,
     wheelPropagation : true,
     wheelSpeed : 0.5
   });
 }
 if($(".hm-drawer").length > 0){
   psAside();
 }

 /*-------------------------------------------------------------------------------
 	  Close Promo Codes
 	-------------------------------------------------------------------------------*/
 $(".hm-close-container").on('click', function(){
   var $this = $(this);
   $this.parent().hide();
   if($this.hasClass('hm-close-code')){
     setCookie('promo_code', 'true');
   }else if($this.hasClass('hm-close-offer')){
     $(".hm-promo-offer-window").removeClass('hm-visible-promo');
     setCookie('promo_offer', 'true');
   }
 });

 //On scroll events
 $(window).on('scroll', function(){

   doSticky();
   doPromoWindow();

 });

 /*-------------------------------------------------------------------------------
 	  Price Range Slider
 	-------------------------------------------------------------------------------*/
 if($("#price_range").length > 0){
   $("#price_range").ionRangeSlider({
     type: "double",
     grid: false,
     min: 0,
     max: 1000,
     from: 200,
     to: 800,
     prefix: "$"
   });
 }

 /*-------------------------------------------------------------------------------
 	  Video
 	-------------------------------------------------------------------------------*/
 if($(".popup-youtube").length > 0){
   $('.popup-youtube').magnificPopup({
   		type: 'iframe'
   	});
   	$('.popup-vimeo').magnificPopup({
   		type: 'iframe'
   	});
   	$('.popup-video').magnificPopup({
   		type: 'iframe'
   	});
 }

  /*-------------------------------------------------------------------------------
  	  Single Product Page Slider
	-------------------------------------------------------------------------------*/
 if($(".hm-product-img-slider").length > 0){
   $('.hm-focused-product').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.hm-product-slider'
  });
  $('.hm-product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.hm-focused-product',
    dots: false,
    infinite: false,
    focusOnSelect: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>'
  });

  $(window).resize(function(){
    $('.hm-product-slider')[0].slick.refresh();
  });

 }

})(jQuery);
