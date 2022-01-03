const addVideo = document.querySelector('.video-btn__icon');
const videoBox = document.querySelector('.video-box');
const videoOverlay = document.querySelector('.video-overlay');
const videoBtn = document.getElementById('video-btn');
const videoPlay = document.querySelector('.video-play-btn__img');
const videoClose = document.querySelector('.video-close-btn__img');
const videoClsBtn = document.querySelector('.video-close-btn');
const video = document.getElementById('video');
const closeBtn = document.querySelector('.btn-close');
const boxAnimation = document.querySelector('.animation');

addVideo.addEventListener('click', onOpenVideo);
videoClose.addEventListener('click', onCloseVideo);
videoPlay.addEventListener('click', onPlayVideo);
closeBtn.addEventListener('click', onClickCloseBtn);

function onOpenVideo(e) {
  e.preventDefault();
  videoOverlay.classList.add('video-is-open');
  videoBtn.classList.add('is-hidden');
}

function onCloseVideo(e) {
  e.preventDefault();
  videoOverlay.classList.remove('video-is-open');
  videoBtn.classList.remove('is-hidden');
  video.pause();
  videoPlay.classList.remove('is-hidden');
}

function onPlayVideo(e) {
  e.preventDefault();
  videoPlay.classList.add('is-hidden');
  video.play();
  video.setAttribute('controls', '');
}

function onClickCloseBtn(e) {
  e.preventDefault();
  boxAnimation.classList.add('is-hidden');
}
