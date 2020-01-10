'use strict';
// Создайте группу аккордеонов (сворачивающиееся списки). У кажного списка есть заголовок при нажатии на который список раскрывается. В один момент времени может существовать только один открытый список.
let title = document.getElementsByClassName('accordion__title');
let content = document.getElementsByClassName('accordion__content');

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener('click', function() {    
    if (!(this.classList.contains('active'))) {
      for (let i = 0; i < title.length; i++) {
        title[i].classList.remove('active');
      }
      this.classList.add('active');
    }
  });
}