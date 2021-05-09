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
const preventMisclick = document.querySelector('.gallery__link');

galleryContainer.addEventListener('click', onGalleryContainerClick);
closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropCklick);
preventMisclick.addEventListener('click', onLinkClick);



function onGalleryContainerClick(event) {
  event.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);
  if (event.target.nodeName === 'IMG') {
    openModalBtn.classList.add('is-open');
    openModalBtn.querySelector('.lightbox__image').src = event.target.dataset.source;
    openModalBtn.querySelector('.lightbox__image').alt = event.target.alt;
  }
};

function onLinkClick(event) {
  if (event.currentTarget !== event.target) {
    return;
  }
}

// if (e.target.nodeName === "IMG") {
  //   refs.lightBox.classList.add("is-open");
  //   const originalImageUrl = e.target.dataset.source;
  //   refs.originalImage.src = originalImageUrl;
  //   refs.originalImage.alt = e.target.alt;
  // }

  // if(e.target.nodeName === 'IMG') {
  //   openModalBtn.classList.add('is-open');
  //   openModalBtn.querySelector('.lightbox__image').src = e.target.src;
  //   openModalBtn.querySelector('.lightbox__image').alt = e.target.alt;
  // }

function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    openModalBtn.classList.remove('is-open');
}

// refs.originalImage.src = "";
  // refs.originalImage.alt = "";
  // refs.lightBox.classList.remove("is-open");

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


