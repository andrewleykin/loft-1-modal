// Файл для наших скриптов

(function () {

	var modal = $('.modal'),
		modalBlock = modal.find('.modal__block'),
		modalHide = 'modal--hide';

	function modalClose(){
		modal.addClass(modalHide);
	}

	$('.link').click(function() {
		modal.removeClass(modalHide);
	});

	$('.modal__close').click(modalClose);

	$('body').keyup(function(event) {
		if(event.which == 27 && !(modal.hasClass(modalHide))) {
			modalClose();
		}
	});

	modal.on('click', function (e) {
		if (!modalBlock.is(e.target) && modalBlock.has(e.target).length === 0) {
			modalClose();
		}
	});

})();