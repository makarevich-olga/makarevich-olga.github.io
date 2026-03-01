// lightbox.js
document.addEventListener('DOMContentLoaded', function() {
  // Создаём контейнер лайтбокса
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <img src="" alt="">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  // Функция открытия
  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
  }

  // Закрытие по клику на затемнённый фон или крестик
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.classList.remove('active');
      lightboxImg.src = ''; // очистка
    }
  });

  // Закрытие по клавише ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      lightboxImg.src = '';
    }
  });

  // Назначаем обработчик клика на все изображения внутри .photo-placeholder
  const images = document.querySelectorAll('.photo-placeholder img');
  images.forEach(img => {
    img.addEventListener('click', function() {
      openLightbox(this.src);
    });
  });
});