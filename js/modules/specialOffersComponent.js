// specialOffersComponent.js 自動產生最新消息區塊

window.loadSpecialOffers = function () {
  const target = document.getElementById("specialOffersComponent");
  if (!target) return;

  // 插入區塊 HTML 結構
  target.innerHTML = `
    <section class="specialOffersComponent">
      <h2 class="text-center hd-title">最新消息</h2>
      <div class="container">
        <div class="promo-slider" id="promoSlider"></div>
      </div>
    </section>
  `;

  // 產生四筆資料 news01~04.jpg
  const slider = document.getElementById("promoSlider");

  for (let i = 1; i <= 4; i++) {
    const num = String(i).padStart(2, '0');
    const promo = {
      img: `images/news/news${num}.jpg`,
      date: `2025/06/${String(8 + i).padStart(2, '0')}`,
      title: `活動標題 ${i}`,
      desc: `這是第 ${i} 筆新聞的簡要說明內容，可替換為實際資料。`
    };

    slider.innerHTML += `
      <div class="card mx-2">
        <img src="${promo.img}" class="card-img-top" alt="${promo.title}">
        <div class="card-body">
          <p class="text-muted small mb-1">${promo.date}</p>
          <h5 class="card-title">${promo.title}</h5>
          <p class="card-text">${promo.desc}</p>
          <a href="news_detail.html" class="btn btn-primary w-100">詳細內容</a>
        </div>
      </div>
    `;
  }

  // 初始化 Slick 輪播（插入完立即執行，⚠️不要再包 document.ready）
  $('.promo-slider').slick({
    slidesToShow: 3,         // 每次顯示3張
    slidesToScroll: 3,       // 每次滑動3張（←←←重點）
    arrows: true,            // 顯示左右箭頭
    dots: true,              // 底部圓點分頁
    autoplay: true,          // ✅ 開啟自動輪播
    autoplaySpeed: 5000,    // ✅ 每5秒輪播一次
    pauseOnHover: true,      // 滑鼠移上暫停
    infinite: true,          // ✅ 無限輪播
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2     // ✔️ RWD 時也要一起設
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

};
