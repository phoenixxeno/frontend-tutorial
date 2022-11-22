$(document).ready(function () {
  $('#divFadeOut').click(function (e) {
    e.preventDefault()
    $(this).fadeOut()
  })

  $('#divHide').click(function (e) {
    e.preventDefault()
    $(this).hide()
  })

  $('#divFadeIn').click(function (e) {
    e.preventDefault()
    $(this).hide()
    $(this).fadeIn()
  })

  $('#divShow').click(function (e) {
    e.preventDefault()
    $(this).hide()
    // setTimeout(() => {
    $(this).show(2000)
    // }, 1000)
  })

  $('#btnToggle').click(function (e) {
    e.preventDefault()
    $('#divToggle').toggle()
  })

  $('#btnFadeToggle').click(function (e) {
    e.preventDefault()
    $('#divFadeToggle').fadeToggle()
  })

  $('#divSlideUp').click(function (e) {
    e.preventDefault()
    $(this).slideUp()
  })

  $('#divSlideDown').click(function (e) {
    e.preventDefault()
    $(this).slideUp()
    $(this).slideDown(2000)
  })

  $('#btnSlideToggle').click(function (e) {
    e.preventDefault()
    $('#divSlideToggle').slideToggle()
  })

  $('#divAnimation').click(function (e) {
    e.preventDefault()
    $('#p1').html('New Content, New Content, New Content')
    $('#p1').css('background-color', 'yellow')
    $('#divAnimation p').css('font-size', '30px')
    $('#p2').hide(5000)
    $('#p2').show(6000)
    $('#divAnimation p').slideUp(2000).slideDown().fadeOut().fadeIn(2000)
  })
})
