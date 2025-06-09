
window.loadHeader = function () {
  const mainHeader = document.getElementById("headerMain");
  const stickyHeader = document.getElementById("headerSticky");
  if (!mainHeader || !stickyHeader) return;

  const headerContent = () => {
    const section = document.createElement("section");
    section.className = "gn-header container-fluid";

    const wrapper = document.createElement("div");
    wrapper.className = "d-flex justify-content-between align-items-center";

    wrapper.innerHTML += `
      <div class="logo d-flex align-items-center">
        <img src="images/TESTOLOGO.svg" alt="TESTO HOTEL" height="50" />
      </div>
    `;

    wrapper.innerHTML += `
      <div class="language-selector dropdown d-md-block ms-auto">
        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          語言
        </button>
        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
          <li><a class="dropdown-item" href="#" data-lang="zh-TW">繁體中文</a></li>
          <li><a class="dropdown-item" href="#" data-lang="en">English</a></li>
          <li><a class="dropdown-item" href="#" data-lang="ja">日本語</a></li>
        </ul>
      </div>

      <div class="action-buttons d-flex gap-2">
        <button class="btn btn-bookroom">客房預訂</button>
        <button class="btn btn-restaurant">餐廳預訂</button>
        <button class="btn btn-member">加入會員</button>
      </div>

      <div class="menu-icon text-center" id="menuToggle">
        <div class="icon-lines">
          <div></div>
          <div></div>
        </div>
        <div class="mt-1">菜單</div>
      </div>
    `;

    section.appendChild(wrapper);
    return section;
  };

  mainHeader.innerHTML = "";
  mainHeader.appendChild(headerContent());
  stickyHeader.innerHTML = "";
  stickyHeader.appendChild(headerContent());

  // sticky header 切換動畫
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      mainHeader.style.display = "none";
      stickyHeader.classList.add("show");
    } else {
      mainHeader.style.display = "block";
      stickyHeader.classList.remove("show");
    }
  });

  const langItems = document.querySelectorAll('.language-selector .dropdown-item');
  const savedLang = localStorage.getItem("lang") || "zh-TW";
  document.getElementById("languageDropdown").textContent = getLangLabel(savedLang);

  langItems.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.dataset.lang;
      localStorage.setItem("lang", lang);
      location.reload();
    });
  });

  function getLangLabel(code) {
    switch (code) {
      case "zh-TW": return "繁體中文";
      case "en": return "English";
      case "ja": return "日本語";
      default: return "Language";
    }
  }
};
