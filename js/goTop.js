// js/sharedEnhancements.js
document.addEventListener("DOMContentLoaded", function () {
  // 建立回到頂部按鈕
  const btn = document.createElement("button");
  btn.id = "scrollToTopBtn";
  btn.title = "回到頂部";
  btn.textContent = "↑";
  document.body.appendChild(btn);

  // 顯示按鈕邏輯
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // 點擊滑動回頂部
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
