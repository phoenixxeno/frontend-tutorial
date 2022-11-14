let windowHeightPrev = sessionStorage.getItem('windowHeight')
if (windowHeightPrev == null) {
  let windowHeight = window.innerHeight
  sessionStorage.setItem('windowHeight', windowHeight)
  windowHeightPrev = windowHeight
}

window.addEventListener('resize', () => {
  let calcVh = windowHeightPrev * 0.01
  document.documentElement.style.setProperty('--calc-vh', `${calcVh}px`)
})
