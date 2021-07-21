// header fixed after 1 block ========================================================================
if (window.matchMedia("(min-width: 826px)").matches) {
	/* the viewport is at least 826 pixels wide */
	// When the user scrolls the page, execute myFunction
	window.onscroll = function () { headerFixed(); };

	// Get the header
	var header = $(".header");

	// get the about (2nd section)
	var about = $(".about").offset();

	var introTopMargin = parseInt($('.intro').css("margin-top"), 10); // getting integer of top margin for 1 block
	var headerHeight = header.height(); // getting header height
	var introTopSumm = introTopMargin + headerHeight + 'px'; // add header height to margin of 1 block to stop drag

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function headerFixed() {
		if (window.pageYOffset > about.top - header.height()) {
			$(header).addClass("sticky");
			$('.intro').css("margin-top", introTopSumm);  // add margin-top (= header height) to intro, so header will  be showed smooth
		}
		else {
			if ($(header).hasClass("sticky")) {
				$(header).addClass("unsticky");
				setTimeout(function () {
					$(header).removeClass("sticky");
					$(header).removeClass("unsticky");
					$('.intro').css("margin-top", 0); // remove margin-top when scrolled back
				}, 1000);
			}
		}
	};
} else {
	/* the viewport is less than 400 pixels wide */
}

//  =======================================================================================

// video pop up btn 1 ========================================================================
var p = $(".popup__overlay");

$("#popup__toggle").click(function () {
	p.css("display", "block");
});
p.click(function (event) {
	e = event || window.event;
	if (e.target == this) {
		$(p).css("display", "none");
	}
});
$(".popup__close").click(function () {
	p.css("display", "none");
});

//video popup
function toggleVideo(state) {
	// if state == 'hide', hide. Else: show video
	var div = document.getElementById("popupVid");
	var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
	//div.style.display = state == 'hide' ? 'none' : '';
	func = state == "hide" ? "pauseVideo" : "playVideo";
	iframe.postMessage(
		'{"event":"command","func":"' + func + '","args":""}',
		"*"
	);
}

$("#popup__toggle").click(function () {
	p.css("visibility", "visible").css("opacity", "1");
});

p.click(function (event) {
	e = event || window.event;
	if (e.target == this) {
		$(p)
			.css("visibility", "hidden")
			.css("opacity", "0");
		toggleVideo("hide");
	}
});

$(".popup__close").click(function () {
	p.css("visibility", "hidden").css("opacity", "0");
	toggleVideo("hide");
});

// video pop up btn 2 ========================================================================

var p = $(".popup__overlay");

$("#popup__toggle2").click(function () {
	p.css("display", "block");
});
p.click(function (event) {
	e = event || window.event;
	if (e.target == this) {
		$(p).css("display", "none");
	}
});
$(".popup__close").click(function () {
	p.css("display", "none");
});

//video popup
function toggleVideo(state) {
	// if state == 'hide', hide. Else: show video
	var div = document.getElementById("popupVid");
	var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
	//div.style.display = state == 'hide' ? 'none' : '';
	func = state == "hide" ? "pauseVideo" : "playVideo";
	iframe.postMessage(
		'{"event":"command","func":"' + func + '","args":""}',
		"*"
	);
}

$("#popup__toggle2").click(function () {
	p.css("visibility", "visible").css("opacity", "1");
});

p.click(function (event) {
	e = event || window.event;
	if (e.target == this) {
		$(p)
			.css("visibility", "hidden")
			.css("opacity", "0");
		toggleVideo("hide");
	}
});

$(".popup__close").click(function () {
	p.css("visibility", "hidden").css("opacity", "0");
	toggleVideo("hide");
});


// about slider swiper  ==================================================================================
const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 0,
	autoSize: false,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-about__next',
		prevEl: '.slider-about__prev',
	},

});

// cart ================================================================================
//var removeCartItemButtons = document.getElementsByClassName('add-to-cart-btn');
//console.log(removeCartItemButtons);


// map ====================================================================================

function initMap() {
	var map_center = { lat: 48.508197, lng: 32.2668929 };
	if (window.innerWidth <= 1180) {
		var map_center = { lat: 48.508237, lng: 32.2672129 };
	}
	if (window.innerWidth <= 970) {
		var map_center = { lat: 48.508237, lng: 32.2639029 };
	}
	if (window.innerWidth <= 900) {
		var map_center = { lat: 48.508237, lng: 32.2648669 };
	}
	if ($('#map').length > 0) {
		//map
		var map = new google.maps.Map(
			document.getElementById('map'), {
			zoom: 17,
			center: map_center,
			disableDefaultUI: true,
			styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "weight": "2.00" }] }, { "featureType": "all", "elementType": "geometry.stroke", "stylers": [{ "color": "#9c9c9c" }] }, { "featureType": "all", "elementType": "labels.text", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#7b7b7b" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#c8d7d4" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#070707" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }]

		});
		var marker1 = new google.maps.Marker({
			position: { lat: 48.5086003, lng: 32.2639504 },
			map: map,
			scrollwheel: false,
			title: '',
			icon: {
				url: "img/map/icon.png",
				scaledSize: new google.maps.Size(59, 65)
			}
		});

	}
}
$(window).resize(function () { // refresh map on resize 
	initMap();
});
initMap();

//google Map END

// basket popup ==============================================================================================
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.basket-popup'));
			e.preventDefault();
		})
	}
}

function popupOpen(currentPopup) {
	if (currentPopup) {
		const popupActive = document.querySelector('.basket-popup-open');
		if (popupActive) {
			popupClose(popupActive, false);
		}
		else {

		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.basket-popup__content')) {
				popupClose(e.target.closest('.basket-popup'));
			}
		})
	}
}

function popupClose(popupActive,) {

	popupActive.classList.remove('open');
	body();


}

/*
function {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	for (let index = 0; index < lockPadding.length; index++) {
		const el = lockPadding[index];
		el.style.paddingRight = lockPaddingValue;
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	 = false;
	setTimeout(function () {
		 = true;
	}, timeout);
}

function body() {
	setTimeout(function () {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	 = false;
	setTimeout(function () {
		 = true;
	}, timeout);
}
*/


// basket input number ================================================================================================

(function ($) {
	$.fn.niceNumber = function (options) {
		var defaults = {
			autoSize: false,
			autoSizeBuffer: 1,
			buttonDecrement: '−',
			buttonIncrement: '+',
			buttonPosition: 'around',

			/**
				callbackFunction
				@param {$input} currentInput - the input running the callback
				@param {number} amount - the amount after increase/decrease
				@param {object} settings - the passed niceNumber settings
			**/
			onDecrement: false,
			onIncrement: false,
		};
		var settings = $.extend(defaults, options);

		return this.each(function () {
			var currentInput = this,
				$currentInput = $(currentInput),
				maxValue = $currentInput.attr('max'),
				minValue = $currentInput.attr('min'),
				attrMax = null,
				attrMin = null;

			// Skip already initialized input
			if ($currentInput.attr('data-nice-number-initialized')) return;

			// Handle max and min values
			if (
				maxValue !== undefined &&
				maxValue !== false
			) {
				attrMax = parseFloat(maxValue);
			}

			if (
				minValue !== undefined &&
				minValue !== false
			) {
				attrMin = parseFloat(minValue);
			}

			// Fix issue with initial value being < min
			if (attrMin && !currentInput.value) {
				$currentInput.val(attrMin);
			}

			// Generate container
			var $inputContainer = $('<div/>', {
				class: 'quantity-items-basket-popup__box',
			}).insertAfter(currentInput);

			// Generate interval (object so it is passed by reference)
			var interval = {};

			// Generate buttons
			var $minusButton = $('<button/>')
				.attr('type', 'button')
				.addClass('quantity-items-basket-popup__button-minus')
				.html(settings.buttonDecrement)
				.on('mousedown mouseup mouseleave', function (event) {
					changeInterval(event.type, interval, function () {
						var currentValue = parseFloat($currentInput.val() || 0);
						if (
							attrMin == null ||
							attrMin < currentValue
						) {
							var newValue = currentValue - 1;
							$currentInput.val(newValue);
							if (settings.onDecrement) {
								settings.onDecrement(
									$currentInput,
									newValue,
									settings
								);
							}
						}
					});

					// Trigger the input event here to avoid event spam
					if (event.type == 'mouseup' || event.type == 'mouseleave') {
						$currentInput.trigger('input');
					}
				});

			var $plusButton = $('<button/>')
				.attr('type', 'button')
				.addClass('quantity-items-basket-popup__button-plus')
				.html(settings.buttonIncrement)
				.on('mousedown mouseup mouseleave', function (event) {
					changeInterval(event.type, interval, function () {
						var currentValue = parseFloat($currentInput.val() || 0);
						if (
							attrMax == null ||
							attrMax > currentValue
						) {
							var newValue = currentValue + 1;
							$currentInput.val(newValue);
							if (settings.onIncrement) {
								settings.onIncrement(
									$currentInput,
									newValue,
									settings
								);
							}
						}
					});

					// Trigger the input event here to avoid event spam
					if (event.type == 'mouseup' || event.type == 'mouseleave') {
						$currentInput.trigger('input');
					}
				});

			// Remember that we have initialized this input
			$currentInput.attr('data-nice-number-initialized', true);

			// Append elements
			switch (settings.buttonPosition) {
				case 'left':
					$minusButton.appendTo($inputContainer);
					$plusButton.appendTo($inputContainer);
					$currentInput.appendTo($inputContainer);
					break;
				case 'right':
					$currentInput.appendTo($inputContainer);
					$minusButton.appendTo($inputContainer);
					$plusButton.appendTo($inputContainer);
					break;
				case 'around':
				default:
					$minusButton.appendTo($inputContainer);
					$currentInput.appendTo($inputContainer);
					$plusButton.appendTo($inputContainer);
					break;
			}

			// Nicely size input
			if (settings.autoSize) {
				$currentInput.width(
					$currentInput.val().length + settings.autoSizeBuffer + 'ch'
				);
				$currentInput.on('keyup input', function () {
					$currentInput.animate(
						{
							width:
								$currentInput.val().length +
								settings.autoSizeBuffer +
								'ch'
						},
						200
					);
				});
			}
		});
	};

	function changeInterval(eventType, interval, callback) {
		if (eventType == 'mousedown') {
			interval.timeout = setTimeout(function () {
				interval.actualInterval = setInterval(function () {
					callback();
				}, 100);
			}, 200);
			callback();
		} else {
			if (interval.timeout) {
				clearTimeout(interval.timeout);
			}
			if (interval.actualInterval) {
				clearInterval(interval.actualInterval);
			}
		}
	}
})(jQuery);


// run function for input with selected class  ('input[class="YOUR CLASS"]')
$('input[class="quantity-items-basket-popup__input"]').niceNumber();

// run function for all input=number 
//$('input[type="number"]').niceNumber();

// basket input for accordion================================================================================================

(function ($) {
	$.fn.niceNumber = function (options) {
		var defaults = {
			autoSize: false,
			autoSizeBuffer: 1,
			buttonDecrement: '−',
			buttonIncrement: '+',
			buttonPosition: 'around',

			/**
				callbackFunction
				@param {$input} currentInput - the input running the callback
				@param {number} amount - the amount after increase/decrease
				@param {object} settings - the passed niceNumber settings
			**/
			onDecrement: false,
			onIncrement: false,
		};
		var settings = $.extend(defaults, options);

		return this.each(function () {
			var currentInput = this,
				$currentInput = $(currentInput),
				maxValue = $currentInput.attr('max'),
				minValue = $currentInput.attr('min'),
				attrMax = null,
				attrMin = null;

			// Skip already initialized input
			if ($currentInput.attr('data-nice-number-initialized')) return;

			// Handle max and min values
			if (
				maxValue !== undefined &&
				maxValue !== false
			) {
				attrMax = parseFloat(maxValue);
			}

			if (
				minValue !== undefined &&
				minValue !== false
			) {
				attrMin = parseFloat(minValue);
			}

			// Fix issue with initial value being < min
			if (attrMin && !currentInput.value) {
				$currentInput.val(attrMin);
			}

			// Generate container
			var $inputContainer = $('<div/>', {
				class: 'accordion-items-basket-popup__box',
			}).insertAfter(currentInput);

			// Generate interval (object so it is passed by reference)
			var interval = {};

			// Generate buttons
			var $minusButton = $('<button/>')
				.attr('type', 'button')
				.addClass('accordion-items-basket-popup__button-minus')
				.html(settings.buttonDecrement)
				.on('mousedown mouseup mouseleave', function (event) {
					changeInterval(event.type, interval, function () {
						var currentValue = parseFloat($currentInput.val() || 0);
						if (
							attrMin == null ||
							attrMin < currentValue
						) {
							var newValue = currentValue - 1;
							$currentInput.val(newValue);
							if (settings.onDecrement) {
								settings.onDecrement(
									$currentInput,
									newValue,
									settings
								);
							}
						}
					});

					// Trigger the input event here to avoid event spam
					if (event.type == 'mouseup' || event.type == 'mouseleave') {
						$currentInput.trigger('input');
					}
				});

			var $plusButton = $('<button/>')
				.attr('type', 'button')
				.addClass('accordion-items-basket-popup__button-plus')
				.html(settings.buttonIncrement)
				.on('mousedown mouseup mouseleave', function (event) {
					changeInterval(event.type, interval, function () {
						var currentValue = parseFloat($currentInput.val() || 0);
						if (
							attrMax == null ||
							attrMax > currentValue
						) {
							var newValue = currentValue + 1;
							$currentInput.val(newValue);
							if (settings.onIncrement) {
								settings.onIncrement(
									$currentInput,
									newValue,
									settings
								);
							}
						}
					});

					// Trigger the input event here to avoid event spam
					if (event.type == 'mouseup' || event.type == 'mouseleave') {
						$currentInput.trigger('input');
					}
				});

			// Remember that we have initialized this input
			$currentInput.attr('data-nice-number-initialized', true);

			// Append elements
			switch (settings.buttonPosition) {
				case 'left':
					$minusButton.appendTo($inputContainer);
					$plusButton.appendTo($inputContainer);
					$currentInput.appendTo($inputContainer);
					break;
				case 'right':
					$currentInput.appendTo($inputContainer);
					$minusButton.appendTo($inputContainer);
					$plusButton.appendTo($inputContainer);
					break;
				case 'around':
				default:
					$minusButton.appendTo($inputContainer);
					$currentInput.appendTo($inputContainer);
					$plusButton.appendTo($inputContainer);
					break;
			}

			// Nicely size input
			if (settings.autoSize) {
				$currentInput.width(
					$currentInput.val().length + settings.autoSizeBuffer + 'ch'
				);
				$currentInput.on('keyup input', function () {
					$currentInput.animate(
						{
							width:
								$currentInput.val().length +
								settings.autoSizeBuffer +
								'ch'
						},
						200
					);
				});
			}
		});
	};

	function changeInterval(eventType, interval, callback) {
		if (eventType == 'mousedown') {
			interval.timeout = setTimeout(function () {
				interval.actualInterval = setInterval(function () {
					callback();
				}, 100);
			}, 200);
			callback();
		} else {
			if (interval.timeout) {
				clearTimeout(interval.timeout);
			}
			if (interval.actualInterval) {
				clearInterval(interval.actualInterval);
			}
		}
	}
})(jQuery);


// run function for input with selected class  ('input[class="YOUR CLASS"]')
$('input[class="accordion-items-basket-popup__input"]').niceNumber();

// run function for all input=number 
//$('input[type="number"]').niceNumber();


// accordion basket =================================================================================
var acc = document.getElementsByClassName("accordion-items-basket-popup__button_image");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

// delete item from cart ===================================================================================
var removeCartItemButtons = document.getElementsByClassName('delete-items-basket-popup__delete_icon_1');
//console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
	var button = removeCartItemButtons[i];
	button.addEventListener('click', function (event) {
		var buttonClicked = event.target
		var itemCartDelete1 = document.getElementsByClassName("cart_1");
		$(itemCartDelete1).remove();
	})
};
var removeCartItemButtons = document.getElementsByClassName('delete-items-basket-popup__delete_icon_2');
//console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
	var button = removeCartItemButtons[i];
	button.addEventListener('click', function (event) {
		var buttonClicked = event.target
		var itemCartDelete2 = document.getElementsByClassName("cart_2");
		$(itemCartDelete2).remove();
	})
};
var removeCartItemButtons = document.getElementsByClassName('delete-items-basket-popup__delete_icon_3');
//console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
	var button = removeCartItemButtons[i];
	button.addEventListener('click', function (event) {
		var buttonClicked = event.target
		var itemCartDelete3 = document.getElementsByClassName("cart_3");
		$(itemCartDelete3).remove();
	})
};

//  basket-tab ==========================================================================================

// Click function
$('.button-basket-popup__btn').click(function () {

	// hide 1 tab
	$('.tab-basket').hide();

	// open 2 tab
	$('.tab-checkout').css('display', 'flex');

	// add 50% greenbar on 2 tab
	$('.header-basket-popup__row').addClass('greenbar-half');
	// add greenball 2 
	$('.header-basket-popup__column_b2').addClass('greenbar-secondball');


	// back to 1 tab 
	$('.tab-checkout-total-buttons__back').click(function () {
		$('.tab-checkout').hide();
		$('.tab-basket').css('display', 'flex');
		// reset 50% greenbar on 1 tab
		$('.header-basket-popup__row').removeClass('greenbar-half');
		// reset greenball 2 on 1 tab
		$('.header-basket-popup__column_b2').removeClass('greenbar-secondball');
	})
	//

	// open tab 3 
	$('.tab-checkout-total-buttons__pay').click(function () {
		$('.tab-checkout').hide();
		$('.tab-accepted').css('display', 'flex');
		// add 100% greenbar on 3 tab
		$('.header-basket-popup__row').addClass('greenbar-full');
		// reset 50% greenbar on 2 tab
		$('.header-basket-popup__row').removeClass('greenbar-half');
		// add greenball 3 
		$('.header-basket-popup__column_b3').addClass('greenbar-thirdball');
	})


	// close tab 3 with all popup 
	// !!! look in in closePopup function !!!

	// reset last tab to first 
	$('.tab-accepted-body__btn').click(function () {
		$('.tab-accepted').hide();
		$('.tab-basket').css('display', 'flex');
		// reset 100% greenbar on 1 tab
		$('.header-basket-popup__row').removeClass('greenbar-full');
		// reset greenball 2 on 1 tab
		$('.header-basket-popup__column_b2').removeClass('greenbar-secondball');
		// reset greenball 3 on 1 tab 
		$('.header-basket-popup__column_b3').removeClass('greenbar-thirdball');
	})
});


//  parallax anim  =====================================================================================================

$(document).ready(function () {
	$(window).scroll(function (event) {
		var s = $(this).scrollTop();
		var w = $(this).outerWidth();
		var h_b = $('.parallax').outerHeight();
		var p_b = s / h_b * 100;
		var o = 0.1 - 1 / 100000 * p_b;

		var z_1 = 1 + (w / 10000 * p_b);
		$('.parallax__bg').css('transform', 'scale(' + z_1 + ')');
		$('.parallax__bg').css('opacity', o);
	})
})

// anim items =================================================================================================================

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index]; // getting every item with class anim-items
			const animItemHeight = animItem.offsetHeight; // getting anim-item height
			const animItemOffset = offset(animItem).top; // getting anim-item distance to top
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart; // moment to start anim
			if (animItemHeight > window.innerHeight) { // if item height > window height we should do this 
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) { // add class active-anim when scroll to item
				animItem.classList.add('active-anim');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) { // check if item dont have  class anim-no-hide (if have then dont remove active class) 
					animItem.classList.remove('active-anim'); // remove class active-anim when scrolled out
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}

//  call-me-popup ===================================================================================================

// Add the call-me-active class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
window.addEventListener('scroll', callMePopup);
function callMePopup() {

	// Get the popup icon
	var callMeIcon = $(".call-me-popup");

	// get the about (2nd section)
	var control = $(".slider-about__control").offset();

	if (window.pageYOffset > control.top) {
		$(callMeIcon).addClass("call-me-active");
	} else {
		$(callMeIcon).removeClass("call-me-active ");
	}
};

$('.call-me-popup-body').click(function () {  //  show form when click on call-me 
	$('.call-me-popup-form').toggleClass("call-me-active");
});
$('.wrapper').click(function (ee) {
	if (!ee.target.closest('.call-me-popup-form')) {
		$('.call-me-popup-form').removeClass("call-me-active");
	}
})

// ==============================================================================================================

//  best-popup =======================================================================================================

window.addEventListener('scroll', bestPopup);

function bestPopup() {
	var bestControl = $('.products').offset().top - $('.header').height();

	if (window.pageYOffset > bestControl) {
		const currentBestPopup = $('.best-popup');
		popupBestOpen(currentBestPopup);
	}

	function popupBestOpen(currentBestPopup) {
		if (!currentBestPopup.hasClass('dont-show-again')) {
			const popupBestActive = document.querySelector('.best-popup-open');
			if (popupBestActive) {
				popupBestClose(popupBestActive, false);
			}

			currentBestPopup.addClass('open');
			currentBestPopup.click(function (eee) {
				if (!eee.target.closest('.best-popup__content')) {
					popupBestClose(eee.target.closest('.best-popup'));
				}
			})
		}
	}

	function popupBestClose(popupBestActive) {
		popupBestActive.classList.remove('open');
		popupBestActive.classList.add('dont-show-again'); // dont show again !
	}
}

// scroll indicator =====================================================================================================
$('.best-popup').on("scroll", function () {
	var pixels = $('.best-popup').scrollTop();
	var pageHeight = $('.best-popup__body').outerHeight() - $(window).height();
	var progress = 100 * pixels / pageHeight;

	$(".best-popup-progressbar__indicator").css("width", progress + "%");
	setTimeout;
})
// pixels = amount of px from top of page
// pageHeight = whole page height minus viewable page height
// progress = pixels from top / page-height * 100

// ==============================================================================================================

//  best-carousel  =====================================================================================================

let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const carouselContainer = $('.best-popup-carousel__container');
const carouselTrack = $('.best-popup-carousel__track');
const carouselBtnPrev = $('.best-popup-carousel-buttons__prev');
const carouselBtnNext = $('.best-popup-carousel-buttons__next');
const carouselItems = $('.best-popup-carousel__item');
const carouselItemsCount = carouselItems.length;
const carouselItemWidth = carouselContainer.width() / slidesToShow;
const movePosition = slidesToScroll * carouselItemWidth;
const carouselPagination = $('.best-popup-carousel-pagination');
const carouselPaginationItems = $('.best-popup-carousel-pagination__item');



carouselPaginationItems.each(function (index, item) { // sliding with pagination
	if (slidesToShow > 1) {
		for (var iDots = 0, max = carouselPaginationItems.length - (slidesToShow - 1); iDots < max; iDots++) { // delete last dots when items to scroll > 1
			$(carouselPaginationItems[iDots]).removeClass('active-dot');
			if ($(carouselPaginationItems).length > max) {
				for (iDots = 0, $(carouselPaginationItems).length > max; iDots < max; iDots++) {
					$(carouselPaginationItems).last().remove();
				}
			}
			$(carouselPaginationItems[iDots]).removeClass('active-dot');
		}
	}
	$(item).click(function () {
		if (index == 0) {
			position = 0;
		}
		else {
			position = -(index * carouselItemWidth);
		}
		for (var iDots = 0, max = carouselPaginationItems.length; iDots < max; iDots++) { // making all dots green after all click to clear previous black dot
			$(carouselPaginationItems[iDots]).removeClass('active-dot');
		}
		$(item).addClass('active-dot'); // making clicked dot black
		setPosition();
		checkBtns();
	});
});

// width for all items
carouselItems.each(function (index, item) {
	$(item).css({
		minWidth: carouselItemWidth,
	})
})

// slide items when click next
carouselBtnNext.click(function () {
	const itemsLeft = carouselItemsCount - (Math.abs(position) + slidesToShow * carouselItemWidth) / carouselItemWidth;
	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * carouselItemWidth;

	checkNext = $('.best-popup-carousel-pagination__item.active-dot').next(); // get next element before clear active class
	for (var iDots = 0, max = carouselPaginationItems.length; iDots < max; iDots++) { // making all dots green after all click to clear previous black dot
		$(carouselPaginationItems[iDots]).removeClass('active-dot');
	}
	checkNext.addClass('active-dot'); // set active class to next element after click next btn
	setPosition();
	checkBtns();
})


// slide items when click prev
carouselBtnPrev.click(function () {
	carouselSlide();
});
function carouselSlide(index = 0) {
	const itemsLeft = Math.abs(position) / carouselItemWidth;
	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * carouselItemWidth;
	var itemIndex = position - (index * carouselItemWidth);

	checkPrev = $('.best-popup-carousel-pagination__item.active-dot').prev(); // get prev element before clear active class
	for (var iDots = 0, max = carouselPaginationItems.length; iDots < max; iDots++) { // making all dots green after all click to clear previous black dot
		$(carouselPaginationItems[iDots]).removeClass('active-dot');
	}
	checkPrev.addClass('active-dot'); // set active class to next element after click prev btn
	setPosition();
	checkBtns();
}
// moving track to swap visible slides
const setPosition = () => {
	carouselTrack.css({
		transform: `translateX(${position}px)`,
	});
};

// disable buttons when scrolled to the start/end
const checkBtns = () => {
	carouselBtnPrev.prop('disabled', position === 0);
	carouselBtnNext.prop(
		'disabled',
		position <= -(carouselItemsCount - slidesToShow) * carouselItemWidth,
	);
};

checkBtns();


// ==============================================================================================================