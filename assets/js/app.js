$(function() {
  
  let  header = $('#header'),
      introH = $('#intro').innerHeight() - header.innerHeight(),
      scrollOffset = $(window).scrollTop()

  /* Fixed Header */
  checkScroll(scrollOffset)
  
  $(window).on('scroll', function() {
    scrollOffset = $(this).scrollTop()

    checkScroll(scrollOffset)    
  })

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }

  /* Smooth scroll */
  $('[data-scroll]').on('click', function(event) {
    event.preventDefault()

    let $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top

    $('#nav a').removeClass('active')
    $this.addClass('active')    

    $('html, body').animate({
      scrollTop: blockOffset - header.innerHeight() + 20
    }, 500)
  })

  /* Menu nav toggle */
  $('#nav_toggle').on('click', function(event) {
    event.preventDefault()

    $(this).toggleClass('active')
    $('#nav').toggleClass('active')
  })

  $('#nav a').on('click', function() {
    $('#nav').toggleClass('active')
    $('#nav_toggle').toggleClass('active')
  })

  /* Accordion collapse */
  $('[data-collapse').on('click', function(event) {
    event.preventDefault()

    $(this).toggleClass('active')    
  })

  /* Slider */
  $('[data-slider]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  })
})
