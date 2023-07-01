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


// Event Listeners
document.addEventListener('DOMContentLoaded', scroll)