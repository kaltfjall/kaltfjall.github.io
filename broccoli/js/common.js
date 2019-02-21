$(document).ready(function () {
	//form styler
	$('input').styler({});
	$('select').niceSelect();
	//slider
	$('.slider').slick({
		nextArrow: '<div class="slick-arrow-right"><span></span></div>',
		prevArrow: '<div class="slick-arrow-left"><span></span></div>',
		infinite: true,
		autoplay: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
					
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
					
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	// appending
	
	$(window).on('load', function () {
		// if ($(window).width() >= 1200) {
		$('.jsAppendLeft').addClass("a-hidden").viewportChecker({
			classToAdd: 'animated slideInLeft',
			classToRemove: 'a-hidden',
			offset: 150
		});
		$('.jsAppendRight').addClass("a-hidden").viewportChecker({
			classToAdd: 'animated slideInRight',
			classToRemove: 'a-hidden',
			offset: 150
		});
		$('.jsAppendUp').addClass("a-hidden").viewportChecker({
			classToAdd: 'animated slideInUp',
			classToRemove: 'a-hidden',
			offset: 150
		});
		// }
	});
	
	$('.jsAppendRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
		$(this).removeClass('animated slideInRight full-visible a-hidden');
		
		if ($(this).hasClass('cssMove')) {
			$(this).addClass('shake shake-constant shake-slow');
		}
	});
	$('.jsAppendLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
		$(this).removeClass('animated slideInLeft full-visible a-hidden');
		
		if ($(this).hasClass('cssMove')) {
			$(this).addClass('shake shake-constant shake-slow');
		}
	});
	
	//smoothscroll
	$(document).on("scroll", onScroll);
	var ancor = $('#nav a, .scrolTosec');
	$(function () {
		ancor.click(function () {
			$('#nav').removeClass('open');
			$('#hamburger').removeClass('open');
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&& location.hostname == this.hostname) {
				
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 125 //offsets for fixed header
					}, 1000);
					return false;
				}
			}
		});
		//Executed on page load with URL containing an anchor tag.
		if ($(location.href.split("#")[1])) {
			var target = $('#' + location.href.split("#")[1]);
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 125 //offset height of header here too.
				}, 1000);
				return false;
			}
		}
	});
	
	
	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		ancor.each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top - 500 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				ancor.removeClass("active");
				currLink.addClass("active");
			}
			else {
				currLink.removeClass("active");
			}
		});
	}
	
	$(window).on('load resize', function () {
		var header = $("header"),
		winWidth =$(window).width();
		if (winWidth > 1199) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= 500) {
					header.addClass("fixed animated slideInDown");
				} else {
					header.removeClass("fixed animated slideInDown");
				}
			});
		}
		else {
			header.removeClass("fixed animated slideInDown");
		}
	});
	
	$('.modal-content__table-butn .butn').on('click', function () {
		$(this).parents('.modal').modal('hide');
	});
	// floating placeholder
	$(".modal-input, textarea").each(function (e) {
		$(this).wrap('<fieldset></fieldset>');
		var tag = $(this).attr("placeholder");
		//var tag= $(this).data("tag");
		$(this).attr("placeholder", "");
		$(this).after('<label for="name">' + tag + '</label>');
	});
	
	$('.modal-input, textarea').on('blur', function () {
		if (!$(this).val() == "") {
			$(this).next().addClass('stay');
		} else {
			$(this).next().removeClass('stay');
		}
	});
	// phone mask
	$(function () {
		$('[name="phone"]').mask("+38-(000)-000-00-00", {
			clearIfNotMatch: true,
			
		});
		$('[name="phone"]').focus(function (e) {
			if ($('[name="tel"]').val().length == 0) {
				$(this).val('+38-(');
			}
		})
	});
	
	// calc
	
	
	$('#jsCalc').click(function () {
		validate = 1;
		$('.jq-number .jsNumberOnly').each(function () {
			if ($(this).val() == '') {
				validate = 0;
				$(this).focus();
				$(this).addClass('red_input');
				$(this).keyup(function () {
					$(this).removeClass('red_input');
				});
			}
			else {
				$(this).removeClass('red_input');
			}
		});
		if (validate == 1) {
			weight = $('#weight').val();
			height = $('#height').val();
			age = $('#age').val();
			sex = $('#sex').find('select').val() ;
			goal = $('#goal').find('select').val();
			activity = $('#activity').find('select').val();
			sumResult = parseInt(((((weight * 9.99 + height * 6.25 - age * 4.92) + 1 * sex) * goal) * activity), 10);
			
			$('#jsVal').text(sumResult);
			$('#result').modal('show');
			
		}
		else {}
	});
	
	// hamburger
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
		$('#nav').toggleClass('open');
	});
	
	// preloader
});
$(window).on('load',function () {
	$('.areaForLoader').fadeOut('slow',function(){$(this).remove();});
});