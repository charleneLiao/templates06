const fs = require("fs");
const path = require("path");

const menu = [
  {
    title: "最新消息",
    href: "news.html",
    children: [
      { title: "住宿優惠", href: "news-stay.html" },
      { title: "餐飲優惠", href: "news-food.html" },
      { title: "活動訊息", href: "news-activity.html" },
      { title: "藝文活動", href: "news-art.html" }
    ]
  },
  {
    title: "房型介紹",
    href: "rooms.html",
    children: [
      { title: "尊爵VIP", href: "rooms-vip.html" },
      { title: "豪華房", href: "rooms-elegant.html" },
      { title: "經典房", href: "rooms-classic.html" },
      { title: "商務房", href: "rooms-business.html" }
    ]
  },
  {
    title: "飯店介紹",
    href: "about.html",
    children: []
  },
  {
    title: "設施介紹",
    href: "facility.html",
    children: []
  },
  {
    title: "交通位置",
    href: "location.html",
    children: []
  },
  {
    title: "線上訂房",
    href: "booking.html",
    children: []
  }
];

const outputDir = path.resolve(__dirname, "../"); // 存放 HTML 的位置：hotel06 根目錄

function createPageIfNotExists(href, title) {
  const filePath = path.join(outputDir, href);
  if (!fs.existsSync(filePath)) {
    const htmlContent = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<!-- START: shared head -->
<!-- 此區塊將由 injectHead.js 自動補上 -->
</head>
<body>
  <div id="headerComponent"></div>

  <main>
    <h1>${title}</h1>
    <p>此頁尚未填寫內容。</p>
  </main>

  <div id="footerComponent"></div>
</body>
</html>`;
    fs.writeFileSync(filePath, htmlContent, "utf8");
    console.log(`✅ Created: ${href}`);
  } else {
    console.log(`🟡 Skipped: ${href} 已存在`);
  }
}

menu.forEach((item) => {
  createPageIfNotExists(item.href, item.title);
  if (item.children && item.children.length > 0) {
    item.children.forEach((child) => {
      createPageIfNotExists(child.href, child.title);
    });
  }
});
