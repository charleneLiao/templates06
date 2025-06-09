
window.loadFooter = function () {
  const target = document.getElementById("footerComponent");
  if (!target) return;

  const data = {
    logo: "images/TESTOLOGO.svg",
    hotelName: "高雄特思得行旅",
    address: "高雄市新光路38號24F-6",
    phone: "+886-7-968-2715",
    fax: "+886-7-952-2221",
    social: [
      { href: "https://www.facebook.com/85SkyTowerHotel", icon: "fa-facebook", name: "Facebook" },
      { href: "http://www.weibo.com/1854503391/profile?topnav=1&amp;wvr=3.6", icon: "fa-youtube", name: "YouTube" },
      { href: "https://plus.google.com/u/0/b/110324599943771007016", icon: "fa-google", name: "Google+" }
    ],
    chains: [
      {
        group: "特思得酒店",
        links: ["新竹特思得酒店", "知本特思得酒店", "礁溪特思得酒店", "台北特思得酒店", "北投特思得酒店"]
      },
      {
        group: "特思得行旅",
        links: ["宜蘭傳藝特思得行旅", "特思得大飯店"]
      },
      {
        group: "特思得會館",
        links: ["特思得會館台北南西", "特思得會館台北林森"]
      },
      {
        group: "海外酒店",
        links: ["模里西斯帝王酒店", "尼加拉瓜馬拿瓜皇冠廣場飯店", "帛琉特思得酒店", "西貢特思得酒店"]
      }
    ],
    bottomText: "關於特思得行旅 | 隱私權政策 | 連絡我們 Copyright Easytravel",
    note: "網頁中使用之飯店照片皆由四方通行拍攝，如有任何的拍攝服務需求，請與我們聯絡",
    button: "攝影諮詢"
  };

  let html = `
   <footer class="footerComponent bg-light pt-4 border-top">
  <div class="container">

    <div class="row align-items-center mb-4">
      <div class="col-md-2 text-md-start text-center mb-3 mb-md-0">
        <img src="${data.logo}" alt="logo" class="img-fluid">
      </div>

      <div class="col-md-10 text-md-start text-center">
        <ul class="list-unstyled mb-2 small">
          <li class="fw-bold fs-6">${data.hotelName}</li>
          <li>${data.address}</li>
          <li>訂房專線：${data.phone}</li>
          <li>傳真號碼：${data.fax}</li>
        </ul>
        <div class="d-flex justify-content-md-start justify-content-center gap-3">
          ${data.social.map(item => `
          <a target="_blank" href="${item.href}" class="text-dark fs-5" aria-label="${item.name}">
            <i class="fa ${item.icon}"></i>
          </a>
          `).join('')}
        </div>
      </div>
    </div>
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
  ${(() => {
    const columns = [[], [], [], []];
    data.chains.forEach((group, index) => {
      const groupHTML = `
        <div class="group-column mb-3">
          <div class="group-title">${group.group}</div>
          <ul class="group-list">
            ${group.links.map(name => `<li><a href="#">${name}</a></li>`).join("")}
          </ul>
        </div>
      `;
      columns[index % 4].push(groupHTML);
    });
    return columns.map(col => `<div class="col">${col.join("")}</div>`).join("");
  })()}
</div>

  </div>
  <!-- row end -->

  <div class="text-center border-top pt-3 small text-muted">
    <p class="mb-1">${data.bottomText}</p>
    <p class="mb-2">${data.note}</p>
    <button class="btn btn-outline-dark btn-sm">${data.button}</button>
  </div>
  </div>
</footer>
  `;

  target.innerHTML = html;
};
