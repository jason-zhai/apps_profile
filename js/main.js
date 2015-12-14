$(function() {
	$('.js-openUiCard').hide();
	$('.js-uiCard').mouseenter(function() {
		$(this).find('.js-hideUiCard').transition({
			onComplete : function() {
				$(this).find('.js-openUiCard').transition();
			}
		});
	});
	$('.js-uiCard').mouseleave(function() {
		$(this).find('.js-hideUiCard').transition();
		$(this).find('.js-openUiCard').transition();
	});
});
