//gallery

const zoomBtns = document.querySelectorAll('.zoom-btn');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const imgs = document.querySelectorAll('.gallery-img');
const thumbnailContainer = document.querySelector('.thumbnails-container');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
let currentImg

imgs.forEach(img => {
  const thumbnail = document.createElement('img');
  thumbnail.classList.add('thumbnail');
  thumbnail.src = img.src;
  thumbnail.alt = img.alt;
  thumbnailContainer.appendChild(thumbnail) ;

  thumbnail.addEventListener('click', () => {
    modalImg.src = thumbnail.src;
    currentImg = thumbnail
  })
})

const thumbnails = document.querySelectorAll('.thumbnail');

zoomBtns.forEach((btn, i) => {
  btn.addEventListener('click', e => {
    const img = e.target.parentNode.nextElementSibling;
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add('active');
    currentImg = thumbnails[i]
  })
})

prevBtn.addEventListener('click', () => {
  if(currentImg == thumbnails[0]) {
    currentImg = thumbnails[thumbnails.length-1]
    modalImg.src = currentImg.src;
  } else {
    const prevImg = currentImg.previousElementSibling
    modalImg.src = prevImg.src;
    currentImg = prevImg
  }

})

nextBtn.addEventListener('click', () => {
  if(currentImg == thumbnails[thumbnails.length-1]) {
    currentImg = thumbnails[0]
    modalImg.src = currentImg.src;
  } else {
    const nextImg = currentImg.nextElementSibling
    modalImg.src = nextImg.src;
    currentImg = nextImg
  }
})

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
})

//sticky menu

const nav = document.querySelector('.nav');

window.onscroll = () => nav.classList.toggle('scrolled', window.pageYOffset > 1);

//scroll menu

const menu = document.querySelectorAll('.navigation-el');
const sections = document.querySelectorAll('.section');
const showMenu = document.querySelector('.btn');
const logo = document.querySelector('.logo-container');
const header = document.querySelector('.header');

const pairs = [...menu].map((el, i) => [el, sections[i]]);

pairs.push([showMenu, pairs[0][1]]);
pairs.push([logo, header]);

gsap.registerPlugin(ScrollToPlugin);
pairs.forEach(el => el[0].addEventListener('click', (e) => {
  e.preventDefault()
  
  gsap.to(window, {duration: 1, scrollTo: { y: el[1].offsetTop, offsetY: nav.offsetHeight},  ease: 'power2'});
}))

//hamburger

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation-container');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('active');
})

const targets = [main, ...menu] 

targets.forEach(el => {
  el.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navigation.classList.remove('active');
  })
})
