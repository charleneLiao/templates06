// generateModules.js
const fs = require("fs");
const path = require("path");

// 想要產生的模組清單
const components = [
  "headerComponent",
  "bookingBarComponent",
  "bannerComponent",
  "specialOffersComponent",
  "popularRoomsComponent",
  "diningFacilitiesComponent",
  "footerComponent"
];

const outputDir = path.join(__dirname, "js/modules");

// 如果目錄不存在就建立
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

components.forEach(name => {
  const funcName = "load" + name.replace("Component", "").replace(/^\w/, c => c.toUpperCase());
  const filePath = path.join(outputDir, `${name}.js`);
  const content = `
// ${name}.js 自動產生

window.${funcName} = function () {
  const target = document.getElementById("${name}");
  if (!target) return;

  target.innerHTML = \`
    <section class="${name}">
      <h2>${funcName} 區塊</h2>
      <p>這是 ${name} 的預設內容，可替換。</p>
    </section>
  \`;
};
`;

  fs.writeFileSync(filePath, content.trim());
  console.log(`✅ 已產生 ${filePath}`);
});
