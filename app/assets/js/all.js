$(document).ready(() => {
  $(".menu-btn").click(function(e) {
    e.preventDefault();
    $(".menu-list").toggleClass("show-menu");
  });
});