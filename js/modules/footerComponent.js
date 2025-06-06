window.loadFooter = function () {
  const target = document.getElementById("footerComponent");
  if (!target) return;

  const data = {
    logo: "images/logo.png",
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
    <footer class="footerComponent">
      <div class="fpc">
        <div class="wrp-1 logo">
          <img src="${data.logo}" alt="logo">
        </div>
        <div class="wrp-2">
          <ul>
            <li class="name">${data.hotelName}</li>
            <li>${data.address}</li>
            <li>訂房專線： ${data.phone}</li>
            <li>傳真號碼： ${data.fax}</li>
          </ul>
          <div class="share">
            <p class="title">Follow Us</p>
  `;

  data.social.forEach(item => {
    html += `
      <a target="_blank" href="${item.href}" class="icon">
        <span class="text-hide">${item.name}</span>
        <i class="fa ${item.icon}" aria-hidden="true"></i>
      </a>
    `;
  });

  html += `</div></div><div class="wrp-3 chain">
      <span class="chainname">特思得酒店集團</span>`;

  data.chains.forEach(group => {
    html += `<h3>${group.group}</h3>`;
    html += group.links.map(name => `<a href="#" target="_blank">${name}</a>`).join(" │ ");
  });

  html += `</div></div>
    <div class="footer-note">
      <p>${data.bottomText}</p>
      <p>${data.note}</p>
      <button style="margin-top:0.5em;padding:0.5em 1em;">${data.button}</button>
    </div>
    </footer>`;

  target.innerHTML = html;
};
