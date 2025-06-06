document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`無法載入 ${file}`);
        return response.text();
      })
      .then(html => {
        el.innerHTML = html;
      })
      .catch(error => {
        el.innerHTML = `<!-- 錯誤：${error.message} -->`;
      });
  });
});
