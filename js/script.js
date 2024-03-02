$(function () {
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (scroll < 300) {
      $('#top').fadeOut(300);
    } else {
      $('#top').fadeIn(300);
    }
  }
  );

  $('#top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800, 'swing');
  }
  );
});