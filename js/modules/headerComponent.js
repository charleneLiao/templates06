window.loadHeader = function () {
  const target = document.getElementById("headerComponent");
  if (!target) return;

  const section = document.createElement("section");
  section.className = "gn-header container-fluid";

  const wrapper = document.createElement("div");
  wrapper.className = "d-flex justify-content-between align-items-center";

  wrapper.innerHTML += `
    <div class="logo d-flex align-items-center">
      <img src="images/TESTOLOGO.svg" alt="TESTO HOTEL" height="50" />
      <div class="ms-2 text-logo">
        <div class="fw-bold">TESTO HOTEL</div>
        <div class="small">KAOHSIUNG TAIWAN</div>
      </div>
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
      <button class="btn btn-room">客房預訂</button>
      <button class="btn btn-restaurant">餐廳預訂</button>
      <button class="btn btn-primary">加入會員</button>
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
  target.innerHTML = "";
  target.appendChild(section);
  const mobileActionBar = document.createElement("div");
  mobileActionBar.className = "mobile-action-bar d-md-none"; // 手機版顯示
  mobileActionBar.innerHTML = `
  <div class="d-flex justify-content-around align-items-center w-100 h-100">
    <a href="traffic.html" class="btn btn-outline-secondary flex-fill">交通</a>
    <a href="#" class="btn btn-room flex-fill">客房</a>
    <a href="#" class="btn btn-restaurant flex-fill">餐廳</a>
    <a href="#" class="btn btn-primary flex-fill">加入</a>
  </div>
`;
  document.body.appendChild(mobileActionBar);


  const nav = document.createElement("nav");
  nav.className = "main-menu";
  const ul = document.createElement("ul");
  ul.className = "menu list-unstyled";

  const data = {
    items: [
      { title: "房型介紹", href: "rooms.html", children: [] },
      {
        title: "最新消息",
        href: "news.html",
        children: [
          { title: "住宿優惠", href: "news.html" },
          { title: "餐飲優惠", href: "news.html" },
          { title: "活動訊息", href: "news.html" },
          { title: "藝文活動", href: "news.html" }
        ]
      },
      { title: "飯店介紹", href: "about.html", children: [] },
      { title: "設施介紹", href: "facility.html", children: [] },
      { title: "交通位置", href: "traffic.html", target: "_blank", children: [] },
      { title: "聯絡我們", href: "javascript:void(0)", modalTarget: "#myModal", children: [] },
    ]
  };

  data.items.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.title;
    if (item.target) a.target = item.target;
    if (item.modalTarget) {
      a.setAttribute("data-toggle", "modal");
      a.setAttribute("data-target", item.modalTarget);
    }
    li.appendChild(a);

    if (item.children && item.children.length > 0) {
      const toggle = document.createElement("span");
      toggle.className = "toggle-btn";
      toggle.textContent = "+";
      li.classList.add("has-submenu");
      li.dataset.children = JSON.stringify(item.children);
      li.appendChild(toggle);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);
  document.body.appendChild(nav);

  const menuToggle = document.getElementById("menuToggle");
  const mainMenu = document.querySelector(".main-menu");

  menuToggle.onclick = () => {
    const isOpen = mainMenu.classList.contains("show");
    mainMenu.classList.toggle("show");
    menuToggle.classList.toggle("open");
    menuToggle.querySelector(".mt-1").textContent = isOpen ? "菜單" : "關閉 ✕";
    if (isOpen) {
      document.querySelector(".submenu-overlay")?.classList.remove("show");
    }
  };

  const overlay = document.createElement("div");
  overlay.className = "submenu-overlay";
  overlay.innerHTML = `<div class="submenu-close">✕</div><ul></ul>`;
  document.body.appendChild(overlay);

  overlay.querySelector(".submenu-close").addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  document.querySelectorAll(".main-menu .has-submenu").forEach(item => {
    const children = JSON.parse(item.dataset.children);
    const ul = overlay.querySelector("ul");

    item.addEventListener("mouseenter", () => {
      ul.innerHTML = "";
      children.forEach(sub => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = sub.href;
        a.textContent = sub.title;
        li.appendChild(a);
        ul.appendChild(li);
      });
      overlay.classList.add("show");
    });
  });

  const submenuHoverAreas = [
    document.querySelector(".main-menu"),
    document.querySelector(".submenu-overlay")
  ];

  submenuHoverAreas.forEach(el => {
    el.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!submenuHoverAreas.some(e => e.matches(":hover"))) {
          overlay.classList.remove("show");
        }
      }, 300);
    });
  });

  // 語系切換邏輯
  const langItems = document.querySelectorAll('.language-selector .dropdown-item');
  const savedLang = localStorage.getItem("lang") || "zh-TW";
  document.getElementById("languageDropdown").textContent = getLangLabel(savedLang);

  langItems.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.dataset.lang;
      localStorage.setItem("lang", lang);
      location.reload(); // 你可以改成 loadLanguage(lang) 以動態替換文字
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
  const mobileTopActionBar = document.createElement("div");
  mobileTopActionBar.className = "mobile-header-action-bar d-md-none";

//   mobileTopActionBar.innerHTML = `
//   <a href="traffic.html" class="btn btn-traffic">交通</a>
//   <a href="#" class="btn btn-room">客房預訂</a>
//   <a href="#" class="btn btn-restaurant">餐廳預訂</a>
//   <a href="#" class="btn btn-primary">加入會員</a>
// `;

  document.body.appendChild(mobileTopActionBar);


};
