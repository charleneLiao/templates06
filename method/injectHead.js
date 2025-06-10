const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const sharedHeadPath = path.join(rootDir, "sharedHead.html");

const sharedHead = fs.readFileSync(sharedHeadPath, "utf8");

// 取 head 中間區塊
const headContent = sharedHead.split("<!-- START: shared head -->")[1].split("<!-- END: shared head -->")[0].trim();

function updateMainStructure(html, fileTitle) {
  return html.replace(
    /<main>\s*<h1>(.*?)<\/h1>\s*<p>此頁尚未填寫內容。<\/p>\s*<\/main>/i,
    `<main>
  <div class="hd">
    <h1>${fileTitle}</h1>
    <p>此頁尚未填寫內容。</p>
  </div>
</main>`
  );
}

fs.readdirSync(rootDir)
  .filter(file => file.endsWith(".html"))
  .forEach(file => {
    const filePath = path.join(rootDir, file);
    let html = fs.readFileSync(filePath, "utf8");

    const hasHead = html.includes("<!-- START: shared head -->");
    const hasMain = html.includes("<main>");

    let updated = false;

    // 插入 sharedHead
    if (!hasHead) {
      html = html.replace(/<head>(.|\s)*?<\/head>/i, `<head>\n<!-- START: shared head -->\n${headContent}\n<!-- END: shared head -->\n</head>`);
      updated = true;
    }

    // 檢查並重構 <main>
    if (hasMain && !html.includes('<div class="hd">')) {
      const fileTitle = path.basename(file, ".html");
      const newHtml = updateMainStructure(html, fileTitle);
      if (newHtml !== html) {
        html = newHtml;
        updated = true;
        console.log(`🔁 重構 main 結構: ${file}`);
      }
    }

    if (updated) {
      fs.writeFileSync(filePath, html, "utf8");
      console.log(`✅ 已更新：${file}`);
    } else {
      console.log(`🟡 無需修改：${file}`);
    }
  });
