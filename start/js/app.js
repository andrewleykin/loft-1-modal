// Файл для наших скриптов

(function () {

	var modal = $('.modal'),
		modalHide = 'modal--hide';

	$('.link').click(function() {
		modal.removeClass(modalHide);
	});

	function closeModal(){
		modal.addClass(modalHide);
	}

	$('body').keyup(function(event) {
		if (event.which == 27 && !modal.hasClass(modalHide)) {
			modalClose();
		}
	});

	modal.click(function(e) {
		if (modal.is(e.target) || $(e.target).hasClass('modal__close')) {
			modalClose();
		}
	});

})();