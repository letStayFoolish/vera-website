const checkReplace = document.querySelector('.replace-me')

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  })
}

function scroll() {
  const navbar = document.querySelector('.navbar')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-custom')
      navbar.classList.add('bg-dark')
    } else {
      navbar.classList.remove('bg-dark')
      navbar.classList.remove('navbar-custom')
    }
  })
}

// Video Modal
const videoBtn = document.querySelector('.video-btn')
const videoModal = document.getElementById('videoModal')
const video = document.getElementById('video')
let videoSrc

if (videoBtn !== null) {
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src')
  })
}

if (videoModal !== null) {
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute('src',
      videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
    )
  })

  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSrc)
  })
}


// Event Listeners
document.addEventListener('DOMContentLoaded', scroll)