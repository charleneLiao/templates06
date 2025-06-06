window.loadHeader = function () {
  const target = document.getElementById("headerComponent");
  if (!target) return;

  // 建立 section 容器
  const section = document.createElement("section");
  section.className = "gn-header container-fluid py-3";

  // 建立主結構容器
  const wrapper = document.createElement("div");
  wrapper.className = "d-flex justify-content-between align-items-center";

  // 左：Logo
  wrapper.innerHTML += `
    <div class="logo d-flex align-items-center">
      <img src="logo.svg" alt="TESTO HOTEL" height="50" />
      <div class="ms-2 text-logo">
        <div class="fw-bold">TESTO HOTEL</div>
        <div class="small">KAOHSIUNG TAIWAN</div>
      </div>
    </div>
  `;

  // 中：選單容器 nav
  const nav = document.createElement("nav");
  nav.className = "main-menu d-none d-lg-block";
  const ul = document.createElement("ul");
  ul.className = "menu list-unstyled d-flex gap-3 mb-0";

  // 資料來源
  const data = {
    menuName: "頭部選單",
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
      { title: "線上訂房", href: "step1.html", children: [] },
      { title: "加入會員", href: "javascript:void(0)", modalTarget: "#join_member", children: [] },
      { title: "語言選擇", href: "javascript:void(0)", component: "google_translate_element", children: [] }
    ]
  };

  // 產出 li
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

    // 子選單
    if (item.children && item.children.length > 0) {
      const subUl = document.createElement("ul");
      subUl.className = "submenu list-unstyled";

      item.children.forEach(sub => {
        const subLi = document.createElement("li");
        const subA = document.createElement("a");
        subA.href = sub.href;
        subA.textContent = sub.title;
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
      });

      li.classList.add("has-submenu");
      li.appendChild(subUl);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);
  wrapper.appendChild(nav);

  // 語言選擇 + 按鈕群 + Menu icon
  wrapper.innerHTML += `
    <div class="language-selector d-none d-md-block">
      <span>Language <i class="bi bi-caret-down-fill"></i></span>
    </div>

    <div class="action-buttons d-flex gap-2">
      <button class="btn btn-room">客房預訂</button>
      <button class="btn btn-restaurant">餐廳預訂</button>
    </div>

    <div class="menu-icon text-center">
      <div class="icon-lines">
        <div></div>
        <div></div>
      </div>
      <div class="mt-1">菜單</div>
    </div>
  `;

  // 最終組裝
  section.appendChild(wrapper);
  target.innerHTML = "";
  target.appendChild(section);
};
