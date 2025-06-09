document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (e) {
    const toggle = e.target.closest("#menuToggle");
    if (toggle) {
      const menu = document.querySelector(".main-menu");
      if (menu) {
        menu.classList.toggle("show");
      }
    }
  });
});
