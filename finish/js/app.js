// Файл для наших скриптов

(function () {

  // переменные
  var modal = $(".modal"), // модальное окно
      modalHide = "modal--hide";  // класс для скрытия модального окна

  // функция закрывания модального окна
  function modalClose(){
    modal.addClass(modalHide);
  }

  // при клике на элемент с классом .link
  $(".link").click(function() {
    // удалить класс для скрытия модального окна
    modal.removeClass(modalHide);
  });

  // при нажатии на клавишу
  $("body").keyup(function(event) {
    // Если нажатие было на клавишу Esc И модальное окно не имеет класса для скрытия, т.е. показано
    if (event.which == 27 && !modal.hasClass(modalHide)) {
      // выполнить функцию закрывания
      modalClose();
    }
  });

  // при клике на модальное окно
  modal.on("click", function(e) {
    // если клик был на модальном окне ИЛИ цель клика имеет класс modal__close
    if (modal.is(e.target) || $(e.target).hasClass("modal__close")) {
      // выполнить функцию закрывания
      modalClose();
    }
  });

})();