'use strict';
// Создать простой интерфейс модального окна. Создайте кнопку, при нажатии на которую открывается модальное окно. Окно должно закрываться при нажатии на крестик закрытия, а так же при нажатии вне область окна.
let modal = document.getElementById("modal_1");
let btn = document.getElementById("btn_1");
let span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
} 