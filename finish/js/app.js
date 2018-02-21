// Файл для наших скриптов

(function () {

  var modal = $(".modal"),
      modalHide = "modal--hide";

  function modalClose(){
    modal.addClass(modalHide);
  }

  $(".link").click(function() {
    modal.removeClass(modalHide);
  });

  $("body").keyup(function(event) {
    if (event.which == 27 && !modal.hasClass(modalHide)) {
      modalClose();
    }
  });

  modal.on("click", function(e) {
    if (modal.is(e.target) || $(e.target).hasClass("modal__close")) {
      modalClose();
    }
  });

})();