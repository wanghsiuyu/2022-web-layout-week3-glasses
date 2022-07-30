// header menu button in mobile
$(document).ready(() => {
  $('.header-menu-btn').click(function (e) {
    e.preventDefault();
    $('.header-menu-list').toggleClass('show-menu');
  });
});
