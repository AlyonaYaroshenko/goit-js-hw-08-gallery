// зарендерить всю нашу галерею (video 15 до 1:10m или 1:25м) с помощью map() функции (создаем шаблон и join шаблонной строкой)
// повесить ее на класс js-gallery с помощью insertAdjacentHTML
// вешать слушателя на клик, чтобы открывать галерею по одной картинке
// дальнейший функционал или анимации


import gallery from './gallery-items.js';
console.log(gallery);

const galleryContainer = document.querySelector('.js-gallery');
const galleryContainerFunction = createGallery(gallery);
galleryContainer.insertAdjacentHTML('beforeend', galleryContainerFunction);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGallery(gallery) {
  return gallery
    .map(({ preview, original,  description}) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
};


// modal
const openModalBtn = document.querySelector('.lightbox');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const backdrop = document.querySelector('.lightbox__overlay');

galleryContainer.addEventListener('click', onGalleryContainerClick);
closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropCklick);



function onGalleryContainerClick(event) {
  event.preventDefault();
 window.addEventListener('keydown', onEscKeyPress);
    openModalBtn.classList.add('is-open');
};

function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    openModalBtn.classList.remove('is-open');
}

function onBackdropCklick(event) {
    // console.log(event.currentTarget);
    // console.log(event.target);
    if (event.currentTarget === event.target) {
    onCloseModal();
}
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}


