window.loadHeader = function () {
  const container = document.getElementById("headerComponent");
  if (!container) return;

  // Create headerMain and headerSticky
  const mainHeader = document.createElement("div");
  mainHeader.id = "headerMain";

  const stickyHeader = document.createElement("div");
  stickyHeader.id = "headerSticky";

  const headerContent = () => {
    const section = document.createElement("section");
    section.className = "gn-header container-fluid";

    const wrapper = document.createElement("div");
    wrapper.className = "d-flex justify-content-between align-items-center";

    wrapper.innerHTML += `
      <div class="logo d-flex align-items-center">
      <a href="index.html">
      <img src="images/TESTOLOGO.svg" alt="TESTO HOTEL" height="50" />
      </a>
      </div>
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
        <a href="booking.html" class="btn btn-bookroom">客房預訂</a>
        <button class="btn btn-restaurant">餐廳預訂</button>
        <button class="btn btn-member" id="openMemberModalBtn">加入會員</button>
      </div>
      <div class="menu-icon text-center" id="menuToggle">
        <div class="icon-lines"><div></div><div></div></div>
        <div class="mt-1">菜單</div>
      </div>
    `;

    section.appendChild(wrapper);
    return section;
  };

  mainHeader.appendChild(headerContent());
  stickyHeader.appendChild(headerContent());
  container.innerHTML = '';
  container.appendChild(mainHeader);
  container.appendChild(stickyHeader);

  // Build Main Menu with Submenus
  const nav = document.createElement("nav");
  nav.className = "main-menu";
  const ul = document.createElement("ul");
  ul.className = "menu list-unstyled";

  const data = {
    items: [
      {
        title: "最新消息", href: "news.html",
        children: [
          { title: "住宿優惠", href: "news.html?category=住宿優惠" },
          { title: "餐飲優惠", href: "news.html?category=餐飲優惠" },
          { title: "活動訊息", href: "news.html?category=活動訊息" },
          { title: "藝文活動", href: "news.html?category=藝文活動" }
        ]
      },
      {
        title: "房型介紹",
        href: "rooms.html",
        children: [
          { title: "尊爵VIP", href: "rooms.html?category=尊爵VIP" },
          { title: "豪華房", href: "rooms.html?category=豪華房" },
          { title: "經典房", href: "rooms.html?category=經典房" },
          { title: "商務房", href: "rooms.html?category=商務房" }
        ]
      },
      { title: "飯店介紹", href: "about.html", children: [] },
      { title: "設施介紹", href: "facility.html", children: [] },
      { title: "聯絡我們", href: "location.html", children: [] },
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
  container.appendChild(nav);

  const overlay = document.createElement("div");
  overlay.className = "submenu-overlay";
  overlay.innerHTML = `<div class="submenu-close">\u2715</div><ul></ul>`;
  document.body.appendChild(overlay);

  overlay.querySelector(".submenu-close").addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  container.querySelectorAll(".main-menu .has-submenu").forEach(item => {
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

  [nav, overlay].forEach(el => {
    el.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (![nav, overlay].some(e => e.matches(":hover"))) {
          overlay.classList.remove("show");
        }
      }, 300);
    });
  });

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

  const langItems = container.querySelectorAll('.language-selector .dropdown-item');
  const savedLang = localStorage.getItem("lang") || "zh-TW";
  const langBtn = container.querySelector("#languageDropdown");
  if (langBtn) langBtn.textContent = getLangLabel(savedLang);

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

  container.addEventListener("click", function (e) {
    const toggle = e.target.closest("#menuToggle");
    if (toggle) {
      nav.classList.toggle("show");
      toggle.classList.toggle("open");
      const label = toggle.querySelector(".mt-1");
      if (label) label.textContent = nav.classList.contains("show") ? "關閉" : "菜單";
      overlay.classList.remove("show");
    }
  });

// 加入會員按鈕（桌機）
const desktopBtn = document.getElementById("openMemberModalBtn");
if (desktopBtn) {
  desktopBtn.addEventListener("click", function () {
    if (typeof window.loadLoginModal === "function") {
      window.loadLoginModal();
    }
  });
}

// ✅ 插入手機按鈕
const mobileBtns = document.createElement("div");
mobileBtns.className = "mobile-bottom-buttons d-md-none";
mobileBtns.innerHTML = `
  <a href="booking.html" class="btn btn-bookroom flex-fill">客房預訂</a>
  <button class="btn btn-member flex-fill" id="openMemberModalBtnMobile">加入會員</button>
`;
document.body.appendChild(mobileBtns);

// ✅ 等 append 完再抓
const mobileBtn = mobileBtns.querySelector("#openMemberModalBtnMobile");
if (mobileBtn) {
  mobileBtn.addEventListener("click", function () {
    if (typeof window.loadLoginModal === "function") {
      window.loadLoginModal();
    }
  });
}

};


